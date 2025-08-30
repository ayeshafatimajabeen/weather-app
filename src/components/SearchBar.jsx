import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 justify-center w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 rounded text-black outline-none"
      />
      <button
        type="submit"
        className="bg-white text-blue-600 px-4 py-2 rounded font-semibold shadow"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
