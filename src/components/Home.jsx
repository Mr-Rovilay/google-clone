import Link from "next/link";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm bg-white shadow-md">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>

        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>

        <div className="bg-transparent hover:bg-gray-200 cursor-pointer rounded-full text-xl p-2">
          <BsFillGrid3X3GapFill />
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
