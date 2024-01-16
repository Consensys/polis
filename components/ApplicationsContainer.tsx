import React, { FC } from "react";
import AppCard from "./AppCard";
import { cn } from "@/lib/utils";

type ApplicationsContainerProps = {
  applications: IApplication[];
  header?: string;
  className?: string;
  type?: "short" | "card";
};

const ApplicationsContainer: FC<ApplicationsContainerProps> = ({
  header,
  applications,
  className,
  type = "card",
}) => {
  return (
    <div className={cn(className, "lg:px-6 pb-2 mx-auto")}>
      {header && (
        <h2 className="text-3xl font-semibold text-transparent mb-14 bg-gradient-to-br bg-clip-text from-primary to-slate-500 dark:from-white dark:to-slate-400">
          {header}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7 justify-items-center">
        {applications?.map((data) => (
          <AppCard type={type} key={data.id} application={data} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationsContainer;
