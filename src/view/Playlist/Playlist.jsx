import React, { useState } from "react";
import { fetchSongList } from "../../service/index";
import { useParams, NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import Heaed from "./component/Head";
import HeadCarousel from "./component/HeadCarousel";
import { useRequest } from "ahooks";
export default function Playlist() {
  const { id } = useParams();
  const { data } = useRequest(() => fetchSongList(id))
  const songlist = data?.data?.songs
  let [show, setshow] = useState(true)
  let [song, setsong] = useState([])
  const handleSongData = (songData) => {
    setsong(songData)
  };
  return (<div className="w-[100%]">
    <div className="bg-[#486D8D] p-[3vw] pb-[1.875rem]">
      {/* 头部导航*/}
      <div className="pl-[3.9vw] pr-[3.4vw] h-[13.5vw] flex items-center justify-between fixed top-0 left-0 z-[999] right-0 bg-[#486D8D]">
        <div className="flex items-center">
          <NavLink to={-1}>
            <Icon class="text-[white]" icon="mingcute:left-line" width="30" height="30" color="white" />
          </NavLink>
          <span className="ml-2 text-[white] text-[1rem]">歌单</span>
        </div>
        <div className="flex items-center">
          <Icon class="text-[white]" icon="circum:search" width="30" height="30" color="white" />
          <Icon class="text-[white]" icon="simple-line-icons:options-vertical" width="20" color="white" />
        </div>
      </div>
      {/* 头部数据 */}
      <div className={`transition ${show ? "opacity-1 block animate-fadeIn" : "opacity-0 hidden animate-fadeOut"}`}>
        <Heaed Id={id} onSongData={handleSongData} />
      </div>
      <div className={`transition ${show ? "opacity-0 hidden animate-fadeOut" : "opacity-1 block animate-fadeIn"}`}>
        <HeadCarousel Id={id} />
      </div>
      <div className="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center"
        onClick={() => setshow(!show)} >
        <Icon icon={show ? 'oi:caret-bottom' : 'ep:caret-top'} color="white" />
      </div>
      <div className="flex items-center mt-[3.5vw] justify-between">
        <div className="flex items-center justify-center h-[9.9vw] rounded-[12.5rem] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
          <Icon icon="majesticons:share" color="white" className="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
          {song?.shareCount}
        </div>
        <div className="flex items-center justify-center h-[9.9vw] rounded-[12.5rem] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw] ml-2">
          <Icon icon="fluent:chat-20-filled" color="white" className="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
          {song?.commentCount}
        </div>
        <div className="ml-2 flex items-center justify-center h-[9.9vw] rounded-[12.5rem] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
          <Icon icon="ph:pentagram-fill" color="white" className="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
          {song?.subscribedCount}
        </div>
      </div>
    </div>
    {/* 歌曲列表 */}
    <div className="bg-[#fff] w-[100vw] rounded-[.9375rem] relative z-[1] mt-[-2.5vw] px-[3.8vw]">
      <div className="post h-[13vw] flex items-center justify-between z-10">
        <div className="flex items-center">
          <Icon icon="zondicons:play-outline" color="red" width={30} />
          <span className="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
          <span className="text-[#8C9094] text-[2.7vw]">({songlist?.length})</span>
        </div>
        <div className="flex items-center">
          <Icon icon="clarity:download-line" color="#ccc" width={20} />
          <Icon icon="material-symbols:list" color="#ccc" width={20} />
        </div>
      </div>
      {songlist?.map((item, index) => (
        <div className="flex items-center justify-between h-[14vw]" key={item.id}>
          <div className="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{index + 1}</div>
          <div className="font-medium text-[3.6vw] w-[64vw]">
            <p className="text-[3.6vw] text-ellipsis overflow-hidden over w-[50vw] text-[#949797]">
              <span className="text-ellipsis text-[#000]">{item.name}</span>
            </p>
            <p className="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
              <span>{item.ar[0].name}</span>
            </p>
          </div>
          <Icon icon="arcticons:fpt-play" color="black" />
          <Icon icon="simple-line-icons:options-vertical" width="15" color="#b3b3b3" />
        </div>
      ))}
    </div>
  </div>)
}
