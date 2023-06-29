import React from "react";
import { notFound } from "next/navigation";
import AppHeader from "../../../components/AppHeader";
import AppDetails from "../../../components/AppDetails";
import { getApplication } from "../../../lib/actions";

const ApplicationPage = async ({ params }: { params: any }) => {
  const application: IApplication | undefined = await getApplication(
    params.applicationId
  );

  if (!application) {
    return notFound();
  }

  return (
    <div>
      <AppHeader
        title={application.title}
        logo={application.logo}
        applicationUrl={application.applicationUrl}
      />

      <AppDetails application={application} />
    </div>
  );
};

export default ApplicationPage;
