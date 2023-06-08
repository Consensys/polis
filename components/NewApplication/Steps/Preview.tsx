import { FC } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { StepProps } from "../types";

const Preview: FC<StepProps<IApplicationPreview>> = ({
  data,
  handleUpdateData,
}) => {
  return (
    <div className="grid grid-cols-1 mt-4 gap-x-6 gap-y-2">
      <div className="col-span-full">
        <label
          htmlFor="app-preview"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Screenshots (application preview)
        </label>
        <div className="flex justify-center px-6 py-10 mt-2 border-2 border-gray-200 border-dashed rounded-lg bg-gray-50">
          <div className="text-center">
            <CloudArrowUpIcon
              className="w-12 h-12 mx-auto text-gray-300"
              aria-hidden="true"
            />
            <div className="flex mt-4 text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative font-semibold text-gray-500 rounded-md cursor-pointer bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Click to upload</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  multiple
                  onChange={(e) => {

                    e.target.files &&
                      handleUpdateData({
                        ...data,
                        screenshots: [e.target.files[0]],
                      });
                  }}
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-500">PNG, JPG</p>
            <p className="text-xs leading-5 text-gray-500">
              (recommended size 1200x675px)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
