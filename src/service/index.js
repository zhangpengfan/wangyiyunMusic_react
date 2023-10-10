import axios from "axios";
import store from "storejs"
const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app"
});
//拦截登录数据
http.interceptors.request.use((config) => {
  const cookie = store.get('__m__cookie') ?? '';
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config;
});
//轮播图
export const CarouselMap = () => http.get("/homepage/block/page");
//菜单
export const menu = () => http.get("/homepage/dragon/ball")
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
//mv列表
export const MvList = (area) => http.get('/top/mv', { params: { limit: 50, area } })//mv列表
export const featMvUrl = (id) => http.get('/mv/url', { params: { id } });//mv视频链接
export const featMvDetail = (mvid) => http.get('/mv/detail', { params: { mvid } });
export const featMvDetailInfo = (mvid) => http.get('/mv/detail/info', { params: { mvid } })

// 歌曲列表数据
export const songDetails = (params) => http.get(`/playlist/detail?id=${params}`)//头部数据
export const fetchSongList = (params) => http.get(`/playlist/track/all?id=${params}`)//歌曲数据
export const musicSlider = (params) => http.get(`related/playlist?id=${params}`)//头部轮播数据

//登录扫码获取个人数据
export const getQrKey = () => http.get('/login/qr/key')//获取生成二维码的key
export const getQrInfo = (params) => http.get('/login/qr/create', { params });//生成二维码
export const checkQrStatus = (params) => http.get('/login/qr/check', { params })//二维码扫码状态

//用户数据
export const fetchUserAccount = () => http.get('/user/account', { params: { id: 123 } });//个人信息
export const fetchUserDetail = (uid) => http.get('/user/detail', { params: { uid } });//用户详情
export const fetchUserPlaylist = (uid) => http.get('/user/playlist', { params: { uid } });//用户歌单

//更新数据
export const getUpdate = (gender, birthday, nickname, province, city, signature) =>
  http.get('/user/update', { params: { gender, birthday, nickname, province, city, signature } });
