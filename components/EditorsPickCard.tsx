"use client"

import Loading from "@/components/ApplicationForm/Loading";
import Button from "@/components/Button";
import { Text } from "@/components/Text";
import { updateEditorsPick } from "@/lib/actions";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mutate } from "swr";

interface EditorsCardProps {
    key: string;
    application: IApplication;
  }
  
  export const EditorsPickCard: React.FC<EditorsCardProps> = ({
    application: { id, title, description, logo, isEditorsPick },
  }) => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const truncateDescription = (description: string | undefined) => {
      if (description && description.length > 140) {
        return description.slice(0, 140).trim() + "...";
      }
      return description;
    };
  
    const logoPlaceholder = !logo ? "/cardplaceholderimg.svg" : logo;
  
    const toggleEditorsPick = async () => {
      setIsLoading(true);
      try {
        await updateEditorsPick({
          id,
          isEditorsPick: !isEditorsPick,
        });
        revalidatePath("/dashboard");
        mutate("/api/get-apps");
      } catch (error) {
        console.error("Error updating editor's pick:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="flex flex-col gap-3 justify-between w-full max-w-sm px-4 py-7 transition duration-200 border border-white shadow-md bg-gradient-to-b from-slate-100 to-transparent rounded-2xl transform-gpu hover:shadow-lg hover:scale-105 dark:bg-gradient-to-b dark:border-gray-700 dark:from-gray-800 dark:to-transparent dark:backdrop-filter dark:backdrop-blur-md">
        <div className="flex justify-end">
          <Link href={`/applications/${id}`} className="w-12 h-12">
            <Image
              src={error ? "/cardplaceholderimg.svg" : logoPlaceholder}
              onError={() => setError(true)}
              alt={title}
              width={48}
              height={48}
              className="rounded-lg"
              sizes="100vw"
            />
          </Link>
        </div>
        <div className="px-4 py-2 text-left">
          <Link
            href={`/applications/${id}`}
            className="mb-2 text-xl font-bold md:text-2xl lg:text-2xl dark:text-white"
          >
            {title}
          </Link>
          <Text className="text-sm md:text-base lg:text-base dark:text-white">
            {truncateDescription(description)}
          </Text>
        </div>
        <Button onClick={toggleEditorsPick} className="rounded-full w-full mx-auto">
          {isLoading ? (
            <Loading />
          ) : (
            <span>
              {isEditorsPick ? "Remove editor's pick" : "Is editor's pick"}
            </span>
          )}
        </Button>
      </div>
    );
  };
  