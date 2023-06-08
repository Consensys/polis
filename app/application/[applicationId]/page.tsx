import React from "react";
import { notFound } from "next/navigation";
import AppHeader from "../../../components/AppHeader";
import AppDetails from "../../../components/AppDetails";

const ApplicationPage = async ({ params }: { params: any }) => {
  const response = await fetch(
    `http://localhost:3000/api/application/${params.applicationId}`
  );

  const application: IApplication = await response.json();

  if (!application) {
    return notFound();
  }

  const { title, screenshots, applicationUrl, category, description, repoUrl } =
    application;

  return (
    <div>
      <AppHeader
        title={title}
        logoSrc={screenshots[0]}
        applicationUrl={applicationUrl}
      />

      <AppDetails
        category={category}
        description={description}
        externalLinks={[repoUrl]}
        images={screenshots.slice(1)}
      />
    </div>
  );
};

export default ApplicationPage;
