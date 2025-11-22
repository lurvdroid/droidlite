"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Post({ data, onDelete, highlight, addReply }) {
  const [liked, setLiked] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    if (highlight) {
      controls.start({
        backgroundColor: ["#fef3c7", "#ffffff"],
        transition: { duration: 2 },
      });
    }
  }, [highlight, controls]);

  const submitReply = () => {
    if (!replyText.trim()) return;
    addReply(data.id, replyText);
    setReplyText("");
    setShowReplyInput(false);
  };

  return (
    <motion.div
      animate={controls}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-3"
    >
      <p className="font-semibold">@lurvdroid</p>
      <p className="my-2">{data.text}</p>

      <div className="flex gap-4 items-center">
        <motion.button
          onClick={() => setLiked(!liked)}
          whileTap={{ scale: 0.8 }}
          animate={{ scale: liked ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xl"
          aria-label="Like post"
        >
          {liked ? "❤️" : "🤍"}
        </motion.button>

        <button
          onClick={() => setShowReplyInput(!showReplyInput)}
          className="text-blue-500 text-sm"
        >
          {showReplyInput ? "Cancel" : "Reply"}
        </button>

        <button onClick={onDelete} className="text-red-500 text-sm">
          Delete
        </button>
      </div>

      {/* Reply input */}
      {showReplyInput && (
        <div className="mt-2">
          <textarea
            rows={2}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 dark:bg-gray-700 dark:text-gray-200"
            placeholder="Write a reply..."
          />
          <button
            onClick={submitReply}
            className="mt-1 px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400"
            disabled={!replyText.trim()}
          >
            Reply
          </button>
        </div>
      )}

      {/* Replies list */}
      {data.replies && data.replies.length > 0 && (
        <div className="mt-4 border-l-2 border-gray-300 pl-4 dark:border-gray-600">
          {data.replies.map((reply) => (
            <div
              key={reply.id}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2"
            >
              <p className="text-sm">@lurvdroid (reply)</p>
              <p className="text-sm">{reply.text}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
