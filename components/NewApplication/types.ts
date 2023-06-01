import { FC } from "react";

export type stepKeys = "basicInfo" | "externalLinks" | "preview";
export interface StepProps<T> {
  data: T;
  handleUpdateData: (data: T) => void;
}

type StepDataType<K extends stepKeys> = K extends "basicInfo"
  ? IApplicationBasicInfo
  : K extends "externalLinks"
  ? IApplicationExternalLinks
  : K extends "preview"
  ? IApplicationPreview
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
