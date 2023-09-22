import React from "react";
// import Foo from "../../component/Foo";
import { useState, useRef, useEffect } from "react";
import { Button } from "antd-mobile";
export default function No() {
  let [x, setx] = useState(10);
  let timer = useRef(null);
  const sedund = () => {
    timer.current = setInterval(() => {
      setx((x) => x - 1);
    }, 1000);
  };
  //useEffectreact元素渲染了才执行
  useEffect(() => {
    if (x <= 0) {
      clearInterval(timer.current);
      setx(10);
    }
    console.log("11", document.getElementById("ss"));
  }, [x]);
  console.log("22", document.getElementById("ss"));
  // let data1 = ({name:"abc"})
  //上面的data的值如果函数重新执行就会重新初始化了，虽然值没有改变但内存地址发生了变化。下面使用useRef可以避免这种情况
  //useRef 功能
  //获取节点
  //保存在多次渲染中的数据变化
  //注意ref 数据的变化不会让函数重新执行
  // let data = useRef({name:"abc"})
  return (
    <div className="text-[20vw]">
      <h1 id="ss">11</h1>
      <Button onClick={sedund}>{x === 10 ? "发送验证码" : `还剩${x}秒`}</Button>
    </div>
  );
}
//1` 函数重新执行页面会重新渲染
