"use client";

import { getApplications } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useDebounce } from "@/lib/hooks";
import { SearchResults } from "./SearchResults";
import { LatestAndEditorsPick } from "./LatestAndEditorsPick";

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{
    items: IApplication[];
    show: boolean;
  }>({
    items: [],
    show: false,
  });

  const [data, setData] = useState<IApplication[]>([]);

  useEffect(() => {
    getApplications().then((data) => setData(data));
  }, [results.show]);

  const search = () => {
    const items = query
      ? data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

    setResults((prevResults) => ({ ...prevResults, items }));
  };

  useDebounce(search, query, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative">
      <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <div className="search-box flex items-center w-full sm:w-3/4 md:w-[476px] h-[52px] rounded-xl focus-within:shadow-lg bg-gray-100">
          <input
            className="bg-transparent border-0 h-full w-full outline-none text-sm text-gray-700 pr-2 border-gray-300 rounded-l-xl bg-[#F9FAFB]"
            type="text"
            autoComplete="off"
            value={query}
            onChange={handleSearch}
            id="search"
            placeholder="Search for apps, tools, libraries..."
            onFocus={() => setResults({ ...results, show: true })}
            onBlur={() =>
              setTimeout(() => setResults({ ...results, show: false }), 150)
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
        <div className="absolute z-10 flex items-center justify-center w-full pt-4">
          <ul className="relative bg-white sm:w-3/4 md:w-[476px] rounded-xl focus-within:shadow-lg pb-4 shadow-md">
            {results.items.length > 0 ? (
              <SearchResults results={results} />
            ) : (
              <LatestAndEditorsPick data={data} />
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
