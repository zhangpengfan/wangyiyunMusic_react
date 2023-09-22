import React from "react";
import { useEffect, useState } from "react";
export default function Button() {
  let [set, setset] = useState(0);

  useEffect(() => {
    console.log("setset值发生了改变");
    return () => {
      console.log(22222222222);
    };
  }, [set]); //监听数组里面的值发生改变就会重新执行该函数
  return (
    <div
      className="text-[50px]"
      onClick={() => {
        setset(set++);
      }}
    >
      {set}
    </div>
  );
}
