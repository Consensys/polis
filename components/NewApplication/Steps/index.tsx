"use client";
import { FC, useState, useTransition } from "react";
import cn from "classnames";
import { useAccount } from "wagmi";
import { Tab } from "@headlessui/react";
import {
  ChevronDoubleRightIcon,
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/20/solid";
import BasicInfo from "./BasicInfo";
import ExternalLinks from "./ExternalLinks";
import { IApplicationInput, stepKeys, Steps } from "../types";

import Media from "./Media";
import Button from "../../Button";
import { FormProvider, useForm } from "react-hook-form";
import { submitApplication } from "../../../lib/actions";

type NewApplicationStepsProps = {
  closeModal: () => void;
};

const NewApplicationSteps: FC<NewApplicationStepsProps> = ({ closeModal }) => {
  const TOTAL_STEPS = 3;
  const [currentStep, setCurrentStep] = useState(0);
  const { address } = useAccount();
  const [isPending, startTransition] = useTransition();
  const methods = useForm<IApplicationInput>({
    defaultValues: {
      category: [],
    },
  });

  const [steps] = useState<Steps>({
    basicInfo: {
      id: 1,
      title: "Basic Info",
      component: BasicInfo,
    },
    externalLinks: {
      id: 2,
      title: "External Links",
      component: ExternalLinks,
    },
    preview: {
      id: 3,
      title: "Media",
      component: Media,
    },
  });

  const moveToNext = () => {
    if (currentStep === TOTAL_STEPS - 1) return;
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const moveToPrev = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const submit = methods.handleSubmit(({ screenshots, logo, ...rest }) => {
    const formData = new FormData();

    if (screenshots && screenshots.length > 0) {
      screenshots.forEach((image) => {
        formData.append("screenshots", image.value);
      });
    }

    if (logo) {
      formData.append("logo", logo);
    }

    startTransition(() => {
      submitApplication({
        images: formData,
        data: JSON.stringify({ ...rest, user: address }),
      });
      closeModal();
    });
  });

  return (
    <Tab.Group selectedIndex={currentStep} as="div" className="px-2">
      <Tab.List className="flex pt-6 ">
        {Object.keys(steps).map((step, index) => (
          <Tab key={step}>
            {({ selected }) => (
              <div
                className={cn(
                  "flex items-center font-semibold ",
                  selected ? "text-[#202328]" : "text-gray-500"
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center text-xs flex-shrink-0 w-5 h-5 mr-2 border rounded-full",
                    selected ? "border-[#202328]" : "border-gray-500"
                  )}
                >
                  <span>{steps[step as stepKeys].id}</span>
                </span>
                <span>{steps[step as stepKeys].title}</span>
                {index < Object.keys(steps).length - 1 && (
                  <ChevronDoubleRightIcon className="w-4 h-4 mx-4 text-gray-400" />
                )}
              </div>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="relative h-[500px]">
        <h2 className="text-[#202328] mt-8 text-2xl font-medium">
          Submit New Application
        </h2>
        <FormProvider {...methods}>
          <form onSubmit={submit}>
            <Tab.Panel>
              <BasicInfo control={methods.control} />
            </Tab.Panel>
            <Tab.Panel>
              <ExternalLinks control={methods.control} />
            </Tab.Panel>
            <Tab.Panel>
              <Media control={methods.control} />
            </Tab.Panel>
            <div className="absolute bottom-0 right-0 flex">
              {currentStep > 0 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    moveToPrev();
                  }}
                  className="mr-12"
                >
                  <div className="flex items-center text-xs">
                    <ArrowLeftCircleIcon className="w-6 h-6 mr-1" />
                    Previous Step
                  </div>
                </button>
              )}
              {currentStep === TOTAL_STEPS - 1 ? (
                <Button
                  disabled={isPending}
                  className="px-2 text-xs"
                  type="submit"
                >
                  <ArrowRightCircleIcon className="w-6 h-6" />
                  Submit New Application
                </Button>
              ) : (
                <Button
                  className="text-xs"
                  onClick={(e) => {
                    e.preventDefault();
                    moveToNext();
                  }}
                >
                  <ArrowRightCircleIcon className="w-6 h-6" />
                  Next Step
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default NewApplicationSteps;
