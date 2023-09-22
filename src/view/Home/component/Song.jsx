import React from "react";
import { useEffect, useState } from "react";
import { playsong } from "../../../service/index.js";
export default function Song() {
  let [lists, setlist] = useState([]);
  useEffect(() => {
    playsong()
      .then((res) => {
        setlist(res.data.data.blocks[5].creatives);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-[100%] overflow-auto flex items-center lunbo">
      {lists.map((item) => (
        <div key={item.id}>
          {item.resources.map((item) => (
            <div
              className="w-[87.64vw]  mt-[2.36vw] h-[14vw] flex"
              key={item.index}
            >
              <img
                src={item.uiElement.image.imageUrl}
                className="rounded-lg"
                alt=""
              />
              <div>
                <h4 className="text-[12px] mt-[3px] ml-[2.71vw] text-[white] dark:text-[black]">
                  {item.uiElement.mainTitle.title}
                </h4>
                <p className="text-[12px] mt-[4px] ml-[2.71vw] text-[#7a7a7a]">
                  {item.uiElement.subTitle.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
