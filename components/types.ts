export interface DummyData {
  trendingNow: string[];
  editorPicks: string[];
  categories: string[];
}

export type ButtonVariant = "primary" | "light" | "borderless";

export interface AppCardData {
  id: number;
  logoUrl: string;
  appName: string;
  dummyText: string;
}
