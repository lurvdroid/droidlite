\"use client\";
import { useState } from "react";
export default function Post({data,onDelete}){
const [liked,setLiked]=useState(false);
return(<div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-3"><p className="font-semibold">@lurvdroid</p><p className="my-2">{data.text}</p><div className="flex gap-4 items-center"><button onClick={()=>setLiked(!liked)}>{liked?"❤️":"🤍"}</button><button onClick={onDelete} className="text-red-500 text-sm">Delete</button></div></div>);
}