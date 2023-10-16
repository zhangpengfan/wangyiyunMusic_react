import React from "react";
import { taglist } from "../../service/index"
import { useRequest } from "ahooks";
export default function PlaylistPlaza() {
    const { data } = useRequest(taglist)
    const filteredData = data?.data?.tags?.filter(item => item.category === 1 && item.type === 0);
    console.log(filteredData, data?.data?.tags)
    return <div>
        歌单广场
    </div>
}
