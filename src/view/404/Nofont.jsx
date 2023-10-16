import React from "react"
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function No() {
  const navigator = useNavigate()
  let [x, setx] = useState(5);
  let timer = useRef(null);
  const sedund = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setx((x) => x - 1);
    }, 1000);
  };
  useEffect(() => {
    if (x === 0) {
      navigator("/Home")
    }
    return () => clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  return (
    <div className="text-[3vw] flex justify-center items-center mt-5 ">
      <h1 onClick={sedund()}>页面不存{x}秒后将返回首页</h1>
    </div>
  );
}

