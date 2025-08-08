import React, { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTerm = term.trim();
    if (trimmedTerm) {
      onSearch(trimmedTerm);
    }
  };
  
  const clearSearch = () => {
    setTerm("");
    onSearch(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-6 flex gap-2 mx-auto">
      <label htmlFor="search" className="sr-only">
        Search Images
      </label>

      <input
        id="search"
        type="text"
        placeholder="Search images..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="py-2 border border-gray-300 w-full rounded focus:outline-none focus:ring-2 focus:ring-green-400 px-3 text-black transition"
      />

      {term && (
        <button
          type="button"
          onClick={clearSearch}
          className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded transition"
        >
          ✕
        </button>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-semibold transition"
      >
        Search
      </button>
    </form>
  );
};
