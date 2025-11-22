"use client";

import { useState, useEffect, useRef } from "react";

const MAX_CHARS = 280;

export default function CreatePost({ addPost }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize textarea when text changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"; // Set to scroll height
    }
  }, [text]);

  // Typing indicator logic
  useEffect(() => {
    if (!text) {
      setIsTyping(false);
      setError("");
      return;
    }

    setIsTyping(true);

    if (text.length > MAX_CHARS) {
      setError(`Exceeded maximum character limit of ${MAX_CHARS}`);
    } else {
      setError("");
    }

    const timeout = setTimeout(() => setIsTyping(false), 1000);
    return () => clearTimeout(timeout);
  }, [text]);

  const submit = () => {
    if (!text.trim()) {
      setError("Post cannot be empty");
      return;
    }
    if (text.length > MAX_CHARS) {
      setError(`Exceeded maximum character limit of ${MAX_CHARS}`);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      addPost(text);
      setText("");
      setLoading(false);
      setIsTyping(false);
      setError("");
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What’s happening?"
        className={`w-full bg-transparent outline-none resize-none transition-colors ${
          error ? "border border-red-500" : ""
        }`}
        disabled={loading}
        maxLength={MAX_CHARS + 10} // Allow a few extra but will block on submit
        rows={1}
      />

      <div className="flex justify-between items-center mt-2">
        <span
          className={`text-sm ${
            text.length > MAX_CHARS ? "text-red-500" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {text.length} / {MAX_CHARS}
        </span>

        <button
          onClick={submit}
          className="px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400"
          disabled={
            loading || !text.trim() || text.length > MAX_CHARS
          }
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          ) : (
            "Post"
          )}
        </button>
      </div>

      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500 italic select-none">{error}</p>
      )}

      {/* Typing indicator */}
      {isTyping && !loading && !error && (
        <p className="mt-1 text-sm italic text-gray-500 dark:text-gray-400 select-none">
          User is typing...
        </p>
      )}
    </div>
  );
}
