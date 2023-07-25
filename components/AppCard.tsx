"use client";

import React, { useState } from "react";
import Image from "next/image";
import { H2, Text } from "./Text";
import Link from "next/link";

interface AppCardProps {
  key: string;
  application: IApplication;
}

const AppCard: React.FC<AppCardProps> = ({
  application: { id, title, description, logo },
}) => {
  const [error, setError] = useState(false);

  const truncateDescription = (description: string | undefined) => {
    if (description && description.length > 140) {
      return description.slice(0, 140).trim() + "...";
    }
    return description;
  };

  const logoPlaceholder = !logo ? "/cardplaceholderimg.svg" : logo;

  return (
    <Link
      className="flex flex-col justify-between w-full max-w-sm px-4 py-7 transition duration-200 border border-white shadow-md bg-gradient-to-b from-slate-100 to-transparent rounded-2xl transform-gpu hover:shadow-lg hover:scale-105 dark:bg-gradient-to-b dark:border-gray-700 dark:from-gray-800 dark:to-transparent dark:backdrop-filter dark:backdrop-blur-md"
      href={`/applications/${id}`}
    >
      <div className="flex justify-end">
        <div className="w-12 h-12">
          <Image
            src={error ? "/cardplaceholderimg.svg" : logoPlaceholder}
            onError={() => setError(true)}
            alt={title}
            width={48}
            height={48}
            className="rounded-lg"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="px-4 py-2 text-left">
        <H2 className="mb-2 text-xl font-bold md:text-2xl lg:text-2xl dark:text-white">
          {title}
        </H2>
        <Text className="text-sm md:text-base lg:text-base dark:text-white">
          {truncateDescription(description)}
        </Text>
      </div>
    </Link>
  );
};

export default AppCard;
