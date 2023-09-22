import React from "react";
import { playsong } from "../../../service/index";
import { useEffect, useState } from "react";
// import BScroll from '@better-scroll/core'
export default function List() {
  let [list, setlist] = useState([]);
  useEffect(() => {
    playsong().then((res) => {
      console.log(res);
      setlist(res.data.data.blocks[3].creatives);
    });
  }, []);
  console.log("11", list);
  return (
    <div className="w-[100%] overflow-auto mt-[2vw] lunbo">
      <div className="flex  flex-row">
        {list.map((item) => (
          <ul key={item.id} className="ml-[2vw] shadow-md shadow-top">
            <li className="w-[90.56vw] h-[54.03vw] rounded-[.625rem] shadow-blue-500/50 bg-[#272930] dark:bg-[#ffffff]">
              <div className="w-[85vw] flex ml-[4vw] flex-row items-center justify-between">
                <span className="text-[4.6vw] text-[white] dark:text-[black] mt-[4.38vw]">
                  {item.uiElement.mainTitle.title}
                </span>
                <span className="text-2.64vw] text-[#969aa1] mt-[4.38vw]">
                  {item.uiElement.mainTitle.titleDesc}
                </span>
              </div>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="h-[12vw] w-[100%] flex items-center justify-around mt-[2vw]"
                >
                  <div>
                    <img
                      src={
                        item.resources[index].resourceExtInfo?.songData.album
                          .blurPicUrl
                      }
                      alt=""
                      className="h-[10.63vw] w-[10.69vw] rounded-lg"
                    />
                  </div>
                  <div>
                    <span
                      className={
                        index === 1 ? "text-[#818AAC]" : "text-[#bd9642]"
                      }
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="h-[10.63vw]">
                    <p className="w-[53.47vw] overflow-hidden h-[5vw] text-[white] dark:text-[black] text-[4vw]">
                      {item.resources[index].resourceExtInfo?.songData.name}
                    </p>
                    <p className="mt-[1vw] text-[#7f8188] text-[2vw]">
                      {item.resources[index].resourceExtInfo?.artists[0].name}
                    </p>
                  </div>
                  <div>
                    <span className="mt-[1vw] text-[red]">
                      {item.resources[index]?.uiElement.labelText.text}
                    </span>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
