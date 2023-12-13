"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import LinkIcon from "./icons/LinkIcon";
import EditIcon from "./icons/EditIcon";
import { useAccount } from "wagmi";
import UpdateApplication from "./ApplicationForm";
import { updateEditorsPick } from "@/lib/actions";
import Loading from "./ApplicationForm/Loading";

type AppHeaderProps = {
  application: IApplication;
};

const ALLOW_LIST = process.env.ALLOW_LIST?.split(",") || [];

const AppHeader: React.FC<AppHeaderProps> = ({ application }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { address } = useAccount();
  const { title, logo, applicationUrl, user, id, isEditorsPick } = application;

  const isAllowedEditor = ALLOW_LIST.includes(address!);
  const isUserApplication = user === address;

  const toggleEditorsPick = async () => {
    setIsLoading(true);
    try {
      await updateEditorsPick({
        id,
        isEditorsPick: !isEditorsPick,
      });
    } catch (error) {
      console.error("Error updating editor's pick:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
        {isUserApplication && (
          <Button
            onClick={() => setOpen(true)}
            variant="borderless"
            href={applicationUrl}
            className="px-4 rounded-3xl lg:rounded-full md:px-7 dark:border-white"
          >
            <EditIcon />
            <span className="hidden lg:block dark:text-gray-400">
              Edit Application
            </span>
          </Button>
        )}

        {isAllowedEditor && (
          <Button onClick={toggleEditorsPick} className="rounded-full">
            {isLoading ? (
              <Loading />
            ) : (
              <span>
                {isEditorsPick ? "Remove editor's pick" : "Is editor's pick"}
              </span>
            )}
          </Button>
        )}

        {applicationUrl && (
          <Button
            variant="borderless"
            href={applicationUrl}
            className="px-4 rounded-3xl lg:rounded-full md:px-7 dark:border-white"
          >
            <LinkIcon />
            <span className="hidden lg:block dark:text-white">
              Visit Website
            </span>
          </Button>
        )}
      </div>
      <UpdateApplication
        modalOpen={open}
        closeModal={() => setOpen(false)}
        isEditMode={true}
        application={application}
      />
    </header>
  );
};

export default AppHeader;
