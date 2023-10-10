import React from "react";
import { useRequest } from 'ahooks';
import { featMvUrl, featMvDetail, featMvDetailInfo } from "../../service/index"
import { useParams, NavLink } from "react-router-dom";
import { NoticeBar } from 'antd-mobile'
import { Icon } from '@iconify/react';
const MvPlay = () => {
    const { id } = useParams()
    const { data: Mvurl } = useRequest(() => featMvUrl(id))//视频链接
    const { data: MvInfo } = useRequest(() => featMvDetail(id))// 作者信息
    const { data: MvValue } = useRequest(() => featMvDetailInfo(id))// 交互数据
    const songdata = MvInfo?.data?.data
    const comment = MvValue?.data
    const Mvdata = Mvurl?.data?.data
    console.log(songdata)
    //计算播放量
    const dataTruncation = (playVolume) => {
        if (playVolume > 100000000) {
            return `${Math.floor(playVolume / 100000000)}亿`;
        } else if (playVolume > 100000) {
            return `${Math.floor(playVolume / 10000)}万`;
        } else {
            return playVolume;
        }
    };
    return (<div className="bg-black w-screen h-screen pb-[-12vw] flex flex-wrap">
        <div className="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]">
            <NavLink to={-1}>
                <Icon icon="teenyicons:left-outline" color="white" width={20} />
            </NavLink>
            <div className="flex items-center">
                <Icon icon="akar-icons:reduce" color="white" className="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent" />
                <Icon icon="simple-line-icons:options-vertical" width="15" color="white" className="text-[6vw] text-[#fefefe] iconify iconify--ri" />
            </div>
        </div>
        <div className="w-[100%] h-[54vw] absolute top-[12%]">
            <div className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--pip-supported plyr--is-touch plyr--paused">
                <video src={Mvdata?.url} loop autoPlay="autoplay" controls="controls"></video>
            </div>
        </div>
        <div className="w-[100%] absolute bottom-[0vw]">
            <div className="flex justify-between px-[4vw] items-end pb-[3vw]">
                <div className="flex-1 mr-[10vw]">
                    <div className="flex items-center mb-[3vw]">
                        <img src={songdata?.artists[0]?.img1v1Url} alt="" className="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]" />
                        <span className="mx-[2vw] text-[#ffffff] text-[4vw]">{songdata?.artists[0]?.name}</span>
                        <div className="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]">
                            <Icon icon="icon-park-twotone:plus-cross" color="white" />
                        </div>
                    </div>
                    <div className="mb-[5vw] van-collapse van-hairline--top-bottom">
                        <p className="text-[3.2vw] text-[white]"><span className="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">Mv</span>
                            {songdata?.name}
                        </p>
                    </div>
                    <div className="flex items-center w-[60vw]">
                        <div className="w-[60%]">
                            <NoticeBar content={songdata?.name} color='alert' className="!bg-transparent !border-transparent !text-[white] !px-0" icon={<Icon icon="game-icons:love-song" color="white" />} />
                        </div>
                        <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" color="white" />
                    </div>
                </div>
                <div className="w-[10vw]">
                    <div className="flex items-center flex-wrap justify-center mb-[4vw]">
                        <Icon icon="mdi:like" color="white" className="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs" />
                        <span className="text-[#eaeaea] text-[3vw]">{dataTruncation(comment?.likedCount)}</span>
                    </div>
                    <div className="flex items-center flex-wrap justify-center mb-[4vw]">
                        <Icon icon="heroicons-outline:chat" color="white" className="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs" />
                        <span className="text-[#eaeaea] text-[3vw]">{dataTruncation(comment?.commentCount)}</span>
                    </div>
                    <div className="flex items-center flex-wrap justify-center mb-[4vw]">
                        <Icon icon="uil:share" color="white" className="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs" />
                        <span className="text-[#eaeaea] text-[3vw]">{dataTruncation(comment?.shareCount)}</span>
                    </div>
                    <div className="flex items-center flex-wrap justify-center mb-[4vw]">
                        <Icon icon="fluent:collections-20-regular" color="white" className="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs" />
                        <span className="text-[#eaeaea] text-[3vw]">收藏</span>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <img src="my-project\src\static\fang.png" alt="" className="w-[10vw] h-[10vw] rounded-[50%]" />
                        <img src={songdata?.cover} alt="" className="w-[7vw] h-[7vw] rounded-[50%] absolute rotateAnimation" />
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>)
}
export default MvPlay
