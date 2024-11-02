import { ModelDto } from '@/AppDtos/Shared/model-dto'
import OnChangeFunctionProps from '@/types/model-windows/specific-inputs/OnChangeFunctionProps'
import { Select, SelectedItems, SelectItem, SharedSelection } from '@nextui-org/react'
import React, { ReactNode } from 'react'

const SharedSingleInputFromCollection = <
    TGetDto extends ModelDto
>(
    {
        items,
        currectValue,
        onChange,
        onSelectRenderFunction,
        placeholder,
        propertyName,
        renderFunction
        
    }
    :
    {
        items:TGetDto[]   
        onChange: OnChangeFunctionProps,
        currectValue: any,
        renderFunction: (item:TGetDto) => ReactNode,
        onSelectRenderFunction : (item:TGetDto) => ReactNode,
        placeholder: string
        propertyName: string
    }
) => {


    const innerOnSelectionChanged = (keys: SharedSelection) => {
    var arrayKeys = [...keys];



    onChange({
      target: {
        value: arrayKeys[0],
        name: propertyName,
      }
    } as any,
  "string");
  };




  return (
    <>
      {
        
          <Select
            required={true}
            items={items}
            defaultSelectedKeys={[currectValue]}
            label={placeholder}
            placeholder={placeholder}
            onSelectionChange={innerOnSelectionChanged}
            selectedKeys={[currectValue]}
                  renderValue={(items: SelectedItems<TGetDto>) => {
        return items.map((item) => onSelectRenderFunction(item.data as TGetDto));
      }}
          >
            {(item) => (
              <SelectItem
               key={
                item.id
                }>
                {renderFunction(item)}
              </SelectItem>
            )
            }
          </Select>
      }
    </>
  );
}

export default SharedSingleInputFromCollection