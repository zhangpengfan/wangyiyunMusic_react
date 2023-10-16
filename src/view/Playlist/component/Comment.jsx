import React from "react";
import { Icon } from "@iconify/react";
import { useRequest } from "ahooks";
import { getCommentPlaylist, songDetails } from "../../../service/index";
const Comment = (props) => {
  const { data } = useRequest(() => getCommentPlaylist(props.Id));
  const comments = data?.data?.comments;
  const { data: plist } = useRequest(() => songDetails(props.Id));
  const plistData = plist?.data;
  console.log(plistData);

  return (
    <div className="pb-[20px] rounded-tl-[8px] rounded-tr-[8px]">
      <div className="bg-[#272727] overflow-y-auto h-[200vh] overflow-x-hidden">
        <div className="flex items-center justify-end px-[3vw] py-[3vw] bg-[#272727]">
          <div className="w-[60%] flex items-center justify-between">
            <span className="text-[4.5vw] text-[white]">
              评论({plistData?.playlist?.commentCount})
            </span>
            <Icon icon="fluent:share-20-regular" width="20" color="white" />
          </div>
        </div>

        <div className="py-[2.667vw] px-[3.822vw] h-[18.933vw] flex items-center bg-[#272727]">
          <div className="flex items-center">
            <div className="h-[18.933vw] w-[18.933vw] rounded-[3vw]">
              <img
                src={plistData?.playlist?.coverImgUrl}
                alt=""
                className="h-[18.933vw] w-[18.933vw] rounded-[3vw]"
              />
            </div>
            <div className="w-[67vw]">
              <div className="flex items-center pl-[2vw]">
                <span className="block p-[1vw] border border-[#C84A3B] text-[#C84A3B] rounded-[2vw]">
                  歌单
                </span>
                <span className="pl-[2vw] text-[white]">{plistData?.playlist?.name}</span>
              </div>
              <p className=" pl-[2vw]">
                <span className="text-[white]">by</span>
                <span className="text-[#81B4DC] pl-[2vw]">
                  {plistData?.playlist?.creator?.nickname}
                </span>
              </p>
            </div>
          </div>
          <Icon icon="uiw:right" width="20" color="white" />
        </div>
        <div className="mt-[3vw] px-[3.822vw] bg-[#272727]">
          <div className="pt-[4.267vw] flex items-center justify-between">
            <div className="text-[4.5vw] text-[white]">评论区</div>
            <div className="text-[white]">
              <span>推荐</span>
              <span className="px-[2.7vw] text-[#ccc]">|</span>
              <span>最热</span>
              <span className="px-[2.7vw] text-[#ccc]">|</span>
              <span>最新</span>
            </div>
          </div>
          {/* 评论 */}
          <div className="mt-[4.178vw]">
            {comments?.map((item, index) => (
              <div>
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-[9.422vw] h-[9.422vw] rounded-[50%] border border-[red]">
                        <img
                          src={item?.user?.avatarUrl}
                          alt=""
                          className="w-[9.422vw] h-[9.422vw] rounded-[50%]"
                        />
                      </div>
                      <div className="pl-[2.4vw] text-[white]">
                        <p>{item?.user?.nickname}</p>
                        <p>{item?.timeStr}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-[white]">
                      <span>{item?.likedCount}</span>
                      <Icon icon="iconamoon:like-light" width="20" color="white" />
                    </div>
                  </div>
                  <p className="w-[100%] pl-[11.5vw] break-words text-[4.5vw] mt-[1.689vw] text-[white]">
                    {item?.content}
                  </p>
                  <div className="w-[100%] ml-[11.5vw] mt-[3vw] flex items-center text-[white]">
                    <span className="text-[#93A8C9]">4条回复</span>
                    <Icon
                      icon="mingcute:right-line"
                      width="20"
                      color="#93A8C9"
                    />
                  </div>
                </div>
                <div className="h-[1px] bg-[#3A3A3A] my-[3.467vw] w-[100%] ml-[11.5vw]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
