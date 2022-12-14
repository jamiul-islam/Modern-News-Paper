"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        placeholder="Search Keywords..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400 "
      />
      <button
        disabled={!input}
        type="submit"
        className="text-orange-400 disabled:text-gray-400"
      >
        search
      </button>
    </form>
  );
}

export default SearchBox;
