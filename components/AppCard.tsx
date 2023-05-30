import React from "react";
import Image from "next/image";
import { AppCardData } from "./types";

interface AppCardProps {
  data: AppCardData;
}

const AppCard: React.FC<AppCardProps> = ({ data }) => {
  return (
    <div className="border border-white bg-gradient-to-b from-slate-200 to-slate-100 flex flex-col justify-between items-end p-4 isolate w-96 md:w-80 lg:w-96 rounded-lg shadow-md transition duration-300 transform-gpu hover:shadow-lg hover:scale-105">
      <div className="flex justify-end">
        <div className="w-12 h-12">
          <Image
            src={data.logoUrl}
            alt={data.appName}
            width={48}
            height={48}
            className="rounded-lg shadow-md"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="text-left px-4 py-2">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
          {data.appName}
        </h2>
        <p className="text-sm md:text-base lg:text-base">{data.dummyText}</p>
      </div>
    </div>
  );
};

export default AppCard;
