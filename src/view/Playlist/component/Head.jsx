import React, { useEffect, useState } from "react";
import { songDetails } from "../../../service/index"
import { Icon } from "@iconify/react";
export default function Heaed(props) {
    let [song, setsong] = useState([])
    useEffect(() => {
        songDetails(props.Id)
            .then((res) => {
                setsong(res.data.playlist)
                props.onSongData(res.data.playlist);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.Id]);
    return (
        <div className="">
            <div className="h-[29vw] flex pt-[2.6vw] mt-[10vw]">
                <div className="w-[24vw] h-[25vw] pt-[1vw] relative">
                    <img src={song?.coverImgUrl} alt="" className="w-[24vw] h-[24vw] rounded-[10px] relative z-[2]" />
                    <div className="w-[20vw] h-[10vw] bg-opacity-20 bg-[#fff] absolute top-0 left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                    <p className="absolute top-0 left-0 pr-[1.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[24vw] z-[2] transform scale-80">
                        <Icon icon="bx:play" color="white" width="20" height="20" />
                        <span className="font-[800] text-[1.5vw]">{Math.floor(song?.playCount / 10000)}</span>
                    </p>
                </div>
                <div className="w-[67vw] pr-[12vw] ml-4">
                    <p className="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">{song?.name}</p>
                    <div className="h-[10.5vw] flex items-center">
                        <img src={song?.creator?.avatarUrl} alt="" className="w-[6vw] h-[6vw] rounded-[50%]" />
                        <span className="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">{song?.creator?.nickname}</span>
                        <span className="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                            <Icon icon="carbon:add" color="#f9fcfb" verticalflip="true" width={20} />
                            关注
                        </span>
                    </div>
                    {/* 标签 */}
                    <div className="flex">
                        {song?.tags?.map((index) => (
                            <div key={index} className="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]">
                                <span className="text-[2.2vw]">{index}</span>
                                <Icon icon="mingcute:right-fill" color="white" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between">
                <span className="text-[#fff] opacity-50 text-[2.8vw] over w-[83vw] overflow-hidden">{song?.description}</span>
                <Icon icon="mingcute:right-fill" color="white" />
            </p>
        </div>
    )
}
