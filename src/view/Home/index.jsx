import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Carouselmap from "./component/Carouselmap.jsx";
import Menu from "./component/Menu.jsx";
import Song from "./component/Song.jsx";
import Hotopic from "./component/Hottopic.jsx";
import Recommendedplaylists from "./component/Recommendedplaylists.jsx";
import Title from "../../component/Title.jsx";
import MusicCalendar from "./component/Musiccalendar.jsx";
import List from "./component/List.jsx";
import { useNavigate } from "react-router-dom";
import { Popup } from "antd-mobile";
import Sidebar from "./component/Sidebar.jsx";
export default function Index() {
  const naviget = useNavigate();
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full bg-[#1a1c23] pb-[60px] overflow-hidden">
      {/* 侧边栏 */}
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        position="left"
        bodyStyle={{ width: "90vw" }}
      >
        <Sidebar />
      </Popup>
      {/* 头部搜索栏 */}
      <div className='flex w-[100%] h-[20.49vw] items-center relative justify-between p-[4vw] bg-[#1a1c23]'>
        <span onClick={() => { setVisible(true); }}>
          <Icon icon="ri:menu-fill" color="#78758b" width="30" />
        </span>
        <Icon
          icon='iconamoon:search'
          className='absolute ml-[10vw] w-[4vw] h-[4vw]'
        />
        <input
          onClick={() => {
            naviget("/Search");
          }}
          type='text'
          className='w-[74vw] h-[9vw] border rounded-[20px] indent-[8vw]'
          placeholder='明天你好-牛奶咖啡'
        />
        <Icon
          icon='teenyicons:scan-solid'
          className='absolute ml-[75vw] w-[4vw] h-[4vw]'
        />
        <Icon icon="ph:microphone-fill" color="#78758b" width="30" />
      </div>
      {/* 轮播图 */}
      <div className="pt-[5vw] w-[100%] p-[4vw] rounded-2xl mx-[auto]">
        <Carouselmap />
      </div>
      {/* 菜单 */}
      <div className="mt-[4vw]">
        <Menu />
      </div>
      {/* 推荐歌单 */}
      <div className="w-screen mt-[9.7vw] border-b-[1px] border-[#2d2f36] px-[10px]">
        <Title title="推荐歌单" router={"/SingerSquare"} />
        <Recommendedplaylists />
      </div>
      {/* 新歌 */}
      <div className="w-screen mt-[6vw] pb-[4vw] border-b-[1px] border-[#2d2f36] px-[10px]">
        <Title title="新歌新碟\数字专辑"></Title>
        <Song />
      </div>
      {/* 排行榜 */}
      <div className="w-screen px-[10px] mt-[4vw] border-b border-[#2d2f36] pb-[20px]">
        <Title title="排行榜"></Title>
        <List />
      </div>
      {/* 热门话题 */}
      <div className="w-screen pl-[10px] pr-[10px] mt-[4vw] border-b border-[#2d2f36] pb-[20px]">
        <Title title="热门话题"></Title>
        <Hotopic />
      </div>
      {/* 音乐日历 */}
      <div className="mt-[2vw] px-[10px] overflow-auto">
        <Title title="音乐日历"></Title>
        <MusicCalendar />
      </div>
    </div>
  );
}
