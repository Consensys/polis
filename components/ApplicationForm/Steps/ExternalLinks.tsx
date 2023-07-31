import { FC } from "react";
import { IApplicationInput } from "../types";
import { useFormContext } from "react-hook-form";

const ExternalLinks: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IApplicationInput>();

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
              {...register("applicationUrl", {
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid URL format",
                },
              })}
              placeholder="https://your-awesome-application.io"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          {errors.applicationUrl && (
            <p className="mt-1 ml-1 text-sm text-red-500">
              {errors.applicationUrl.message}
            </p>
          )}
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
              {...register("repoUrl", {
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid URL format",
                },
              })}
              placeholder="https://github.com/your-username/your-awesome-application"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          {errors.repoUrl && (
            <p className="mt-1 ml-1 text-sm text-red-500">
              {errors.repoUrl.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;
