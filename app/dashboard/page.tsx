"use client";

import { H2 } from "@/components/Text";
import { isAllowedEditor } from "@/lib/utils";
import { redirect } from "next/navigation";
import { useAccount } from "wagmi";
import Loading from "./loading";
import { EditorsPickCard } from "@/components/EditorsPickCard";
import useSWR from "swr";

export const revalidate = 0;

const Dashboard = () => {
  const { isConnected, address } = useAccount();
  if (!isConnected || !isAllowedEditor(address!)) redirect("/connect");

  const fetcher = () => fetch(`/api/get-apps`).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/get-apps", fetcher);

  return (
    <>
      {!isLoading ? (
        <div>
          <H2 className="text-center my-14">All created tools</H2>
          <div className="grid md:justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {data.applications.map((application: IApplication) => {
              return (
                <EditorsPickCard
                  key={application.id}
                  application={application}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dashboard;
