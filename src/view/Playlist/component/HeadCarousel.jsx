import React, { useEffect, useState } from "react";
import { musicSlider } from "../../../service/index"
export default function HeadCarousel(props) {
    let [lunbo, setlunbo] = useState([])
    useEffect(() => {
        musicSlider(props.Id)
            .then((res) => {
                setlunbo(res.data.playlists);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.Id]);
    return (<div className="w-[100%] mt-[10vw]">
        <div className="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">喜欢这个歌单的用户也听了</div>
        <div className="flex overflow-auto lunbo">
            {lunbo.map((item) => (
                <div className="w-[28vw] mr-[2.5vw]" key={item.id}>
                    <div className="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                        <img src={item.coverImgUrl} alt="" className="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]" />
                    </div>
                    <p className="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw]">{item.name}</p>
                </div>
            ))}
        </div>
    </div>)
}