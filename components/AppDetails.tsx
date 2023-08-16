"use client";

import React, { ReactNode, useState } from "react";
import { H2, Text } from "./Text";
import { Gallery } from "./Gallery";
import { LightBox } from "./LightBox";

type AppDetailsProps = {
  application: IApplication;
};

const SECTION_CLASS = `
  p-6 
  border border-white 
  dark:border-gray-900 
  rounded-lg 
  shadow-lg 
  bg-gradient-to-b 
  from-white 
  to-slate-200 
  backdrop-blur 
  dark:from-gray-900 
  dark:to-gray-700
`;

const LINK_CLASS = `
  text-gray-950 
  underline 
  hover:text-gray-900 
  dark:text-gray-300
`;

const AppSection: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <div className={`${SECTION_CLASS}`}>
    <H2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
      {title}
    </H2>
    {children}
  </div>
);

const AppDetails: React.FC<AppDetailsProps> = ({
  application: {
    category,
    description,
    repoUrl,
    applicationUrl,
    title,
    screenshots,
  },
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="container py-10 mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <AppSection title="Category">
            <div className="flex pt-8 space-x-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 transition-all duration-150 ease-in-out rounded-lg bg-gray-200 hover:shadow-lg text-primary text-opacity-70 dark:bg-gray-800 dark:text-gray-300"
                >
                  {cat}
                </span>
              ))}
            </div>
          </AppSection>

          <AppSection title="Description">
            <Text className="text-gray-600 dark:text-gray-300">
              {description}
            </Text>
          </AppSection>

          <AppSection title="External Links">
            <div className="flex pt-8 space-x-4">
              {repoUrl && (
                <a href={repoUrl} className={`${LINK_CLASS}`}>
                  View Repository
                </a>
              )}
              {applicationUrl && (
                <a href={applicationUrl} className={`${LINK_CLASS}`}>
                  Visit website
                </a>
              )}
            </div>
          </AppSection>
        </div>

        <div className={`flex flex-col justify-between ${SECTION_CLASS}`}>
          <H2 className="pt-8 pb-4 mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
            Preview
          </H2>
          <Gallery
            screenshots={screenshots}
            imgAlt={`${title} screenshots`}
            onClick={() => setIsLightboxOpen(true)}
          />
        </div>
        <LightBox
          setIsLightboxOpen={setIsLightboxOpen}
          screenshots={screenshots}
          isLightboxOpen={isLightboxOpen}
        />
      </div>
    </div>
  );
};

export default AppDetails;
