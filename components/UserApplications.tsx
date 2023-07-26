"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import AppCard from "./AppCard";
import MyAppsSearchBar from "./MyAppsSearchBar";
import Button from "./Button";
import AddIcon from "./icons/AddIcon";
import { useState } from "react";
import { useDebounce } from "@/lib/hooks";

type Props = {
  applications: IApplication[];
};

const UserApps: React.FC<Props> = ({ applications }) => {
  const { isConnected } = useAccount();
  const router = useRouter();
  const [query, setQuery] = useState("");
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
        <Button className="rounded-full bg-gradient-to-br from-primary to-slate-500 px-8 py-[0.60rem]">
          <AddIcon /> <span className="hidden lg:block">New Application</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 lg:justify-items-start">
        {filteredApps.map((data) => (
          <AppCard key={data.id} application={data} />
        ))}
      </div>
    </>
  );
};

export default UserApps;
