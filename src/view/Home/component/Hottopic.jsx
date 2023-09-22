import React from "react";
import { Icon } from "@iconify/react";
export default function Hotopic() {
  const data = [
    {
      title: "与银河对视",
      tp: "https://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg",
      txt: "我们是宇宙中最浪漫的乘车客",
      number: "484",
      color: "rgb(148, 148, 148)",
    },
    {
      title: "心之所向是燕园",
      tp: "https://p1.music.126.net/ucIkwjPrUZML6sdKrf2wSA==/109951164968211955.jpg",
      txt: "2022高考/新高考一卷/历生政选手/拉文克劳六年级在读/记录我所热爱的",
      number: "484",
      color: "rgb(134, 133, 170)",
    },
    {
      title: "莎菲娜_Fophia",
      tp: "https://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg",
      txt: "飞机飞过天空.天空之城.",
      number: "484",
      color: "rgb(174, 115, 78)",
    },
    {
      title: "赵婉卿_",
      tp: "https://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg",
      txt: "是爱喝奶茶的婉卿呀～目前生活在无锡，平时给大家分享我的日常照片和舞蹈&日常视频，记得常来看我哦",
      number: "484",
      color: "rgb(148, 148, 148)",
    },
  ];
  return (
    <div className="mt-[3vw] flex items-center overflow-auto lunbo z-50">
      {data.map((item) => (
        <div
          className="w-[66.1vw] h-[27.8vw] rounded-[1.25rem] relative  ml-2"
          style={{ backgroundColor: item.color }}
        >
          <p className="w-[44.94vw] text-[4vw] mt-[3.9vw] text-[white] ml-[3.5vw] flex">
            <Icon icon="mingcute:chat-1-fill" color="white" width="20" />
            {item.title}
          </p>
          <p className="text-[2.2vw] text-[#cbbdd9] ml-[3.5vw] w-[16.19vw]">
            {item.number}万热度
          </p>
          <p className="text-[white] dark:text-[black] text-[3.1vw] mt-[2.1vw] ml-[3.5vw] h-[10vw] w-[20.01vw] overflow-hidden">
            {item.txt}
          </p>
          <img
            src={item.tp}
            alt=""
            className="h-[13vw] w-[13.4vw] rounded-[.625rem] absolute top-12 right-3"
          />
        </div>
      ))}
    </div>
  );
}
