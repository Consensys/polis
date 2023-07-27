"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import LinkIcon from "./icons/LinkIcon";
import EditIcon from "./icons/EditIcon";
import { useAccount } from "wagmi";
import UpadateApplication from "./ApplicationForm";

type AppHeaderProps = {
  application: IApplication;
};

const AppHeader: React.FC<AppHeaderProps> = ({ application }) => {
  const [error, setError] = useState(false);

  const [open, setOpen] = useState(false);
  const { address } = useAccount();
  const { title, logo, applicationUrl, user } = application;

  const isMyApplication = user === address;

  return (
    <header className="flex items-center justify-between px-2 py-2 mt-8">
      <div className="flex items-center justify-start sm:justify-center">
        {logo && (
          <div className="flex items-center justify-start sm:justify-center">
            <Image
              src={error ? "/cardplaceholderimg.svg" : logo}
              alt={`${title} Logo`}
              onError={() => setError(true)}
              className="w-8 h-8 md:w-10 md:h-10"
              width={50}
              height={50}
            />
          </div>
        )}
        <h1 className="ml-2 text-4xl font-bold text-transparent sm:text-5xl font-inter bg-gradient-to-br bg-clip-text from-primary to-secondary dark:text-white">
          {title}
        </h1>
      </div>
      <div className="flex gap-2 lg:gap-4">
        {isMyApplication ? (
          <Button
            onClick={() => setOpen(true)}
            variant="borderless"
            href={applicationUrl}
            className="px-4 rounded-3xl lg:rounded-full md:px-7 dark:border-white"
          >
            <EditIcon />
            <span className="hidden lg:block dark:text-gray-400">
              {" "}
              Edit Application
            </span>
          </Button>
        ) : null}

        {applicationUrl && (
          <Button
            variant="borderless"
            href={applicationUrl}
            className="px-4 rounded-3xl lg:rounded-full md:px-7 dark:border-white"
          >
            <LinkIcon />{" "}
            <span className="hidden lg:block dark:text-white">
              {" "}
              Visit Website
            </span>
          </Button>
        )}
      </div>
      <UpadateApplication
        modalOpen={open}
        closeModal={() => setOpen(false)}
        isEditMode={true}
        application={application}
      />
    </header>
  );
};

export default AppHeader;
