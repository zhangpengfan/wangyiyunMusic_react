import React from "react";
import { Popup } from "antd-mobile";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Title(props) {
  const [visible, setVisible] = useState(false);
  const navigte = useNavigate()
  return (
    <div className="flex items-center justify-between">
      <span className="text-[4.31vw] text-white dark:text-[black] flex items-center" onClick={() => navigte(props.router)}>
        {props.title}
        <span>
          <Icon icon="mingcute:right-line" width="20" />
        </span>
      </span>
      <span className="text-white" onClick={() => { setVisible(true) }}>
        <Icon icon="simple-line-icons:options-vertical" width="15" />
      </span>
      <Popup visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          minHeight: "30vh",
          backgroundColor: "#272727",
        }}
      >
        <div className="bg-[#272727] pb-[20px]">
          <div className="p-[4vw] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#3C3C3C] px-[5vw]">
            <span className="text-[3vw] text-[#939BA1] font-[800]">
              {props.title}
            </span>
            <span onClick={() => { setVisible(false) }}  >
              <Icon icon="ph:x-duotone" color="white" />
            </span>
          </div>
          <div className="mt-3">
            <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center">
              <Icon icon="iconamoon:like-light" className="w-[6vw] h-[6vw] mr-[2vw]" />
              <p className="ml-3">优先推荐</p>
            </p>
            <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center">
              <Icon icon="basil:heart-off-outline" className="w-[6vw] h-[6vw] mr-[2vw]" />
              <p className="ml-3">减少推荐</p>
            </p>
            <p className="text-[white] dark:text-[black] mt-[4vw] text-[4.5vw] ml-[4.26vw] flex items-center">
              <Icon icon="icon-park-outline:more-two" className="w-[6vw] h-[6vw] mr-[2vw]" />
              <p className="ml-3">更多内容</p>
            </p>
          </div>
        </div>
      </Popup>
    </div>
  );
}
