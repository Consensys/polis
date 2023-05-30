export interface DummyData {
  trendingNow: string[];
  editorPicks: number[]; // Update the type to store the IDs of editor's pick cards
  categories: string[];
}

export type ButtonVariant = "primary" | "light" | "borderless";

export interface AppCardData {
  id: number;
  logoUrl: string;
  appName: string;
  dummyText: string;
  isEditorsPick: boolean; // Add the isEditorsPick property
}
