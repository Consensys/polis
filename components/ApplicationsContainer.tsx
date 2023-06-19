import React, { FC } from "react";
import AppCard from "./AppCard";
import { H2 } from "./Text";
import { cn } from "@/lib/utils";

type ApplicationsContainerProps = {
  applications: IApplication[];
  header?: string;
  className?: string;
};

const ApplicationsContainer: FC<ApplicationsContainerProps> = ({
  header,
  applications,
  className,
}) => {
  return (
    <div className={cn(className, "container px-6 pb-2 mx-auto")}>
      {header && (
        <H2 className="text-center text-transparent mb-14 bg-gradient-to-br bg-clip-text from-primary to-slate-500">
          {header}
        </H2>
      )}
      <div className="grid justify-center gap-4 cursor-pointer md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12">
        {applications?.map((data) => (
          <AppCard key={data.id} application={data} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsContainer;
