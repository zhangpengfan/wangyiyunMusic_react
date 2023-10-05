import React, { useEffect, useState, useRef } from "react";
import { getQrKey, getQrInfo, checkQrStatus } from "../../service/index";
import { useNavigate, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import storejs from "storejs";
export default function Login() {
  let [qr, setQr] = useState(""); // 存KEY
  let [tp, settp] = useState("0");
  let unkey = useRef("");
  const navigate = useNavigate();
  let timer = useRef(null);
  const checkstantic = () => {
    timer.current = setInterval(() => {
      const timestamp = Date.now();
      checkQrStatus({ key: unkey.current, timestamp }).then((res) => {
        settp(res.data.code);
        console.log(res.data.code);
        if ([800, 802].includes(res.data.code)) clearInterval(timer.current);
        if (res.data.code === 803) {
          console.log("登录成功")
          navigate("/Home");
          storejs.set("__m__cookie", res.data.cookie);
        }
      });
    }, 3500);
  };
  useEffect(() => {
    getQrKey()
      .then((res) => {
        unkey.current = res.data.data.unikey;
        return getQrInfo({ key: res.data.data.unikey, qrimg: true });
      })
      .then((res) => {
        setQr(res.data.data.qrimg);
      })
      .then(() => checkstantic())
      .catch((err) => {
        console.log(err);
      });
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between px-[5.5vw] text-[4vw] text-[#696969] h-[19vw]">
        <NavLink to={-1}>
          <Icon icon="ant-design:left-outlined" color="#696969" />
        </NavLink>
        <p>游客登录</p>
      </div>
      {/* 标题 */}
      <div className="flex items-center justify-center">
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
          alt=""
          className="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
        />
      </div>
      {/* 二维码 */}
      <div>
        <div className="flex items-center justify-center  relative">
          <img
            src={
              tp === 802
                ? "https://admirable-jalebi-ce44af.netlify.app/static/queding.png"
                : qr
            }
            alt=""
            className="w-[40vw] h-[40vw]"
          />
          {tp === 800 ? (
            <div
              className="z-[999] absolute h-[40vw] w-[40vw] top-0 left-1/2 transform -translate-x-1/2"
              onClick={() => {
                window.location.reload();
              }}
            >
              <div className="absolute bg-[#DDDDDD] w-[40vw] h-[40vw] opacity-60 z-[2]"></div>
              <div className="shadow-lg absolute z-[3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF5A35] to-[#F81227] text-[#fff] rounded-[200px] text-center leading-[7.6vw] h-[7.6vw] w-[20vw] text-[3vw]">
                点击刷新
              </div>
            </div>
          ) : null}
        </div>
        {tp !== 802 ? (
          <p className="text-[3vw] text-[#100A09] text-center mt-[10vw]">
            使用<span className="mx-[1.5vw] text-[#2C6AA1]">网易云音乐APP</span>
            扫码登录
          </p>
        ) : (
          <p className="text-[#0F1619] text-[3.4vw] text-center mt-4">
            <span>扫描成功</span>
            <br />
            <br />
            <span>请在手机上确认登录</span>
          </p>
        )}
      </div>
      {/* 背景图 */}
      <div className="fixed bottom-0">
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
          alt=""
          className="w-[100vw]"
        />
      </div>
    </div>
  );
}
