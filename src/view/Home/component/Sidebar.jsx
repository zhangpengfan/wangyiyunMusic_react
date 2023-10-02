import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Switch } from "antd-mobile";
export default function Sidebar() {
  const navigte = useNavigate();
  // 侧边栏数据
  const data = [
    {
      title: false,
      data: [
        { icon: "solar:letter-linear", name: "我的消息", rigth: false },
        { icon: "cib:shell", name: "云贝中心", rigth: "签到" },
        { icon: "mingcute:light-line", name: "创作者中心", rigth: false },
      ],
      id: "sidebar#1",
    },
    {
      title: "音乐服务",
      data: [
        {
          icon: "ph:star-of-david-light",
          name: "趣测",
          rigth: "点击查看今日运势",
        },
        { icon: "ion:ticket-outline", name: "云村有票", rigth: false },
        {
          icon: "mdi:help-box-outline",
          name: "多多西西口袋",
          rigth: false,
        },
        { icon: "ep:handbag", name: "商城", rigth: false },
        {
          icon: "streamline:interface-signal-square-heart-line-stats-beat-square-graph",
          name: "Beat专区",
          rigth: "顶尖制作邀你创作",
        },
        { icon: "tabler:bell-ringing-2", name: "口袋彩铃", rigth: false },
        {
          icon: "icon-park-outline:gamepad",
          name: "游戏专区",
          rigth: "音乐浇灌治愈花园",
        },
      ],
      id: "sidebar#2",
    },
    {
      title: "其他",
      data: [
        { icon: "ri:settings-line", name: "设置", rigth: false },
        {
          icon: "line-md:moon-loop",
          name: "浅色模式",
          rigth: false,
          btn: true,
        },
        { icon: "mdi:alarm-clock", name: "定时关闭", rigth: false },
        { icon: "ph:t-shirt-thin", name: "个性装扮", rigth: false },
        {
          icon: "iconoir:headset-issue",
          name: "边听边存",
          rigth: "未开启",
        },
        {
          icon: "iconoir:headset-issue",
          name: "在线听歌免流量",
          rigth: false,
        },
        { icon: "solar:card-linear", name: "音乐黑名单", rigth: "未开启" },
        {
          icon: "ant-design:stop-outlined",
          name: "青少年模式",
          rigth: "未开启",
        },
        { icon: "ep:alarm-clock", name: "音乐闹钟", rigth: false },
      ],
      id: "sidebar#3",
    },
    {
      title: false,
      data: [
        { icon: "iconoir:page", name: "我的订单", rigth: false },
        { icon: "ion:ticket-outline", name: "优惠券", rigth: false },
        { icon: "ep:service", name: "我的客服", rigth: false },
        {
          icon: "ri:share-circle-line",
          name: "分享网易云音乐",
          rigth: false,
        },
        {
          icon: "ph:file-thin",
          name: "个人信息收集与使用清单",
          rigth: false,
        },
        {
          icon: "icon-park-outline:circle-five-line",
          name: "个人信息第三方共享清单",
          rigth: false,
        },
        { icon: "icons8:share", name: "个人信息与隐私保护", rigth: false },
        { icon: "icon-park-outline:attention", name: "关于", rigth: false },
      ],
      id: "sidebar#4",
    },
  ];
  const cookie = null;
  return (
    <div className="p-[7vw] bg-[#151515] h-[100%]">
      {/* 用户头像 */}
      <div className="flex items-center justify-between mb-[4vw]">
        <div className="flex items-center">
          {cookie ? (
            <div
              className="flex items-center"
              onClick={() => navigte("/PersonalCenter")}
            >
              <div className="w-[8vw] h-[8vw] rounded-[50%] mr-[2vw] bg-[#f7f2f1] flex items-center justify-center overflow-hidden">
                <img src="" alt="" />
              </div>
              <span className="text-[3.5vw] text-[#fff] ">
                {/* {userData.nickname} */}
              </span>
            </div>
          ) : (
            <div
              className="flex items-center"
              onClick={() => navigte("/Login")}
            >
              <div className="w-[8vw] h-[8vw] rounded-[50%] mr-[2vw] bg-[#f7f2f1] flex items-center justify-center overflow-hidden">
                <Icon
                  icon="gridicons:user"
                  color="#fff"
                  className="text-[8vw]"
                />
              </div>
              <span className="text-[3.5vw] text-[#fff]"> 立即登录 </span>
            </div>
          )}
          <Icon
            icon="mingcute:right-line"
            className="text-[4vw] text-[#fff]]"
          />
        </div>
        <Icon
          icon="teenyicons:scan-outline"
          className="text-[5vw] text-[#fff] dark:text-[#fff]"
        />
      </div>
      {/* 头像结束 */}

      <div className="h-[90vh] overflow-y-scroll">
        <div className="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]">
          <div className="h-[10vw] flex justify-between items-center">
            <h1 className="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
            <div className="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]">
              会员中心
            </div>
          </div>
          <div className="h-[7vw] border-b-[1px] border-[#494443]">
            <p className="text-[2.73vw]">点击恢复超21项专属特权</p>
          </div>
          <div className="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]">
            <div className="text-[2.5vw] h-[11vw]">
              受邀专享，黑胶VIP低至0.27元/天!
            </div>
            <div className="scale-50 w-[8vw]">
              <div className="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50">
                受邀专享
              </div>
            </div>
          </div>
        </div>
        {data.map((item) => (
          <div className="rounded-[15px] bg-[#2c2c2c] w-[76vw] mx-auto mt-[4vw]">
            {item.title && (
              <div className="text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">
                {item.title}
              </div>
            )}
            <div className="px-[4vw]">
              {item.data.map((item1) => (
                <div
                  className="flex items-center justify-between h-[12vw]"
                  key={item1.id}
                >
                  <div className="flex items-center">
                    <Icon
                      icon={item1.icon}
                      className="font-[800] w-[4vw] h-[4vw] text-[#fff]"
                    />
                    <span className="text-[#fff] text-[3.5vw] ml-[2.73vw]">
                      {item1.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {item1.rigth && (
                      <span className="text-[color:#b5b5b5] text-[3vw]">
                        {item1.rigth}
                      </span>
                    )}
                    {!item1.btn ? (
                      <Icon
                        icon="mingcute:right-line"
                        color="#b5b5b5"
                        className="font-[800] w-[6vw] h-[6vw]"
                      />
                    ) : (
                      <div className="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
                        <Switch
                          defaultChecked
                          style={{
                            "--checked-color": "#00b578",
                            "--height": "36px",
                            "--width": "60px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {cookie ? (
          <div className="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#2c2c2c] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]">
            退出登录/关闭
          </div>
        ) : (
          <div className="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#2c2c2c] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]">
            关闭云音乐
          </div>
        )}
      </div>
    </div>
  );
}
