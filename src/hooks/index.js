import { useState, useEffect } from "react";
export const useRequest = (server) => {
    let [data, setdata] = useState()
    let [err, seterr] = useState()
    // let [loading, setloading] = useState()
    useEffect(() => {
        server()
            .then((res) => setdata(res))
            .catch((err) => seterr(err))
    }, [server])
    return { data, err }
}
