"use client";

import { useState } from "react";
import { searchData as data } from "../dummy-data";

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ items: string[]; show: boolean }>({
    items: [],
    show: false,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    const filteredResults = [
      ...data.trendingNow,
      ...data.editorPicks,
      ...data.categories,
    ].filter((item: string) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setResults({ items: filteredResults, show: true });
  };
  return (
    <div className="relative">
      <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <div className="search-box flex items-center w-full sm:w-3/4 md:w-[476px] h-[52px] rounded-xl focus-within:shadow-lg bg-gray-100">
          <input
            className="bg-transparent border-0 h-full w-full outline-none text-sm text-gray-700 pr-2 border-gray-300 rounded-l-xl bg-[#F9FAFB]"
            type="text"
            value={query}
            onChange={handleSearch}
            id="search"
            placeholder="Search for apps, tools, libraries..."
            onFocus={() => setResults({ ...results, show: true })}
            onBlur={() =>
              setTimeout(() => setResults({ ...results, show: false }), 100)
            }
          />

          <button className="grid w-12 h-full text-gray-300 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {results.show && (
        <div className="absolute flex items-center justify-center w-full pt-4">
          <div className="centered-div">
            <ul className="bg-white sm:w-3/4 md:w-[476px] rounded-xl focus-within:shadow-lg p-4  shadow-md">
              {results.items.slice(0, 3).map((item: string) => (
                <li key={item} className="text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
