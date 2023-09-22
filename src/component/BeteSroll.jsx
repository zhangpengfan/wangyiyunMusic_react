import React from "react";
import BScroll from "@better-scroll/core";
import { useEffect, useRef } from "react";

export default function BetterSrcoll(props) {
  const wrap = useRef(null);
  useEffect(() => {
    new BScroll();
  });
  return (
    <div ref={wrap}>
      <div>{props.children}</div>
    </div>
  );
}
