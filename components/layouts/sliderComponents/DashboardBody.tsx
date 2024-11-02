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
    icon: <Icon className="text-2xl" icon="fa6-solid:hotel" />,
    text: "Hotels",
    url: "/tables/hotel-table",
  },
  {
    icon: <Icon className="text-2xl" icon="fluent:conference-room-20-filled" />,
    text: "RoomTypes",
    url: "/tables/room-type-table",
  },
  {
    icon: <Icon className="text-2xl" icon="fontisto:room" />,
    text: "InRooms",
    url: "/tables/in-room-table",
  },
  {
    icon: <Icon className="text-2xl" icon="lsicon:order-edit-outline" />,
    text: "OrderStatuses",
    url: "/tables/order-status-table",
  },
  {
    icon: <Icon className="text-2xl" icon="mdi:beach" />,
    text: "BeachTypes",
    url: "/tables/beach-type-table",
  },
  {
    icon: <Icon className="text-2xl" icon="fluent:food-20-regular" />,
    text: "DietTypes",
    url: "/tables/diet-type-table",
  },
  {
    icon: <Icon className="text-2xl" icon="guidance:reception-hotel-bell" />,
    text: "InHotels",
    url: "/tables/in-hotel-table",
  },
  {
    icon: <Icon className="text-2xl" icon="tabler:mood-kid" />,
    text: "ForKids",
    url: "/tables/for-kids-table",
  },
{
    icon: <Icon className="text-2xl" icon="material-symbols:sports-tennis" />,
    text: "ForSport",
    url: "/tables/for-sport-table",
  },
];


const tours: SidebarButtonType[] = [
  {
    icon: <Icon className="text-2xl" icon="fa6-solid:truck-plane" />,
    text: "Transportation types",
    url: "/tables/transportation-type-table",
  },
  {
    icon: <Icon className="text-2xl" icon="dashicons:buddicons-activity" />,
    text: "Activity",
    url: "/tables/activity-table",
  },
  {
    icon: <Icon className="text-2xl" icon="carbon:tour" />,
    text: "Tours",
    url: "/tables/tour-table",
  },
]

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
      <CollapseItems
        icon={<Icon className="text-2xl" icon="carbon:tour" />}
        title="Tours"
        items={tours}
        onButtonPress={onButtonPress}
      />
    </>
  );
}
