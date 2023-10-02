import React from "react";
import { useNavigate } from "react-router-dom";
import { TabBar } from "antd-mobile";
import { Icon } from "@iconify/react";
import {
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
export default function Nav() {
  const navigate = useNavigate();
  const setRouteActive = (key) => {
    navigate(key);
  };
  const tabs = [
    {
      key: "/Home",
      title: "发现",
      icon: <Icon icon="ri:netease-cloud-music-fill" color="red" />,
    },
    {
      key: "/Mv",
      title: "MV排行榜",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/PersonalCenter",
      title: "我的",
      icon: <MessageOutline />,
    },
    {
      key: "/No",
      title: "我的",
      icon: <UserOutline />,
    },
  ];
  return (
    <div className="fixed left-0 bottom-0 w-[100%] border-t border-[#ccc] pt-2 bg-[#31333a] z-[150]">
      <TabBar onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}
