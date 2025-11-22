"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { savePosts, loadPosts } from "./lib/storage";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  const addPost = (text) => {
    const newPosts = [{ text, id: Date.now() }, ...posts];
    setPosts(newPosts);
    savePosts(newPosts);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((p) => p.id !== id);
    setPosts(newPosts);
    savePosts(newPosts);
  };

  return (
    <div>
      <Navbar />

      <main className="max-w-lg mx-auto p-4">
        <CreatePost addPost={addPost} />

        {posts.map((post) => (
          <Post key={post.id} data={post} onDelete={() => deletePost(post.id)} />
        ))}
      </main>
    </div>
  );
}
