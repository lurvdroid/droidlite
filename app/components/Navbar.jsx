"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full p-4 shadow bg-white dark:bg-gray-800 flex justify-between items-center">
      <p className="font-bold">DroidLite</p>
      <ThemeToggle />
    </nav>
  );
}
