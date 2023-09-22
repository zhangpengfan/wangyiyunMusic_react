import React from "react";
import { Icon } from "@iconify/react";
import Recommendedplaylists from "./component/Recommendedplaylists.jsx";
import Carouselmap from "./component/Carouselmap.jsx";
import Menu from "./component/Menu.jsx";
import Song from "./component/Song.jsx";
import Hotopic from "./component/Hottopic.jsx";
import Title from "../../component/Title.jsx";
import MusicCalendar from "./component/Musiccalendar.jsx";
import List from "./component/List.jsx";
import { NavLink } from "react-router-dom";
// import {useNavigate} re
export default function Index() {
  return (
    <div className="w-full bg-[#1a1c23] pb-[60px]">
      {/* 头部搜索栏 */}
      <div className="h-[20.49vw] w-[100%] flex justify-around items-center bg-[#1a1c23] dark:bg-[#e9e6fc]">
        <div className="mt-[2vw]">
          <Icon icon="ri:menu-fill" color="#78758b" width="30" />
        </div>
        <NavLink to={"/Search"}>
          <div className="relative mt-[2vw]">
            <input
              type="text"
              className="rounded-3xl w-[76.39vw] pl-[8vw] bg-[#ebdbfa]"
              placeholder="明天你好 -牛奶咖啡"
            />
            <span className="absolute top-1 left-1">
              <Icon icon="circum:search" color="#78758b" />
            </span>
            <span className="absolute top-1 left-[16.25rem]">
              <Icon icon="ph:scan-duotone" color="#78758b" />
            </span>
          </div>
        </NavLink>
        <div className="mt-[2vw]">
          <Icon icon="ph:microphone-fill" color="#78758b" width="30" />
        </div>
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
        <Title title="推荐歌单"></Title>
        <Recommendedplaylists />
      </div>
      {/* 新歌 */}
      <div class="w-screen mt-[6vw] pb-[4vw] border-b-[1px] border-[#2d2f36] px-[10px]">
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
