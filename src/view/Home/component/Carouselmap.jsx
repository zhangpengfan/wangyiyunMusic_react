import React from "react";
import { Swiper } from "antd-mobile";
import { useEffect, useState } from "react";
import { CarouselMap } from "../../../service/index.js";
export default function Carouselmap() {
  let [map, setmap] = useState([]);
  useEffect(() => {
    CarouselMap()
      .then((res) => {
        setmap(res.data.data.blocks[0].extInfo.banners);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = map.map((item, index) => (
    <Swiper.Item key={index}>
      <div className="rounded-2xl w-[88vw] h-[36vw]">
        <img src={item.pic} alt="" className="w-[100%] h-[100%] rounded-2xl" />
      </div>
    </Swiper.Item>
  ));
  return (
    <div>
      <Swiper autoplay loop>
        {items}
      </Swiper>
    </div>
  );
}
