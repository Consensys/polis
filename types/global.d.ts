export {};

declare global {
  interface IApplication {
    id: string;
    title: string;
    category: string[];
    description: string;
    applicationUrl?: string;
    repoUrl?: string;
    logo?: string;
    screenshots?: string[];
    createdBy?: string;
    isEditorsPick?: boolean;
  }
}
