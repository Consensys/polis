"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import AppCard from "./AppCard";

type Props = {
  allApplications: IApplication[];
};

const UserApps: React.FC<Props> = ({ allApplications }) => {
  const { isConnected } = useAccount();
  const router = useRouter();

  if (!isConnected) {
    router.push("/");
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 mt-12 lg:justify-items-start">
      {allApplications.map((data) => (
        <AppCard key={data.id} application={data} />
      ))}
    </div>
  );
};

export default UserApps;
