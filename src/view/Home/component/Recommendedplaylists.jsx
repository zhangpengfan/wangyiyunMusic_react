import React from "react";
import { Swiper } from "antd-mobile";
import { useEffect, useState } from "react";
import { CarouselMap } from "../../../service/index.js";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
export default function Recommendedplaylists() {
  const navigte = useNavigate();
  let [lists, setlist] = useState([]);
  const plsylist = (id) => {
    console.log(id)
    navigte(`/Playlist/${id}`)
  }
  useEffect(() => {
    CarouselMap()
      .then((res) => {
        setlist(res.data.data.blocks[1].creatives);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const dataTruncation = (playVolume) => {
    if (playVolume > 100000000) {
      return `${Math.floor(playVolume / 100000000)}亿`;
    } else if (playVolume > 100000) {
      return `${Math.floor(playVolume / 10000)}万`;
    } else {
      return playVolume;
    }
  };
  const items = lists.map((item, index) => (
    <Swiper.Item key={index}>
      <div key={index} className="lunbo">
        <img
          src={item.uiElement.image.imageUrl}
          alt=""
          className="w-[30vw] h-[30vw] rounded-2xl mt-[3vw]"
        />
        <p className="text-[2.78vw] text-[white] dark:text-[black] scroll-item mt-[5vw]">
          {lists[0]?.resources[0].uiElement.mainTitle.title}
        </p>

        <div className="absolute top-[4vw] right-[2.5vw] font-[800] text-[#fff] flex items-center">
          <Icon
            icon="ion:play"
            width="10"
            className="text-[#fff] w-[3vw] h-[3vw]"
          />
          <span className="font-[800] text-[2.5vw]">
            {dataTruncation(item.resourceExtInfo?.playCount)}
          </span>
        </div>
      </div>
    </Swiper.Item>
  ));
  return (
    <div className="ml-[2vw] mt-[4.722vw] overflow-auto lunbo">
      <div className="flex w-[250vw] pb-[ 5vw]">
        <div className="relative mr-[2.5vw]">
          <div className="w-[30vw] relative z-[1]">
            <div className="w-[30vw] relative">
              <Swiper
                autoplay
                loop
                direction="vertical"
                indicator={() => <div className="hidden"></div>}
                style={{ "--height": "200px" }}
              >
                {items}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="pb-[10vw] w-[200%]">
          <ul className="mt-2 flex pb-[1vw] ">
            {lists.map((item) => (
              <li
                key={item.id}
                className="whitespace-pre-wrap ml-[2vw] scroll-item relative shadow-md-up"
              >
                <div className="h-[40.81vw] relative">
                  <img
                    src={item.uiElement.image.imageUrl}
                    alt=""
                    className="w-[30vw] h-[30vw] rounded-2xl"
                    onClick={() => { plsylist(item.resources[0].resourceId) }} />
                  <Icon
                    icon="ion:play"
                    width="10"
                    className="absolute bottom-[13vw] right-[2.5vw] text-white w-[5vw] h-[5vw]"
                  />
                  <div className="absolute top-[2vw] right-[2.5vw] font-bold text-white flex items-center">
                    <Icon
                      icon="ion:play"
                      width="10"
                      className="text-white w-[3vw] h-[3vw]"
                    />
                    <span className="font-bold text-[2.5vw]">
                      {dataTruncation(
                        item.resources[0].resourceExtInfo?.playCount
                      )}
                    </span>
                  </div>
                  <div className="text-white dark:text-black w-[20vw] h-[9.29vw] text-[2.47vw] overflow-hidden mt-4">
                    {item.uiElement.mainTitle.title}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
