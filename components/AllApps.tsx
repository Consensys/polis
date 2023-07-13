import React, { FC } from "react";
import AppCard from "./AppCard";
import { H2 } from "./Text";

type AllAppsProps = {
  applications: IApplication[];
};

const AllApps: FC<AllAppsProps> = ({ applications }) => {
  return (
    <div className="container px-6 pb-2 mx-auto mt-24">
      <H2 className="text-center text-transparent mb-14 bg-gradient-to-br bg-clip-text from-primary to-slate-500 dark:text-gray-300">
        All Available Tools
      </H2>
      <div className="grid justify-center gap-4 cursor-pointer md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12">
        {applications?.map((data) => (
          <AppCard key={data.id} application={data} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
