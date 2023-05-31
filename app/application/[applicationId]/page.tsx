import React from "react";
import { notFound } from "next/navigation";
import AppHeader from "../../../components/AppHeader";
import AppDetails from "../../../components/AppDetails";
import { getApplication } from "../../../lib/applications";

const ApplicationPage = async ({ params }: { params: any }) => {
  const application = await getApplication(params.applicationId);

  if (!application) {
    return notFound();
  }

  const {
    title,
    category,
    applicationUrl,
    repoUrl,
    description,
    screenshots,
  } = application;

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
        images={screenshots.slice(0)}
      />
    </div>
  );
};

export default ApplicationPage;
