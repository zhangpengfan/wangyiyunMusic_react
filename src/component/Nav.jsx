import React from "react";
import { useNavigate } from "react-router-dom";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
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
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/Button",
      title: "待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/Buttons",
      title: "消息",
      icon: <MessageOutline />,
    },
    {
      key: "/No",
      title: "我的",
      icon: <UserOutline />,
    },
  ];
  return (
    <div className="fixed left-0 bottom-0 w-[100%] border-t border-[#ccc] pt-2 bg-[#9898a9] z-[50]">
      <TabBar onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}
