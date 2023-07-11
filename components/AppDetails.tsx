import React from "react";
import Image from "next/image";
import { H2, Text } from "./Text";

type AppDetailsProps = {
  application: IApplication;
};

const AppDetails: React.FC<AppDetailsProps> = ({ application }) => {
  const { category, description, repoUrl, applicationUrl, logo, screenshots } =
    application;

  return (
    <div className="container py-10 mx-auto ">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* First Column */}
        <div className="flex flex-col gap-6">
          {/* Category */}
          <div className="p-6 border border-white rounded-lg shadow-lg bg-gradient-to-b from-white to-slate-200 backdrop-blur h-fit">
            <H2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
              Category
            </H2>
            <div className="flex pt-8 space-x-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 hover:cursor-pointer hover:shadow-lg ease-in-out duration-150 text-primary text-opacity-70 rounded-lg bg-gray-200"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="p-6 border border-white rounded-lg shadow-lg bg-gradient-to-b from-white to-slate-200 backdrop-blur">
            <H2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
              Description
            </H2>
            <Text className="text-gray-600">{description}</Text>
          </div>
          {/* External Links */}
          <div className="p-6 border border-white rounded-lg shadow-lg bg-gradient-to-b from-white to-slate-200 backdrop-blur">
            <H2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
              External Links
            </H2>
            <div className="flex pt-8 space-x-4">
              {repoUrl && (
                <a href={repoUrl} className="text-gray-950 hover:underline">
                  View Repository
                </a>
              )}
              {applicationUrl && (
                <a
                  href={applicationUrl}
                  className="text-gray-950 hover:underline"
                >
                  Visit website
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-between p-6 border border-white rounded-lg shadow-lg bg-gradient-to-b from-white to-slate-200 backdrop-blur">
          {/* Preview Title */}
          <H2 className="pt-8 pb-4 mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
            Preview
          </H2>
          {/* Preview Images */}
          <div className="flex flex-col space-y-12">
            {screenshots && (
              <div className="flex space-x-8">
                {screenshots.map((sc) => (
                  <Image
                    key={sc}
                    src={sc}
                    alt={"image-1"}
                    width={200}
                    height={150}
                    layout="responsive"
                    className="rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
