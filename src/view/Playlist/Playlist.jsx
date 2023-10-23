/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { fetchSongList, collection } from "../../service/index";
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Icon } from "@iconify/react";
import Heaed from "./component/Head";
import HeadCarousel from "./component/HeadCarousel";
import { Popup, Toast } from 'antd-mobile'
import _ from 'lodash';
import cloneDeep from 'lodash/cloneDeep';
import pinyin from "pinyin"
import { useRequest } from "ahooks";
import Comment from "./component/Comment";
export default function Playlist() {
  const [show, setshow] = useState(true)
  const [song, setsong] = useState([])
  const [coment, setcoment] = useState(false)
  const [visible, setVisible] = useState(false)
  const [Popupstort, setPopupstort] = useState(false)
  const [Popupreport, setPopupreport] = useState(false)
  const [songlist, setsonglist] = useState([])
  //获取子传父数据
  const handleSongData = (songData) => {
    setsong(songData)
  };
  const { id } = useParams();
  const { data } = useRequest(() => fetchSongList(id))//歌曲列表
  const { run } = useRequest(() => collection({ t: Number(!song?.subscribed), id: id }), {
    manual: true
  });
  useEffect(() => {
    collection()
    setsonglist(data?.data?.songs)
  }, [data])
  //歌曲排序
  const Songlistdata = data?.data?.songs //保存原始数据
  const clonedObject = cloneDeep(Songlistdata);//深拷贝数据，防止排序影响原始数据
  const songsort = (songtitle) => {
    clonedObject.sort((a, b) => {
      const firstLetterA = _.get(a, songtitle, '');
      const firstLetterB = _.get(b, songtitle, '');
      const pinyinA = pinyin(firstLetterA, { style: 'normal' }).flat().join('');
      const pinyinB = pinyin(firstLetterB, { style: 'normal' }).flat().join('');
      return pinyinA.localeCompare(pinyinB);
    });
    return clonedObject;
  };
  const navigate = useNavigate()
  const plsylist = (id) => {
    navigate(`/PlayPage/${id}`)
  }
  // 举报数据
  const report = ["政治反动", "淫秽色情", "违法信息", "恶意攻击谩骂", "营销攻击", "虚假信息", "低俗", "其他"]
  return (<div className="relative overflow-hidden">
    <div className="bg-[#486d8d] p-[3vw] pb-[1.875rem] overflow-hidden">
      {/* 头部导航*/}
      <div className="pl-[3.9vw] pr-[3.4vw] h-[13.5vw] flex items-center justify-between fixed top-0 left-0 z-[99] right-0 bg-[#486D8D]">
        <div className="flex items-center">
          <NavLink to={-1}>
            <Icon className="text-[white]" icon="mingcute:left-line" width="30" height="30" color="white" />
          </NavLink>
          <span className="ml-2 text-[white] text-[1rem]">歌单</span>
        </div>
        <div className="flex items-center">
          <Icon className="text-[white]" icon="circum:search" width="30" height="30" color="white" />
          <Icon className="text-[white]" icon="simple-line-icons:options-vertical" width="20" color="white" onClick={() => { setVisible(true) }} />
        </div>
      </div>
      {/* 头部数据 */}
      <div className={`transition ${show ? "opacity-1 block animate-fadeIn" : "opacity-0 hidden animate-fadeOut"}`}>
        <Heaed Id={id} onSongData={handleSongData} />
      </div>
      <div className={`transition ${show ? "opacity-0 hidden animate-fadeOut" : "opacity-1 block animate-fadeIn"}`}>
        <HeadCarousel Id={id} />
      </div>
      <div className="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center"
        onClick={() => setshow(!show)} >
        {show ? (
          <Icon
            icon='bxs:up-arrow'
            color='white'
            rotate={2}
            className='text-[3vw]'
          />
        ) : (
          <Icon icon='bxs:up-arrow' color='white' className='text-[3vw]' />
        )}
      </div>
      <div className="flex items-center mt-[3.5vw] justify-between">
        <div className="flex items-center justify-center h-[9.9vw] rounded-[12.5rem] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
          <Icon icon="majesticons:share" color="white" className="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
          {song?.shareCount}
        </div>
        <div className="flex items-center justify-center h-[9.9vw] rounded-[12.5rem] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw] ml-2"
          onClick={() => setcoment(true)}
        >
          <Icon icon="fluent:chat-20-filled" color="white" className="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
          {song?.commentCount}
        </div>
        <div className={`ml-2 flex items-center justify-center h-[9.9vw] rounded-[12.5rem] ${song?.subscribed ? "bg-opacity-20 bg-[#fff] " : "bg-[#ff2658]"}  font-[800] flex-1 text-[#f8fefe] text-[3vw]`}
          onClick={() => run()}
        >
          <Icon icon="ph:pentagram-fill" color="white" className="text-[5vw] mr-[1.8vw] iconify iconify--majesticons" />
          {song?.subscribedCount}
        </div>
      </div>
    </div>
    {/* 歌曲列表 */}
    <div className="bg-[#fff] w-[100vw] rounded-[.9375rem] relative z-[1] mt-[-2.5vw] px-[3.8vw]">
      <div className="post h-[13vw] flex items-center justify-between z-10">
        <div className="flex items-center">
          <Icon icon="zondicons:play-outline" color="red" width={30} />
          <span className="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
          <span className="text-[#8C9094] text-[2.7vw]">({songlist?.length})</span>
        </div>
        <div className="flex items-center">
          <Icon icon="clarity:download-line" color="#ccc" width={20} />
          <Icon icon="material-symbols:list" color="#ccc" width={20} />
        </div>
      </div>
      {songlist?.map((item, index) => (
        <div className="flex items-center justify-between h-[14vw]" key={item.id}>
          <div className="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">{index + 1}</div>
          <div className="font-medium text-[3.6vw] w-[64vw]" onClick={() => plsylist(item.id)}>
            <p className="text-[3.6vw] text-ellipsis overflow-hidden over w-[50vw] text-[#949797]">
              <span className="text-ellipsis text-[#000]">{item.name}</span>
            </p>
            <p className="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
              <span>{item.ar[0].name}</span>
            </p>
          </div>
          <Icon icon="arcticons:fpt-play" color="black" />
          <Icon icon="simple-line-icons:options-vertical" width="15" color="#b3b3b3" />
        </div>
      ))}
    </div>
    {/* 歌单封面 */}
    {/*默认弹出层 */}
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false)
      }}
      bodyStyle={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        minHeight: '30vh',
        backgroundColor: "#272727"
      }}
    >
      <div className="pb-[20px] rounded-tl-[8px] rounded-tr-[8px]">
        <div className="p-[4vw] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#3C3C3C] px-[5vw]">
          <span className="text-[3vw] text-[#939BA1] font-[800]">
            {song?.name}
          </span>
        </div>
        <div className="mt-3">
          <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center" onClick={() => {
            setVisible(false)
            setPopupstort(true)
          }}>
            <Icon icon="icon-park-outline:sort-one" color="white" className="w-[6vw] h-[6vw] mr-[2vw]" />
            <p className="ml-3">选择歌曲排序</p>
          </p>
          <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center" onClick={() => {
            Toast.show({
              content: '清空成功',
              position: 'top',
            })
            setVisible(false)
          }}>
            <Icon icon="material-symbols:delete-outline" color="white" className="w-[6vw] h-[6vw] mr-[2vw]" />
            <p className="ml-3">清空下载文件</p>
          </p>
          <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center" onClick={() => {
            setVisible(false)
            setPopupreport(true)
          }}>
            <Icon icon="ep:warn-triangle-filled" color="white" className="w-[6vw] h-[6vw] mr-[2vw]" />
            <p className="ml-3">举报</p>
          </p>
        </div>
      </div>
    </Popup>
    {/* 评论 */}
    <Popup
      visible={coment}
      onMaskClick={() => {
        setcoment(false)
      }}
      bodyStyle={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        maxHeight: '80vh',
        backgroundColor: "#272727"
      }}
    >
      <Comment Id={id} />
    </Popup>
    {/*歌曲排序弹出层 */}
    <Popup
      visible={Popupstort}
      onMaskClick={() => {
        setPopupstort(false)
      }}
      bodyStyle={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        minHeight: '30vh',
        backgroundColor: "#272727"
      }}
    >
      <div className="pb-[20px] rounded-tl-[8px] rounded-tr-[8px]">
        <div className="p-[4vw] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#3C3C3C] px-[5vw]">
          <span className="text-[3vw] text-[#939BA1] font-[800]">
            选择歌曲排序
          </span>
        </div>
        <div className="mt-3">
          <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center"
            onClick={() => { setsonglist(Songlistdata); setPopupstort(false) }}>
            <Icon icon="bx:file" color="white" className="w-[6vw] h-[6vw] mr-[2vw]" />
            <p className="ml-3">默认排序</p>
          </p>
          <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center"
            onClick={() => { setsonglist(songsort("name")); setPopupstort(false) }}
          >
            <Icon icon="tabler:wash-dry-a" color="white" className="w-[6vw] h-[6vw] mr-[2vw]" />
            <p className="ml-3">按歌曲名排序</p>
          </p>
          <p className="text-[white] dark:text-[#382020] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center"
            onClick={() => { setsonglist(songsort("ar[0].name")); setPopupstort(false) }}>
            <Icon icon="majesticons:user-line" color="white" className="w-[6vw] h-[6vw] mr-[2vw]" />
            <p className="ml-3">按歌手名排序</p>
          </p>
          <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center"
            onClick={() => { setsonglist(songsort("al.name")); setPopupstort(false) }}>
            <Icon icon="bx:album" color="white" className="w-[6vw] h-[6vw] mr-[2vw]" />
            <p className="ml-3">按专辑名称排序</p>
          </p>
        </div>
      </div>
    </Popup>
    {/*举报弹出层 */}
    <Popup
      visible={Popupreport}
      onMaskClick={() => {
        setPopupreport(false)
      }}
      bodyStyle={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        minHeight: '30vh',
        backgroundColor: "#272727"
      }}
    >
      <div className="pb-[20px] rounded-tl-[8px] rounded-tr-[8px]">
        <div className="p-[4vw] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#3C3C3C] px-[5vw]">
          <span className="text-[3vw] text-[#939BA1] font-[800]">
            选择举报类型
          </span>
        </div>
        <div className="mt-3">
          {report.map((index) => (
            <div className="border-b-[#3C3C3C] text-[white] p-[4vw] border-b-[0.35vw]" key={index.id} onClick={() => {
              Toast.show({
                content: '举报成功',
                position: 'top',
              })
              setPopupreport(false)
            }}>{index}</div>
          ))}
        </div>
      </div>
    </Popup>
  </div>)
}
