export {};

declare global {
  interface IApplication {
    id: string;
    title: string;
    user: string;
    category: string[];
    description: string;
    user: string;
    applicationUrl?: string;
    repoUrl?: string;
    logo?: string;
    screenshots?: string[];
    createdBy?: string;
    isEditorsPick?: boolean;
  }
}
