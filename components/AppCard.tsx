"use client";

import React, { useState } from "react";
import Image from "next/image";
import { H4, Text } from "./Text";
import Link from "next/link";
import NewTab from "./icons/NewTab";

interface AppCardProps {
  key: string;
  application: IApplication;
  type?: "short" | "card";
}

export const AppCard: React.FC<AppCardProps> = ({
  application: { id, title, description, logo, category },
  type = "card",
}) => {
  const [error, setError] = useState(false);

  const truncateDescription = (description: string | undefined) => {
    if (description && description.length > 140) {
      return description.slice(0, 85).trim() + "...";
    }
    return description;
  };

  const logoPlaceholder = !logo ? "/cardplaceholderimg.svg" : logo;

  return (
    <>
      {type === "card" ? (
        <Link
          className="relative overflow-hidden flex gap-6 min-h-[118px] px-3 py-2 items-center max-w-md border border-purple-100 dark:border-gray-600 rounded-xl bg-gradient-to-b from-purple-100 dark:from-slate-900 to-transparent z-10 hover:shadow-lg hover:scale-105 duration-150"
          href={`/applications/${id}`}
        >
          <div>
            <Image
              src={error ? "/cardplaceholderimg.svg" : logoPlaceholder}
              onError={() => setError(true)}
              alt={title}
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex gap-2">
              {category &&
                category.map((category) => (
                  <span
                    key={category}
                    className="uppercase bg-purple-400 bg-opacity-20 text-purple-500 dark:bg-red-200 dark:bg-opacity-20 dark:text-red-200 p-1 rounded-md text-[0.65rem]"
                  >
                    {category}
                  </span>
                ))}
            </div>
            <H4 className="dark:text-gray-200">{title}</H4>
            <Text className="max-w-xs text-xs text-gray-700">
              {truncateDescription(description)}
            </Text>
          </div>
          <Image
            src={error ? "/cardplaceholderimg.svg" : logoPlaceholder}
            onError={() => setError(true)}
            alt={title}
            width={140}
            height={140}
            className="absolute right-3 bottom-[-30px] -z-10 blur-xl opacity-50"
          />
        </Link>
      ) : (
        <Link
          href={`/applications/${id}`}
          className="flex gap-3 px-3 py-2 items-center max-w-md z-10 justify-between dark:hover:bg-slate-800 rounded-xl dark:hover:bg-opacity-40 duration-150 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={error ? "/cardplaceholderimg.svg" : logoPlaceholder}
                onError={() => setError(true)}
                alt={title}
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>

            <div>
              <H4 className="dark:text-gray-200">{title}</H4>
              <Text className="max-w-xs text-xs text-gray-700">
                {truncateDescription(description)}
              </Text>
            </div>
          </div>
          <NewTab />
        </Link>
      )}
    </>
  );
};

export default AppCard;
