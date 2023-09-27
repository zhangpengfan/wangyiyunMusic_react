import React from "react";
import { useEffect, useState } from "react";
import { Tabs } from "antd-mobile";
import { MvList } from "../../service";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  .adm-tabs-tab-active {
    color: white !important;
  }
  .adm-tabs-tab-line {
    background-color: red !important;
  }
  .adm-tabs-header {
    border: none !important;
  }
`;
export default function Mvlist() {
  const mvtitle = ["内地", "港台", "欧美", "韩国", "日本"];
  let [maps, setmap] = useState([]);
  let [list, setlist] = useState("");
  useEffect(() => {
    MvList(list)
      .then((res) => {
        setmap(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [list]);
  //计算播放量
  const dataTruncation = (playVolume) => {
    if (playVolume > 100000000) {
      return `${Math.floor(playVolume / 100000000)}亿`;
    } else if (playVolume > 100000) {
      return `${Math.floor(playVolume / 10000)}万`;
    } else {
      return playVolume;
    }
  };
  return (
    <Wrapper>
      <div className="bg-[#151515]">
        <div className="flex items-center justify-between text-[white] text-[4.2vw] font-[600] px-[4vw] py-[3vw] w-[60%]">
          <NavLink to={-1}>
            <Icon icon="mingcute:left-line" color="white" />
          </NavLink>
          <p>MV排行榜</p>
        </div>
        <div className="px-[4vw] mt-[10px] w-[100%]">
          <Tabs
            onChange={(value) => {
              setlist(value);
            }}
          >
            {mvtitle.map((index) => (
              <Tabs.Tab title={index} key={index}>
                {maps.map((item, index) => (
                  <div className="w-[92vw] pr-[20px]" key={index}>
                    <div className="w-[100%] h-[52vw] relative">
                      <img
                        src={item.cover}
                        alt=""
                        className="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                      />
                      <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                        <Icon icon="mdi:play" color="white" />
                        <span className="ml-1">
                          {dataTruncation(Number(item.playCount))}
                        </span>
                      </div>
                    </div>
                    <div className="h-[15vw] flex items-center flex-wrap">
                      <div className="flex h-[5vw] w-[100vw]">
                        <span className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                          {index + 1}
                        </span>
                        <span className="flex-1 line-clamp-1 text-[white] text-[4vw] font-semibold h-[5vw]">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex h-[4vw] items-center">
                        <div className="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"></div>
                        <div className=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                          <span>{item.artistName}</span>
                          <span>{}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Tabs.Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </Wrapper>
  );
}
