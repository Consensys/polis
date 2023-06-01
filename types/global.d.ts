export {};

declare global {
  interface IApplicationBasicInfo {
    title: string;
    category: string[];
    description: string;
  }

  interface IApplicationExternalLinks {
    applicationUrl: string;
    repoUrl: string;
  }

  interface IApplicationPreview {
    screenshots: string[];
  }

  interface IApplication
    extends IApplicationBasicInfo,
      IApplicationExternalLinks,
      IApplicationPreview {
    id: string;
    isEditorsPick?: boolean;
  }
}
