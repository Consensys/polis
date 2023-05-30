import { LinkProps } from "next/link";

export interface DummyData {
  trendingNow: string[];
  editorPicks: number[]; // Update the type to store the IDs of editor's pick cards
  categories: string[];
}

export type ButtonVariant = "primary" | "light" | "borderless";

export interface UrlProps extends LinkProps {
  text: string;
  className?: string;
}

export interface AppCardData {
  id: number;
  logoUrl: string;
  appName: string;
  dummyText: string;
  isEditorsPick: boolean; // Add the isEditorsPick property
}
