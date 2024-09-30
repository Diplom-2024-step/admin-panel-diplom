import ModelTable, { ModelTableProps } from "@/components/tables/ModelTable";
import React from "react";
import { Divider } from "@nextui-org/divider";
import { Icon } from "@iconify-icon/react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { ModelDto } from "@/AppDtos/Shared/model-dto";

interface ModelLayoutProps<TGetModelDto extends ModelDto> extends ModelTableProps<TGetModelDto> {
  title: string;
  icon?: React.ReactNode;
}

export default function ModelLayout<TGetModelDto extends ModelDto>(
  {
    title,
    icon,
    ...otherProps
  }: Readonly<ModelLayoutProps<TGetModelDto>>) {
  return <div
    className="grid grid-rows-[auto,auto,minmax(0,1fr)] h-full gap-5 [@media(max-height:640px)]:grid-rows-[auto,minmax(0,1fr)]">
    <Breadcrumbs variant="bordered">
      <BreadcrumbItem href="/"
                      startContent={<Icon className="text-2xl" icon="lets-icons:home-duotone" />}
      >
        Home
      </BreadcrumbItem>
      <BreadcrumbItem startContent={<p className="text-2xl h-6">{icon}</p>}>{title}</BreadcrumbItem>
    </Breadcrumbs>
    <h1
      className="text-4xl font-bold flex align-middle gap-3 md:text-6xl [@media(max-height:640px)]:hidden">
      {icon}
      {icon && <Divider orientation={"vertical"} />}
      {title}
    </h1>
    <ModelTable<TGetModelDto> {...otherProps} />
  </div>;
}