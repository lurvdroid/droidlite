\"use client\";
import { useState } from "react";
export default function CreatePost({addPost}){
const [text,setText]=useState("");
const submit=()=>{if(!text.trim())return;addPost(text);setText("");};
return(<div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4"><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="What’s happening?" className="w-full bg-transparent outline-none resize-none"/><button onClick={submit} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400" disabled={!text.trim()}>Post</button></div>);
}