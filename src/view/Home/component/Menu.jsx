import React from "react";
import { menu } from "../../../service/index.js";
import { useRequest } from 'ahooks';
export default function Menu() {
  const { data } = useRequest(menu)
  const mun = data?.data?.data
  return (
    <div className="flex overflow-auto w-[100%] lunbo relative">
      {mun?.map((item) => (
        <div className="text-[white] w-[12vw] ml-[7vw]" key={item.id}>
          <img className="h-[12.39vw] w-[12.62vw] red-image" src={item.iconUrl} alt="" />
          <p className="text-[2.43vw] text-[#666f7f] w-[13.32vw] mt-[2vw] text-center">
            {item.name}
          </p>
          <span className="absolute top-[5vw] left-[11vw] text-[white] text-xs">
            {new Date().getDate()}
          </span>
        </div>
      ))}
    </div>
  );
}
