"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex w-full mt-5 mx-auto max-w-[90%] border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <CiSearch className="text-xl text-gray-500 mr-3" />

        <input
          type="text"
          className="flex-grow focus:outline-none"
          placeholder="Search Google"
          onChange={(e) => setInput(e.target.value)}
        />

        <BsFillMicFill className="text-xl" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          onClick={randomSearch}
        >
          {randomSearchLoading ? "Loading..." : "search random word"}
        </button>
      </div>
    </>
  );
};

export default Search;
