import React from "react";
import { Icon } from "@iconify/react";
export default function Title(props) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[4.31vw] text-white dark:text-[black] flex items-center">
        {props.title}
        <span>
          <Icon icon="mingcute:right-line" width="20" />
        </span>
      </span>
      <span className="text-white">
        <Icon icon="simple-line-icons:options-vertical" width="15" />
      </span>
    </div>
  );
}
