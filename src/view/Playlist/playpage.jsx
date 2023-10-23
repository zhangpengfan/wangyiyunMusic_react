import React, { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import Glass from "react-blur";
import { getMP3, lyricText, getSongDetail } from "../../service/index";
import { useParams, NavLink } from "react-router-dom";
import { useRequest } from "ahooks";
export default function PlayPage() {
    const [show, setshow] = useState("true")
    const [isPlaying, setIsPlaying] = useState(true);
    const { id } = useParams()
    const { data: musicurl } = useRequest(() => getMP3(id))//歌曲链接
    const { data: musictext } = useRequest(() => lyricText(id))//歌词
    const { data: musicdata } = useRequest(() => getSongDetail(id))//歌曲信息
    const musicurldata = musicurl?.data
    const musiclyricText = musictext
    const musicData = musicdata?.data
    console.log(musicurl)
    //控制音频的播放
    const audioElementRef = useRef(null)//音频
    const inputref = useRef(null)//进度条
    const [curntimer, setcurntimer] = useState("")
    const [duration, setduration] = useState("");
    const togglePlay = () => {
        const audioElement = audioElementRef.current;
        // const audistent = audioElementRef.current.duration;
        if (isPlaying) {
            audioElement.pause(); // 暂停
        } else {
            audioElement.play(); // 播放
        }
        setIsPlaying(!isPlaying);
    };
    //时间转换
    const conversion = (timer) => {
        const minute = Math.floor(timer / 60000)//分钟
        const Seconds = Math.round((timer % 60000) / 1000)//秒数
        return `${minute < 10 ? "0" + minute : minute}:${Seconds < 10 ? "0" + Seconds : Seconds}`;
    }
    return (musicData &&
        <Glass img={musicData?.songs[0]?.al?.picUrl} blurRadius={30}>
            <div className="h-[100vh] w-[100%] absolute top-0 overflow-hidden">
                {/* 歌曲标题 */}
                <div className="flex items-center justify-between z-999 fixed top-0 w-[100%] p-[4vw]">
                    <div>
                        <NavLink to={-1}>
                            <Icon icon="teenyicons:left-outline" color="white" width={20} />
                        </NavLink>
                    </div>
                    <div>
                        <p className="h-[5vw] text-[4vw] text-[#fff] text-center">{musicData?.songs[0]?.name}</p>
                        <p className="text-center text-[2vw] mt-2 text-[#BCBFBF]">{musicData?.songs[0]?.ar[0]?.name} <span className="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]">关注</span></p>
                    </div>
                    <div>
                        <Icon icon="material-symbols:share" color="white" width={20} />
                    </div>
                </div>
                {/* 唱片歌词 */}
                <div onClick={() => setshow(!show)} className="relative top-[10%] w-[100%] h-[120vw]">
                    <div className="absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[25vw] h-[40vw]">
                        <img src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png" alt="" className="absolute top-0 left-[30%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
                            style={{ transform: isPlaying ? 'rotate(-10deg)' : 'rotate(-45deg)', }} />
                    </div>
                    <div className="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]">
                        <div className="absolute w-[80vw] h-[80vw]">
                            <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" className="absolute top-0 w-[80vw] h-[80vw]" />
                            <img src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png" alt="" className="w-[80vw] h-[80vw] absolute top-0" />
                        </div>
                        <img src={musicData?.songs[0]?.al?.picUrl} alt=""
                            className={`w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000] ${isPlaying ? 'rotateAnimation1' : 'paused-animation'}`} />
                        <audio src={musicurldata?.data[0]?.url} loop autoplay="true" ref={audioElementRef}
                            onTimeUpdate={() => {
                                setcurntimer(audioElementRef.current.currentTime)
                                setduration(audioElementRef.current.duration)
                                inputref.current.value = (audioElementRef.current.currrenTime / audioElementRef.current.duration) * 100
                            }}
                        ></audio>

                    </div>
                </div>
                {/* <div className="top-[2%] w-[100vw] h-[120vw]" onClick={() => setshow(!show)}>
                {musiclyricText?.data?.lrc}
            </div> */}
                <div className="fixed bottom-0 left-0 w-[100%] p-[4vw]">
                    <div className="flex items-center justify-between">
                        <Icon icon="ant-design:heart-filled" color="white" />
                        <Icon icon="solar:download-linear" color="white" width="20" />
                        <p className="text-[white] text-[3vw] border border-[white] rounded-md h-[5.5vw] w-[5.33vw] p-[1vw] pb-[5vw]">词</p>
                        <Icon icon="fluent:chat-32-regular" color="white" width="20" />
                        <Icon className="text-[white]" icon="simple-line-icons:options-vertical" width="20" color="white" />
                    </div>
                    {/* 进度条 */}
                    <div className="h-[8vw] w-[100%] flex items-center  mt-[3vw] justify-between">
                        <div className="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">00:00</div>
                        <div className="flex-1 mx-[2.5vw]">
                            <input type="range" max={100} className="w-[100%]"
                                min={0}
                                ref={inputref}
                                value={(curntimer / duration) * 100}
                                onChange={() => {
                                    audioElementRef.current.currrenTime = (inputref.current.value / 100) * audioElementRef.current.duration
                                }}
                            />
                        </div>
                        <div className="text-[#000] text-[1.6vw] scale-[0.8] opacity-50">{conversion(musicurl?.data?.data[0]?.time)}</div>
                    </div>
                    {/* 播放控件 */}
                    <div className="h-[12.3vw] flex items-center justify-between">
                        <Icon icon="icon-park-outline:loop-once" color="white" />
                        <Icon icon="fluent:previous-16-filled" className="text-[#fff]" />
                        <Icon icon={isPlaying ? 'carbon:pause-filled' : 'ph:play-fill'} width="20px" color="white" onClick={() => togglePlay()} />
                        <Icon icon="fluent:next-20-filled" className="text-[#fff]" />
                        <Icon icon="iconamoon:playlist-fill" className="text-[6vw] text-[#fff]" />
                    </div>
                </div>
            </div >
        </Glass>
    )
}
