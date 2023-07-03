import { FC } from "react";
import { IApplicationInput, StepProps } from "../types";
import { useFormContext } from "react-hook-form";

const ExternalLinks: FC<StepProps> = ({
  control
}) => {
  
  const { register } = useFormContext<IApplicationInput>();

  return (
    <div className="grid grid-cols-1 mt-4 gap-x-6 gap-y-2">
      <div className="col-span-full">
        <label
          htmlFor="applicationUrl"
          className="block font-medium leading-6 text-gray-900"
        >
          Application URL
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm bg-gray-50 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="applicationUrl"
              {...register("applicationUrl")}
              placeholder="https://your-awesome-application.io"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 col-span-full">
        <label
          htmlFor="repoUrl"
          className="block font-medium leading-6 text-gray-900"
        >
          GitHub Repository URL
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm bg-gray-50 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <input
              id="repoUrl"
              {...register("repoUrl")}
              placeholder="https://github.com/your-username/your-awesome-application"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;
