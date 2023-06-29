import { FC, useRef } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { IApplicationInput, StepProps } from "../types";
import {  useFieldArray, useFormContext } from "react-hook-form";
import ImagePreview from "../../ImagePreview";

const Media: FC<StepProps> = ({ control }) => {
  const { watch, setValue } = useFormContext<IApplicationInput>();

  const logo = watch("logo");

  const { fields, append, remove } = useFieldArray<
    IApplicationInput,
    "screenshots"
  >({
    control,
    name: "screenshots",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];

    if (image) {
      append({ value: image });
    }
  };

  return (
    <div className="grid grid-cols-1 mt-4 gap-x-6 gap-y-2">
      <div className="col-span-full">
        <label
          htmlFor="app-preview"
          className="block text-base font-medium leading-6 text-gray-900"
        >
          Application Logo
        </label>
        {logo ? (
          <ImagePreview
            image={logo}
            handleOnRemove={() => setValue("logo", undefined)}
            containerClassName="mt-2"
            imageClassName="aspect-square"
          />
        ) : (
          <div className="flex justify-center px-6 py-2 mt-2 border-2 border-gray-200 border-dashed rounded-lg bg-gray-50">
            <div className="text-center">
              <CloudArrowUpIcon
                className="w-8 mx-auto text-gray-500"
                aria-hidden="true"
              />
              <div className="flex justify-center mt-1 text-sm leading-6 text-gray-600">
                <label
                  htmlFor="logo"
                  className="relative font-semibold text-gray-500 rounded-md cursor-pointer bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Click to upload</span>
                  <input
                    id="logo"
                    type="file"
                    onChange={(e) => setValue("logo", e.target.files?.[0])}
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-500">PNG, JPG</p>
              <p className="text-xs leading-5 text-gray-500">
                (recommended size 512x512px)
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 col-span-full">
        <label
          htmlFor="app-preview"
          className="block text-base font-medium leading-6 text-gray-900"
        >
          Screenshots (application preview)
        </label>
        <ul role="list" className="flex flex-row mt-2 overflow-auto">
          <li className="border-2 shrink-0 border-gray-200 border-dashed rounded-lg bg-gray-50 flex justify-center items-center flex-col  mr-2 h-[140px] w-[176px]">
            <CloudArrowUpIcon
              className="w-8 mx-auto text-gray-500"
              aria-hidden="true"
            />
            <div className="text-sm leading-6 text-gray-600 ">
              <label
                htmlFor="screenshots"
                className="font-semibold text-gray-500 rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <button type="button" onClick={handleAddImage}>
                  Click to upload
                </button>
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <p className="text-xs leading-5 text-center text-gray-500">
              (recommended size 1200x675px)
            </p>
          </li>
          {fields.map(({ value, id }, index) => (
            <li key={id} className="mr-2 last:mr-0">
              <ImagePreview
                image={value}
                handleOnRemove={() => remove(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Media;
