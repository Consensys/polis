"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import AppCard from "./AppCard";
import MyAppsSearchBar from "./MyAppsSearchBar";
import Button from "./Button";
import AddIcon from "./icons/AddIcon";
import { useState } from "react";
import { useDebounce } from "@/lib/hooks";
import ApplicationForm from "./ApplicationForm";

type Props = {
  applications: IApplication[];
};

const UserApps: React.FC<Props> = ({ applications }) => {
  const { isConnected } = useAccount();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [filteredApps, setFilteredApps] = useState(applications);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const search = () => {
    const items = query
      ? applications.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      : applications;

    setFilteredApps(items);
  };

  useDebounce(search, query, 500);

  if (!isConnected && typeof window !== "undefined") {
    router.push("/");
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
        <MyAppsSearchBar handleSearch={handleSearch} query={query} />
        <Button
          onClick={() => setOpen(true)}
          className="rounded-full bg-gradient-to-br from-primary to-slate-500 px-8 py-[0.60rem]"
        >
          <AddIcon /> <span className="hidden lg:block">New Application</span>
        </Button>
      </div>

      {!filteredApps.length ? (
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No applications found
          </h2>
          <p className="text-gray-500">
            {applications.length
              ? "Try changing your search query or create a new application."
              : "Create a new application to get started."}
          </p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {filteredApps.map((data) => (
          <AppCard key={data.id} application={data} />
        ))}
      </div>

      <ApplicationForm
        modalOpen={open}
        closeModal={() => setOpen(false)}
        isEditMode={false}
      />
    </>
  );
};

export default UserApps;
