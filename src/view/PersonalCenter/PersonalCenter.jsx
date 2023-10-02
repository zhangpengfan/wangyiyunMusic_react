import React from "react";
// import { Icon } from "@iconify/react";
export default function PersonalCenter() {
  return (
    <div>111</div>
    // <div className="bg-[#1a1c23] h-[100%]">
    //   {/* 头部 */}
    //   <div className="w-screen relative">
    //     <img
    //       className="h-[83vw] w-[100%]"
    //       src={this.user.profile.avatarUrl}
    //       alt=""
    //     />
    //     <div className="pl-[4.5vw] pr-[7.28vw] flex absolute top-[6.13vw] w-[100%] justify-between items-center">
    //       <div>
    //         <Icon
    //           nativeOnClick={() => this.$router.push("/wangyiyu")}
    //           className="text-[white] dark:text-[black]"
    //           icon="mingcute:left-line"
    //           width="30"
    //           height="30"
    //         />
    //       </div>
    //       <div className="flex items-center">
    //         <p className="w-[12.12vw] h-[4vw] bg-[white] text-[2.13vw] text-[black] rounded-xl text-center">
    //           照片墙
    //         </p>
    //         <p className="w-[3vw] h-[2.6vw] bg-[#97d1e7] rounded-[50%] ml-[1.3vw]"></p>
    //         <p className="w-[3vw] h-[2.6vw] bg-[#97d1e7] rounded-[50%] ml-[1.3vw]"></p>
    //       </div>
    //       <div
    //         onClick={() => {
    //           this.show = true;
    //         }}
    //       >
    //         {" "}
    //         <Icon
    //           className="text-[white]"
    //           icon="simple-line-icons:options-vertical"
    //           width="20"
    //         />
    //       </div>
    //     </div>
    //     <p
    //       className="w-[20vw] h-[6.6vw] rounded-xl text-[#eefeff] text-[2.22vw] text-center bg-[#66a1bc] absolute right-[4.26vw] bottom-[8vw]"
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       TA的照片
    //     </p>
    //   </div>

    //   {/* 个人资料 */}
    //   <div className="w-[100%] bg-[#1a1c23]">
    //     <div className="pl-[4.5vw] pr-[7.28vw] relative top-[-4vw]">
    //       <div className="w-[91.83vw] bg-[#353842] rounded-lg">
    //         <div className="w-[100%] pb-[4vw]">
    //           <div className="flex justify-around">
    //             <p className="w-[18.21vw] h-[18.21vw] absolute top-[-8vw] border border-[white] rounded-[50%]">
    //               <img
    //                 className="rounded-[50%]"
    //                 src={this.user.profile.avatarUrl}
    //                 alt=""
    //               />
    //             </p>
    //           </div>
    //           <div className="flex justify-around mt-[12vw]">
    //             <p className="text-[white] text-[4.7vw]">
    //               {this.user.profile.nickname}
    //             </p>
    //           </div>
    //           <div className="flex justify-around mt-[3.11vw]">
    //             <p className="text-[3vw] text-[#9b9da4] flex w-[33vw]">
    //               <span>{this.userData.profile.follows}关注</span>
    //               <span className="ml-[4.5vw]">
    //                 {this.userData.profile.followeds}粉丝
    //               </span>
    //               <span className="ml-[4.3vw]">Lv.{this.userData.level}</span>
    //             </p>
    //           </div>
    //           <div className="mt-[3vw] flex justify-around">
    //             <div className="flex">
    //               <p className="w-[19vw] border border-[#5d5f66] text-center text-[white] text-[2.31vw] h-[5.77vw]">
    //                 IP:{this.country}
    //                 {this.city}
    //               </p>
    //               <p className="w-[25vw] border border-[#5d5f66] text-center text-[white] text-[2.31vw] h-[5.77vw] ml-[1.6vw]">
    //                 00后&nbsp;摩羯座
    //               </p>
    //               <p className="border border-[#5d5f66] text-center text-[white] text-[2.31vw] h-[5.77vw] ml-[1.6vw]">
    //                 {areaList.province_list[this.arr[3]]}&nbsp;
    //                 {areaList.city_list[this.arr[4]]}
    //               </p>
    //               <p className="w-[6vw] border border-[#5d5f66] text-center text-[white] text-[2.31vw] h-[5.77vw] items-center flex ml-[1.6vw]">
    //                 <Icon
    //                   nativeOnClick={() => this.$router.push("/information")}
    //                   icon="mingcute:right-line"
    //                   width="15"
    //                 />
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex justify-around mt-[3.73vw]">
    //             <div className="flex">
    //               <p
    //                 className="w-[20.69vw] h-[7.64vw] rounded-lg border border-[#73757c] text-[white] text-[3.2vw] flex items-center justify-around"
    //                 onClick={() => this.$router.push("/information")}
    //               >
    //                 编辑资料
    //               </p>
    //               <p
    //                 className="w-[7.55vw] h-[7.55vw] rounded-[50%] border border-[#73757c] text-[white] flex items-center justify-around text-center ml-[1.6vw]"
    //                 onClick={() => {
    //                   this.tpt = !this.tpt;
    //                 }}
    //               >
    //                 <Icon icon="carbon:up-to-top" width="20" />
    //               </p>
    //             </div>
    //           </div>

    //           {this.tpt === true ? (
    //             <div className=" overflow-auto mt-[4vw]">
    //               <ul className="flex justify-between items-center w-[192.28vw]">
    //                 {sun.map((index) => (
    //                   <li
    //                     className="w-[24.16vw] h-[35.61vw] bg-[#201f25] rounded-lg ml-[3.29vw] pb-[2.75vw]"
    //                     key={index}
    //                   >
    //                     <div className="pt-[2.2vw] flex items-center justify-around">
    //                       <img
    //                         className="w-[11.63vw] h-[11.63vw] rounded-[50%]"
    //                         src="static/44.png"
    //                         alt=""
    //                       />
    //                     </div>
    //                     <p className="text-[2.93vw] text-[white] mt-[2vw] flex items-center justify-around">
    //                       哆啦A梦
    //                     </p>
    //                     <p className="text-[2.75vw] text-[#68676d] mt-[1.42vw] flex items-center justify-around">
    //                       你可能喜欢
    //                     </p>
    //                     <div className="flex items-center justify-around mt-[2.22vw]">
    //                       <p className="h-[6.57vw] leading-[6.57vw] w-[15.36vw] border border-[#712b40] rounded-lg text-[#712b40] text-[2.03vw] text-center">
    //                         关注
    //                       </p>
    //                     </div>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           ) : (
    //             ""
    //           )}
    //           <div className="flex justify-around border-t mt-[4vw]">
    //             <p className="text-[3.64vw] text-[white] mt-[4vw]">
    //               完善主页,发现更多音乐好品味
    //             </p>
    //             <p className="text-[3vw] rounded-lg mt-[4vw] text-[#d35146] w-[15.19vw] h-[6.66vw] flex items-center justify-around border border-[#54565d]">
    //               去填写
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mt-[4.57vw]">
    //         {/* 导航 */}
    //         <div className="w-[100%] flex justify-around mt-[5vw]">
    //           <span className="text-[#8c8e95] text-[3.55vw]">主页</span>
    //           <span className="text-[#8c8e95] text-[3.55vw]">动态</span>
    //           <span className="text-[#8c8e95] text-[3.55vw]">播客</span>
    //         </div>
    //         {/* 音乐品味 */}
    //         <div className="mt-[4.17vw] bg-[#2f3138] rounded-lg pl-[6.82vw] pr-[4vw] pb-[3.73vw]">
    //           <p className="pt-[5.33vw] text-[4.62vw] text-[white]">音乐品味</p>
    //           <div className="mt-[4.52vw] flex w-[100%]">
    //             <div className="bg-[#3f4148] w-[26.55vw] h-[31.17vw] rounded-lg border border-[#53555c] pt-[2vw] pl-[1.95vw] pr-[1vw]">
    //               <p className="text-[3vw] text-[#bec0c7]">我的喜欢</p>
    //               <p className="text-[3vw] text-[#d7dadc] mt-[2.84vw]">
    //                 {this?.creatList[0]?.trackCount}首
    //               </p>
    //               <div className="flex justify-around items-center mt-[10vw]">
    //                 <Icon
    //                   className="text-[white]"
    //                   icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
    //                   width="15"
    //                 />
    //                 <p className="text-[3vw] text-[#bec0c7]">喜欢的音乐</p>
    //               </div>
    //             </div>
    //             <div className="bg-[#3f4148] w-[26.55vw] h-[31.17vw] rounded-lg border border-[#53555c] ml-[1.5vw] pt-[2vw] pl-[1.95vw] pr-[1vw]">
    //               <p className="text-[3vw] text-[#bec0c7]">累计听歌</p>
    //               <p className="text-[3vw] text-[#d7dadc] mt-[2.84vw]">
    //                 {this.userData.listenSongs}首
    //               </p>
    //               <div className="flex justify-around items-center mt-[10vw]">
    //                 <Icon icon="ep:histogram" color="white" width="15" />
    //                 <p className="text-[3vw] text-[#bec0c7]">喜欢的音乐</p>
    //               </div>
    //             </div>
    //             <div className="bg-[#3f4148] w-[26.55vw] h-[31.17vw] rounded-lg border border-[#53555c] ml-[1.5vw] pt-[2vw] pl-[1.95vw] pr-[1vw]">
    //               <p className="text-[3vw] text-[#bec0c7]">本周关键词</p>
    //               <p className="text-[3vw] text-[#d7dadc] mt-[2.84vw]">
    //                 每一首歌都心动
    //               </p>
    //               <div className="flex justify-around items-center mt-[5.5vw]">
    //                 <Icon icon="ooui:funnel-ltr" color="white" width="15" />
    //                 <p className="text-[3vw] text-[#bec0c7]">黑胶时光机</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         {/* 创建歌单 */}
    //         <div className="w-[100%] mt-[4.4vw] rounded-lg pt-[4.97vw] pl-[3.91vw] bg-[#2f3138] pb-[3.73vw]">
    //           <p className="text-[4.71vw] text-[white]">
    //             创建的歌单
    //             <span className="text-[3vw] text-[#9fa1a8] ml-[1vw]">
    //               (1个,被收藏1次)
    //             </span>
    //           </p>
    //           <ul className="mt-[3.64vw]">
    //             <li className="flex items-center">
    //               <div>
    //                 <img
    //                   className="w-[12.97vw] h-[12.87vw] rounded-lg"
    //                   src={this.creatList[1]?.coverImgUrl}
    //                   alt=""
    //                 />
    //               </div>

    //               <div className="ml-[2.4vw]">
    //                 <p className="text-[white] text-[4.17vw]">
    //                   {this.creatList[1]?.name}
    //                 </p>
    //                 <p className="text-[#828189] text-[3.29vw] mt-[1.8vw]">
    //                   {this.creatList[1]?.trackCount}首,播放
    //                   {this.creatList[1]?.playCount}次
    //                 </p>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //         {/* 收藏歌单 */}
    //         <div className="w-[100%] mt-[4.4vw] rounded-lg pt-[4.97vw] pl-[3.91vw] bg-[#2f3138] pb-[3.73vw]">
    //           <p className="text-[4.71vw] text-[white]">
    //             收藏的歌单
    //             <span className="text-[3vw] text-[#9fa1a8] ml-[1vw]">
    //               ({this.collectList.length})
    //             </span>
    //           </p>
    //           <ul className="mt-[3.64vw]">
    //             {this.collectList.map((item) => (
    //               <li className="flex items-center mt-[1.8vw]" key={item.id}>
    //                 <div>
    //                   <img
    //                     className="w-[12.97vw] h-[12.87vw] rounded-lg"
    //                     src={item.coverImgUrl}
    //                     alt=""
    //                   />
    //                 </div>
    //                 <div className="ml-[2.4vw]">
    //                   <p className="text-[white] text-[4.17vw] w-[66vw] overflow-hidden h-[5vw]">
    //                     {item.name}
    //                   </p>
    //                   <p className="text-[#828189] text-[3.29vw] mt-[1.8vw]">
    //                     {item.trackCount}首 By{item.creator.nickname} 播放了
    //                     {Math.floor(item.playCount / 10000)}万次
    //                   </p>
    //                 </div>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         {/* 我的评论 */}
    //         <div className="w-[100%] mt-[4.4vw] rounded-lg pt-[4.97vw] pl-[3.91vw] bg-[#2f3138] pr-[3.91vw] pb-[3vw]">
    //           <div className="flex justify-between items-center">
    //             <p className="text-[4.71vw] text-[white]">我的评论</p>
    //             <p className=" flex justify-around items-center">
    //               <Icon icon="mingcute:lock-fill" color="white" width="15" />
    //             </p>
    //           </div>
    //           <div className="border-t border-[#404249] w-[100%] flex justify-around items-center text-[#404249] text-[3vw] mt-[4.35vw]">
    //             <p className="flex justify-around items-center mt-[2.75vw]">
    //               查看全部
    //               <Icon icon="mingcute:right-line" color="#404249" width="15" />
    //             </p>
    //           </div>
    //         </div>
    //         {/* 基本信息 */}
    //         <div className="w-[100%] mt-[4.4vw] rounded-lg pt-[4.97vw] pl-[3.91vw] bg-[#2f3138] pr-[3.91vw] pb-[3vw]">
    //           <div className="flex justify-between items-center">
    //             <p className="text-[4.71vw] text-[white]">基本信息</p>
    //             <p className="w-[21.31vw] h-[6.22vw] rounded-lg border border-[#404249] text-[2.84vw] text-[white] flex justify-around items-center">
    //               领取村民证
    //             </p>
    //           </div>
    //           <div className="text-[3.64vw] text-[#abadb4] mt-[3.5vw]">
    //             <p>村龄:</p>
    //             <p className="mt-[2.8vw]">性别</p>
    //             <p className="mt-[2.8vw]">年龄</p>
    //           </div>
    //           <div className="border-t border-[#404249] w-[100%] flex justify-around items-center text-[#404249] text-[3vw] mt-[4.35vw]">
    //             <p className="flex justify-around items-center mt-[2.75vw]">
    //               查看全部
    //               <Icon icon="mingcute:right-line" color="#404249" width="15" />
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
