import SidebarButtonType from "@/types/sidebar/SidebarButtonType";
import { CollapseItems } from "@/components/sidebar/CollapseItems";
import React from "react";
import { Icon } from "@iconify-icon/react";
import { PressEvent } from "@react-types/shared";

interface DashboardBodyProps {
  onButtonPress?: (e: PressEvent) => void;
}

const countries: SidebarButtonType[] = [
  {
    icon: <Icon className="text-2xl" icon="solar:globus-bold-duotone" />,
    text: "Countries",
    url: "/tables/country-table",
  },
  {
    icon: <Icon className="text-2xl" icon="solar:city-linear" />,
    text: "Cities",
    url: "/tables/city-table",
  },
];

const hotels: SidebarButtonType[] = [
  {
    icon: <Icon className="text-2xl" icon="fluent:conference-room-20-filled" />,
    text: "RoomTypes",
    url: "/tables/room-type-table",
  },
  {
    icon: <Icon className="text-2xl" icon="fa6-solid:truck-plane" />,
    text: "TransportationTypes",
    url: "/tables/transportation-type-table",
  },
  {
    icon: <Icon className="text-2xl" icon="fontisto:room" />,
    text: "InRooms",
    url: "/tables/in-room-table",
  },
];

export default function DashboardBody({
  onButtonPress,
}: Readonly<DashboardBodyProps>) {
  return (
    <>
      <CollapseItems
        icon={<Icon className="text-2xl" icon="mdi:world" />}
        title="World"
        items={countries}
        onButtonPress={onButtonPress}
      />
      <CollapseItems
        icon={<Icon className="text-2xl" icon="fontisto:hotel" />}
        title="Hotel"
        items={hotels}
        onButtonPress={onButtonPress}
      />
    </>
  );
}
