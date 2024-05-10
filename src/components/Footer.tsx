import React from "react";
import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-3 py-5 border-t-2 border-dark dark:border-light">
      <div className="flex md:justify-between dark:text-light flex-col md:flex-row items-center">
        <p className="text-white">© 2024 sumitdev.live All Rights Reserved.</p>
        <p className="flex items-center gap-1 text-white">
          Made With <FaHeart fill="red" size={20} /> By
          Sumit Mahour
        </p>
      </div>
    </div>
  );
}
