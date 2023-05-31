import React from "react";
import Image from "next/image";
import { AppCardData } from "./types";
import { H2, Text } from "./Text";

interface AppCardProps {
  data: AppCardData;
}

const AppCard: React.FC<AppCardProps> = ({ data }) => {
  return (
    <div className="border border-white bg-gradient-to-b from-slate-100 to-transparent flex flex-col justify-between p-4 w-fit max-w-sm rounded-2xl shadow-md transition duration-200 transform-gpu hover:shadow-lg hover:scale-105">
      <div className="flex justify-end">
        <div className="w-12 h-12">
          <Image
            src={data.logoUrl}
            alt={data.appName}
            width={48}
            height={48}
            className="rounded-lg shadow-md"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="text-left px-4 py-2">
        <H2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
          {data.appName}
        </H2>
        <Text className="text-sm md:text-base lg:text-base">
          {data.dummyText}
        </Text>
      </div>
    </div>
  );
};

export default AppCard;
