import axios from "axios";
const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app"
});
//轮播图
export const CarouselMap = () => http.get("/homepage/block/page");
//菜单
export const menu = () => http.get("/homepage/dragon/ball")
//推荐歌单
export const recommondList = () => http.get('/homepage/block/page')
//新歌排行榜
export const playsong = () => http.get("/homepage/block/page");
//音乐日历
export const Musiccalendar = () => http.get("/calendar?startTime=1606752000000&endTime=1609430399999")
