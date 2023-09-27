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
export const Musiccalendar = (startTime, endTime) => http.get('/calendar', {
  params: {
    startTime,
    endTime,
  },
});
//搜索排行榜
export async function fetchToplistDetail() {
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(res.data.list.map(({ id }) => http.get('/playlist/detail', { params: { id } })));
  return playlist.map((item) => item.data.playlist);
}
//搜索框内容
export const SearchBox = (params) => http.get(`cloudsearch?keywords=${params}`)
//mv
export const MvList = (area) => http.get('/top/mv', { params: { limit: 50, area } })
//视频
