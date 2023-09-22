import React from "react";
import { useEffect, useState } from "react";
import { Musiccalendar } from "../../../service/index";
export default function MusicCalendar() {
  let [music, setmusic] = useState([]);
  useEffect(() => {
    Musiccalendar()
      .then((res) => {
        console.log(res);
        setmusic(res.data.data.calendarEvents.slice(0, 2));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="px-[4vw] py-[4vw] shadow-xl bg-[#25272e] mt-2 rounded-xl">
      {music.map((item) => (
        <div className="mt-[3vw] flex justify-between border-b border-[#2d2f36] items-center">
          <div>
            <p className="text-[2.72vw] text-[white]">{`${
              new Date().getMonth() + 1
            }/${new Date().getDate()}`}</p>
            <p className="text-[#3E4558] text-[2.72vw]">{item.title}</p>
          </div>
          <div className="pb-[5px]">
            <img
              src={item.imgUrl}
              alt=""
              className="w-[15vw] h-[15vw] rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
