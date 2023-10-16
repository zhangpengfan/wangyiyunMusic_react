import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { fetchToplistDetail, SearchBox } from "../../service/index";
export default function Search() {
  let [list, setList] = useState([]);
  let [serach, setsearch] = useState([]);
  let [content, setcontent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToplistDetail();
      setList(data.slice(0, 20));
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);
  //搜索框内容
  useEffect(() => {
    SearchBox(content)
      .then((res) => {
        setsearch(res.data.result.songs);
        console.log(res.data.result.songs)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [content]);
  const MenuData = [
    {
      icon: "ph:user-fill",
      title: "歌手",
    },
    {
      icon: "ic:round-radio",
      title: "曲风",
    },
    {
      icon: "bx:music",
      title: "专区",
    },
    {
      icon: "ph:microphone-fill",
      title: "识曲",
    },
  ];
  const LikeData = ["方大同", "周杰伦", "陪你度过漫长岁月", "张杰"];
  return (
    <div className="bg-[#1a1c23] pb-[45px] relative">
      {/* 头部 */}
      <div className="h-[16.49vw] w-[100%] flex justify-around items-center fixed top-[0] z-50 bg-[#1a1c23] dark:bg-[#f1f3fb]">
        <NavLink to={-1}>
          <div className="mt-[2vw] text-[white]">
            <Icon icon="mingcute:left-line" width="30" height="30" />
          </div>
        </NavLink>
        <div className="relative mt-[2vw]">
          <input
            type="text"
            className="rounded-3xl w-[76.39vw] pl-[8vw] bg-[#ebdbfa]"
            placeholder="明天你好 -牛奶咖啡"
            onChange={(event) => {
              const value = event.target.value;
              setcontent(value);
            }}
          />
          <span className="absolute top-1 left-1">
            <Icon icon="circum:search" color="#78758b" />
          </span>
          <span className="absolute top-1 left-[16.25rem]">
            <Icon icon="ph:scan-duotone" color="#78758b" />
          </span>
        </div>
        <div className="mt-[2vw] text-[white] dark:text-[black]">搜索</div>
      </div>
      {/* 菜单  */}
      <div className="w-[100%] mt-[16.29vw] pl-[10px] pr-[10px] bg-[#1a1c23] dark:bg-[#f1f3fb]">
        <ul className="flex-row ml-[11.1vw] justify-between flex mr-[10.48vw]">
          {MenuData.map((item) => (
            <li key={item.id}>
              <Icon icon={item.icon} color="#fb3c4b" width="30" height="30" />
              <p className="text-[white] text-[2.84vw] dark:text-[black] mt-[1.87vw]">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* 猜你喜欢 */}
      <div className="w-[100%] mt-[3.88vw] pl-[10px] pr-[10px] bg-[#1a1c23] dark:bg-[#f1f3fb]">
        <div className="flex flex-row justify-between">
          <span className="text-[white] dark:text-[black] text-[3.2vw]">
            猜你喜欢
          </span>
          <span>
            <Icon
              className="text-[white] dark:text-[black]"
              icon="ic:baseline-refresh"
              width="20"
              height="25"
            />
          </span>
        </div>
        <div className="mt-[2.49vw]">
          <ul className="flex flex-row justify-between">
            {LikeData.map((index) => (
              <li className="h-[7.28vw] bg-[#31333a] text-[white] rounded-xl pl-[3vw] pr-[2.4vw] leading-[7.28vw]">
                {index}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 排行榜 */}
      <div className="overflow-auto lunbo">
        <div className="flex mt-7 px-[10px] w-[1000%]">
          {list.map((item) => (
            <div
              key={item.id}
              className="w-[61vw] bg-[#31333a] rounded-[2vw] ml-[2.344vw]"
            >
              <div className="border-b-[#43454c] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px]">
                <span className="text-[4vw] text-[#fff] mr-[3.359vw] ml-[4vw] over">
                  {item.name}
                </span>
                <div className="h-[5.235vw] bg-[#393b42] flex items-center px-[2vw] rounded-[3vw]">
                  <Icon icon="mdi:play" color="white" />
                  <span className="text-[2.6vw] text-[#fff]">播放</span>
                </div>
              </div>
              <div className="pr-[2vw]">
                {item.tracks.slice(0, 20).map((item, index) => (
                  <div
                    className="my-[2.7vw] flex items-center h-[8vw]"
                    key={index}
                  >
                    <span
                      className={`text-[3.2vw] w-[8.83vw] text-center font-[400] ${index < 3 ? "text-[red]" : "text-[#858393] "
                        }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-[#fff] text-[3.2vw]  mr-[1vw] w-[50vw] over">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 搜索内容 */}
      {content ? (
        <div className="absolute top-0 left-0 w-[100%] bg-[#1a1c23] z-[999] px-[10px]">
          {serach.map((item, index) => (
            <div className="flex items-center p-[10px] border-b border-[#282a31]" key={item.id} >
              <Icon icon="basil:search-outline" color="white" />
              <p className="ml-2 text-[white] over">{item.name}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
