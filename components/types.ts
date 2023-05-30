import { LinkProps } from "next/link";

export interface DummyData {
  trendingNow: string[];
  editorPicks: string[];
  categories: string[];
}

export type ButtonVariant = "primary" | "light" | "borderless";

export interface UrlProps extends LinkProps {
  text: string;
  className?: string;
}
