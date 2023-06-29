import { FC } from "react";
import { Control } from "react-hook-form";

export type stepKeys = "basicInfo" | "externalLinks" | "preview";
export interface IApplicationInput {
  title: string;
  category: string[];
  description: string;
  applicationUrl?: string;
  repoUrl?: string;
  logo?: File;
  screenshots?: {
    value: File;
  }[];
}

export interface StepProps {
  control: Control<IApplicationInput>;
}

export type Steps = {
  [K in stepKeys]: {
    id: number;
    title: string;
    component: FC<StepProps>;
  };
};
