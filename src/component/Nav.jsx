import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TabBar } from "antd-mobile";
import { Icon } from "@iconify/react";
export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (key) => {
    navigate(key);
  };
  const tabs = [
    {
      key: "/Home",
      title: "首页",
      icon: <Icon icon='ri:netease-cloud-music-fill' />,
    },
    {
      key: "/MV",
      title: "排行榜",
      icon: <Icon icon='ion:podium-sharp' />,
    },
    {
      key: "/PersonalCenter",
      title: "我的",
      icon: <Icon icon='mingcute:music-line' />,
    },
    {
      key: "/Follow",
      title: "关注",
      icon: <Icon icon='iconoir:user-love' />,
    },
    {
      key: "/Topic",
      title: "社区",
      icon: <Icon icon='ph:wechat-logo' />,
    },
  ];
  return (
    <div className="fixed left-0 bottom-0 w-[100%] border-t border-[#ccc] pt-2 bg-[#31333a] z-[150]">
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}
