import React from 'react';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { fetchUserAccount, fetchUserDetail, fetchUserPlaylist } from "../../service/index"
import { NavLink } from 'react-router-dom';
export default function PersonalCenter() {
  let [userData, setuserData] = useState([])
  let [song, setsonglist] = useState([])
  let [create, setcreate] = useState([])
  useEffect(() => {
    fetchUserAccount().then((res) => {
      return res.data.profile.userId
    })
    .then((userId) => fetchUserDetail(userId).then((res) => {
      setuserData(res.data)
      return userId
    }))
    .then((userId) => fetchUserPlaylist(userId).then((res) => {
      setsonglist(res.data.playlist.filter((item) => item.subscribed))//收藏歌单
      setcreate(res.data.playlist.filter((item) => !item.subscribed))//创建歌单
    }))
    .catch((err) => {
      console.log(err)
    })
  }, [])
  const year = (userData) => {
    const createTime = userData
    const timestamp = Date.now() - createTime;
    const years = Math.floor(timestamp / (1000 * 60 * 60 * 24 * 365));
    return years;
  };
  // 计算播放量
  const dataTruncation = (playVolume) => {
    if (playVolume > 100000000) {
      return `${Math.floor(playVolume / 100000000)}亿`;
    }
    if (playVolume > 100000) {
      return `${Math.floor(playVolume / 10000)}万`;
    }
    return playVolume?.toString();
  }
  return (<div className="mb-[10vw]">
    {/* 头部背景 */}
    <div className="w-[100%] h-[74vw] relative">
      <div className="w-[100%] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]">
        <NavLink to={-1}>
          <Icon icon="teenyicons:left-outline" color="white" />
        </NavLink>
        <Icon icon="simple-line-icons:options-vertical" width="15" color='white' />
      </div>
      <img src={userData?.profile?.avatarUrl} alt="" className="w-[100%] h-[100%]" />
    </div>
    {/* 个人信息 */}
    <div className="bg-[#151515] px-[4vw] pb-[10vw]">
      <div className="from-[hsl(0,1%,17%)] to-[#161616] bg-gradient-to-b mt-[-4vw] rounded-[15px] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw]">
        <img src={userData?.profile?.avatarUrl} alt="" className="w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]" />
        <p className="text-[#DADADA] text-[5vw] font-[800]">{userData?.profile?.nickname}</p>
        <div className="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
          <span className="px-[2vw]"><span>{userData?.profile?.follows}&nbsp;</span>关注</span>
          <span className="px-[2vw]"><span>{userData?.profile?.followeds}&nbsp;</span>粉丝</span>
          <span className="px-[2vw]">Lv.<span>{userData?.level}</span></span>
        </div>
        <div className="h-[11vw] flex items-center justify-center">
          <span className="bg-[#282828] border-[#282828] text-[#EEE] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[2vw] border-[1px] rounded-[8px] ml-[1.5vw]">IP:</span>
          <span className="bg-[#282828] border-[#282828] text-[#EEE] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[2vw] border-[1px] rounded-[8px] ml-[1.5vw]">
            {userData?.profile?.gender === 0 ? "女" : "男"}&nbsp;00后&nbsp;摩羯座
          </span>
          <span className="bg-[#282828] border-[#282828] text-[#EEE] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[2vw] border-[1px] rounded-[8px] ml-[1.5vw]">
            村龄{year(userData?.profile?.createTime)}年
          </span>
        </div>
        <div className="flex items-center justify-center">
          <NavLink to={"./Edit"}>
            <span className='border-[#383838] text-[#EEEEEE] px-[3vw] py-[1vw]  text-[2.9vw] font-[800] flex items-center justify-center border-[1px] rounded-[200px] ml-[1.5vw]'>编辑资料</span>
          </NavLink>
          <span className='border-[#383838] text-[#EEEEEE] w-[7.7vw] h-[7.7vw] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] rounded-[200px] ml-[1.5vw]'>
            <Icon icon="oi:caret-bottom" color="white" />
          </span>
        </div>
      </div>
      {/* 导航 */}
      <div>
        <div className="flex justify-evenly h-[15vw] items-center font-semibold relative w-[80vw] mx-auto">
          <p className="text-[#f1f1f1] text-[3.3vw]">主页</p>
          <p className="text-[#f1f1f1] text-[3.3vw]">动态</p>
          <p className="text-[#f1f1f1] text-[3.3vw]">播客</p>
          <p className="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"></p>
        </div>
      </div>
      {/* 音乐品味 */}
      <div className="bg-[#2C2C2C] w-[92vw] h-[43vw] rounded-[15px] mb-[3.7vw]">
        <p className="text-[#EAEAEA] leading-[12vw] text-[4vw] pl-[4vw]">音乐品味</p>
        <div className="flex justify-evenly">
          <div className="from-[#424242] to-[#303030] border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b relative">
            <p className="text-[#AFAFAF] text-[2.6vw] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">我的喜欢
            </p>
            <p className="text-[#DFDFDF] text-[3.5vw] pl-[1.7vw]"> {song[0]?.trackCount}首</p>
            <div className="text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[2.4vw] flex items-center">
              <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" color="white" />
              <span className="ml-1">喜欢的音乐</span>
            </div>
          </div>
          <div className="from-[#424242] to-[#303030] border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b relative">
            <p className="text-[#AFAFAF] text-[2.6vw] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">累计听歌</p>
            <p className="text-[#DFDFDF] text-[3.5vw] pl-[1.7vw]">{userData?.listenSongs}首</p>
            <div className="text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[2.4vw] flex items-center">
              <Icon icon="ep:histogram" color="white" />
              <span className="ml-1">喜欢的音乐</span>
            </div>
          </div>
          <div className="from-[#424242] to-[#303030] border-[#303030] w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b relative">
            <p className="text-[#AFAFAF] text-[2.6vw] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">本周关键字</p>
            <p className="text-[#DFDFDF] text-[3.5vw] pl-[1.7vw]">属于你的音乐档案</p>
            <div className="text-[#7D7D7D] absolute bottom-[2.5vw] left-[1.7vw] text-[2.4vw] flex items-center">
              <Icon icon="ph:funnel-fill" color="white" />
              <span className="ml-1">黑胶时光机</span>
            </div>
          </div>
        </div>
      </div>
      {/* 创建歌单 */}
      <div className="bg-[#2C2C2C] w-[100%] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
        <p className="text-[#ECECEC] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
          创建的歌单
          <span className="text-[#A1A1A1] text-[2.7vw] ml-[1.6vw] font-[200]">({create.length})个</span>
        </p>
        <ul className="px-[4vw] pb-[4vw]">
          {create?.map((item) => (
            <li className="flex mb-[1.5vw]" key={item.id}>
              <div className="pt-[0.6vw] mr-[2.6vw] ">
                <img src={item.coverImgUrl} alt="" className="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2]" />
              </div>
              <div className="flex flex-wrap items-center flex-1 py-[1vw]">
                <p className="text-[#E6E6E6] w-[100%] text-[3.8vw] line-clamp-1">{item.name}</p>
                <p className="text-[#B7B7B7] w-[100%] text-[2.8vw] line-clamp-1"> {item.trackCount}首，{item?.creator?.nickname}，播放{dataTruncation(item.playCount)}次</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* 收藏歌单 */}
      <div className="bg-[#2C2C2C] w-[100%] rounded-[15px]  pt-[5vw] mb-[3.7vw]">
        <p className="text-[#ECECEC] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
          收藏的歌单
          <span className="text-[#A1A1A1] text-[2.7vw] ml-[1.6vw] font-[200]">({song?.length})个</span>
        </p>
        <ul className="px-[4vw] pb-[4vw]">
          {song?.map((item) => (
            <li className="flex mb-[1.5vw]" key={item.id}>
              <div className="pt-[0.6vw] mr-[2.6vw] ">
                <img src={item?.coverImgUrl} alt="" className="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2]" />
              </div>
              <div className="flex flex-wrap items-center flex-1 py-[1vw]">
                <p className="text-[#E6E6E6] w-[100%] text-[3.8vw] line-clamp-1">{item?.name}</p>
                <p className="text-[#B7B7B7] w-[100%] text-[2.8vw] line-clamp-1">{item?.trackCount}首,By&nbsp;{item?.creator?.nickname}
                  ,播放{dataTruncation(item?.playCount)}次</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* 我的评论 */}
      <div className="bg-[#2C2C2C] mt-[4vw] w-[92vw] rounded-[15px] pt-[5vw] mb-[3.7vw]">
        <div className="flex justify-between px-[4vw]">
          <p className="text-[#ECECEC] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]">
            我的评论
            <span className="text-[#A1A1A1] text-[2.7vw] ml-[1.6vw] font-[200]">()个</span>
          </p>
          <Icon icon="material-symbols:lock-sharp" color="white" />
        </div>
        <div className="flex justify-between px-[4vw]">
          <div className="flex items-center">
            <img src="" alt="" className="w-[8vw] h-[8vw] rounded-[5px] mr-[1.5vw]" />
            <p className="text-[#99999A] text-[2.8vw]"></p>
          </div>
          <Icon icon="uiw:like-o" color="white" />
        </div>
        <p className="text-[#EDEDED] mt-[3.6vw] px-[4vw] text-[3.6vw] pb-[1vw]"></p>
        <p className="text-[#A5A5A5] mt-[1vw] text-[2vw] px-[4vw] pb-[4vw]"></p>
        <div className="border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]">
          查看全部
          <Icon icon="mingcute:right-line" color="white" />
        </div>
      </div>
      {/* 基本信息 */}
      <div className="bg-[#2C2C2C] w-[92vw] h-[50vw] rounded-[15px]">
        <div className="h-[15vw] flex items-center justify-between mx-[3.8vw]">
          <p className="text-[#ECECEC] text-[4vw]">基本信息</p>
          <p className="text-[#ECECEC] border-[#474747] text-[2.6vw] border-[1px] rounded-[200px] px-[2.7vw] py-[1.5vw]">领取村民证</p>
        </div>
        <div className="text-[#ADADAD] h-[25vw] text-[3vw] flex flex-wrap mx-[3.8vw]">
          <p className='w-[100%]'>
            村龄：{year(userData?.profile?.createTime)}年
            <span></span>
          </p>
          <p className='w-[100%]'>
            性别:&nbsp;{userData?.profile?.gender === 0 ? "女" : "男"}
            <span></span>
          </p>
          <p className='w-[100%]'>
            年龄:
            <span></span>
          </p>
        </div>
        <div className="border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]">
          查看全部
          <Icon icon="mingcute:right-line" color="white" />
        </div>
      </div>
    </div>
  </div>)
}
