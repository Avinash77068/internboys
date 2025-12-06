import api from "../api";

export const visitor = (endPoint,payload) => {
    api.post(endPoint,payload).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}