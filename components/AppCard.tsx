import React from "react";
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
  return (
    <div className="flex flex-col justify-between w-full max-w-sm p-4 transition duration-200 border border-white bg-gradient-to-b from-slate-100 to-transparent  rounded-2xl transform-gpu hover:shadow-lg hover:scale-105 dark:bg-gradient-to-b dark:border-gray-700 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 shadow-md dark:backdrop-filter dark:backdrop-blur-md dark:border-gray-300">
      <Link href={`/application/${id}`}>
        <div className="flex justify-end">
          <div className="w-12 h-12">
            {logo && (
              <Image
                src={logo}
                alt={title}
                width={48}
                height={48}
                className="rounded-lg shadow-md"
                sizes="100vw"
              />
            )}
          </div>
        </div>
        <div className="px-4 py-2 text-left">
          <H2 className="mb-2 text-xl font-bold md:text-2xl lg:text-2xl dark:text-white">
            {title}
          </H2>
          <Text className="text-sm md:text-base lg:text-base dark:text-white">
            {description}
          </Text>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
