"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { savePosts, loadPosts } from "./lib/storage";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [newPostId, setNewPostId] = useState(null);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  const addPost = (text) => {
    const id = Date.now();
    const newPosts = [{ id, text, replies: [] }, ...posts];
    setPosts(newPosts);
    savePosts(newPosts);
    setNewPostId(id);
    setTimeout(() => setNewPostId(null), 2000);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((p) => p.id !== id);
    setPosts(newPosts);
    savePosts(newPosts);
  };

  const addReply = (postId, replyText) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [{ id: Date.now(), text: replyText }, ...(post.replies || [])],
        };
      }
      return post;
    });
    setPosts(newPosts);
    savePosts(newPosts);
  };

  return (
    <div>
      <Navbar />

      <main className="max-w-lg mx-auto p-4 sm:p-6 lg:p-8">
        <CreatePost addPost={addPost} />

        <AnimatePresence initial={false}>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <Post
                data={post}
                onDelete={() => deletePost(post.id)}
                highlight={post.id === newPostId}
                addReply={addReply}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>
    </div>
  );
}
