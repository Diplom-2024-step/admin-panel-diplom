import { ModelDto } from '@/AppDtos/Shared/model-dto'
import { Select, SelectedItems, SelectItem } from '@nextui-org/select';
import React, { ReactNode } from 'react'

const SharedSingleDetail = <
  TGetModel extends ModelDto
>(
  {
    items,
    renderFunction,
    onSelectRenderFunction,
    label
  }
  :
  {
      items:TGetModel[];
      renderFunction: (item:TGetModel) => ReactNode;
      onSelectRenderFunction : (item:TGetModel) => ReactNode;
      label:string
  }

) => {
  return (
    <Select
            isDisabled
            items={items}
            defaultSelectedKeys={items.map(item => item.id)}
            label={label}
            selectedKeys={items.map(item => item.id)}
                  renderValue={(items: SelectedItems<TGetModel>) => {
        return items.map((item) => onSelectRenderFunction(item.data as TGetModel));
      }}
          >
            {(item) => (
              <SelectItem key={
                item.id
                }>
                {renderFunction(item)}
              </SelectItem>
            )
            }
          </Select>
  )
}

export default SharedSingleDetail