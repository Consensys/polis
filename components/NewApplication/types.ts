import { FC } from "react";
import BasicInfo from "./Steps/BasicInfo";

export type stepKeys = "basicInfo" | "externalLinks" | "preview";

export interface BasicInfoData {
  title: string;
  category: string[];
  description: string;
}

export interface ExternalLinksData {
  applicationUrl: string;
  repoUrl: string;
}

export interface PreviewData {
  screenshots: string[];
}

export interface StepProps<T> {
  data: T;
  handleUpdateData: (data: T) => void;
}

type StepDataType<K extends stepKeys> = K extends "basicInfo"
  ? BasicInfoData
  : K extends "externalLinks"
  ? ExternalLinksData
  : K extends "preview"
  ? PreviewData
  : never;

  
export type Steps = {
  [K in stepKeys]: {
    id: number;
    title: string;
    component: FC<StepProps<StepDataType<K>>>;
  };
};

export type StepsData = {
  [K in stepKeys]: StepDataType<K>;
};


