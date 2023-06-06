import React from "react";
import AppCard from "./AppCard";
import { H2 } from "./Text";
import { getApplications } from "../lib/applications";

const AllApps = async () => {
  const allApplications = await getApplications();

  return (
    <div className="container px-6 pb-2 mx-auto mt-24">
      <H2 className="text-center text-transparent mb-14 bg-gradient-to-br bg-clip-text from-primary to-slate-500">
        All Available Tools
      </H2>
      <div className="grid justify-center gap-4 cursor-pointer md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12">
        {allApplications.map((data) => (
          <AppCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
