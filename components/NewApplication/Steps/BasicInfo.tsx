import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Combobox } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {  StepProps } from "../types";

const popularTags = [
  "Marketplace",
  "NFT",
  "CRYPTO",
  "Blockchain",
  "Marketing",
  "Blockchain Market",
] as const;

const BasicInfo: FC<StepProps<IApplicationBasicInfo>> = ({
  data,
  handleUpdateData,
}) => {
  const [selectedTags, setSelectedTags] = useState<
    (typeof popularTags)[number][]
  >([]);
  const [query, setQuery] = useState("");

  const filteredTags = popularTags.filter((tag) => {
    return (
      tag.toLowerCase().includes(query.toLowerCase()) &&
      selectedTags.indexOf(tag) < 0
    );
  });


  const handleTagPicked = (tags: (typeof popularTags)[number][]) => {
    setSelectedTags(tags);
    handleUpdateData({ ...data, category: tags })
    setQuery("");
  };

  const handleTagRemoved = (tag: (typeof selectedTags)[number]) => {
    const newTags = selectedTags.filter((st) => st !== tag);
    setSelectedTags(newTags);
    handleUpdateData({ ...data, category: newTags })
  };

  return (
    <div>
      <div className="grid grid-cols-1 mt-4 gap-x-6 gap-y-2">
        <div className="col-span-full">
          <label
            htmlFor="title"
            className="block font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <div className="flex h-[42px] rounded-md shadow-sm bg-gray-50 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="text"
                name="title"
                onChange={(e) =>
                  handleUpdateData({ ...data, title: e.target.value })
                }
                id="title"
                placeholder="Your awesome application"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="category"
            className="block font-medium leading-6 text-gray-900"
          >
            Category
          </label>

          <Combobox
            as="div"
            className="relative flex flex-col"
            value={selectedTags}
            onChange={handleTagPicked}
            multiple
          >
            <div className=" flex min-h-[42px] flex-1 flex-wrap  mt-2 rounded-md shadow-sm bg-gray-50 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap items-center pt-2 pl-3">
                  {selectedTags.map((tag) => (
                    <div
                      className="flex px-1.5 py-0.5 mr-2 mb-2 last:mr-0 text-xs bg-gray-200 rounded-md text-[#4E5B6C] "
                      key={tag}
                    >
                      {tag}{" "}
                      <button onClick={() => handleTagRemoved(tag)}>
                        <XMarkIcon className="w-4 h-4 cursor-pointer" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <Combobox.Button as="div" className="flex-1">
                <Combobox.Input
                  className={twMerge(
                    "flex-1 w-full border-0 bg-transparent pb-1.5 pl-3  text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                  )}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={
                    selectedTags.length === 0
                      ? "Type to pick or create categories..."
                      : ""
                  }
                />
              </Combobox.Button>
            </div>

            <Combobox.Options className="absolute flex flex-wrap w-48 p-2 bg-white rounded-md shadow-2xl top-full float ">
              {query.length > 0 && (
                <Combobox.Option
                  className="block w-full px-2 py-1 overflow-auto rounded-md text-[#4E5B6C] m-1 text-xs bg-gray-200 cursor-pointer"
                  value={query}
                >
                  Create &quot;{query}&quot;
                </Combobox.Option>
              )}
              {filteredTags.length > 0 && (
                <p className="w-full pl-1 text-xs text-gray-500 pt-4 pb-[10px] ">
                  {query ? "SIMILAR" : "POPULAR"}
                </p>
              )}

              {filteredTags.map((tag) => (
                <Combobox.Option
                  key={tag}
                  value={tag}
                  className="block px-[6px] py-[2px] rounded-md text-[#4E5B6C] m-1 text-xs bg-gray-200 cursor-pointer"
                >
                  {tag}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              placeholder="Write text here..."
              onChange={(e) =>
                handleUpdateData({ ...data, description: e.target.value })
              }
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
