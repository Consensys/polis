import React from "react";
import { notFound } from "next/navigation";
import AppHeader from "../../../components/AppHeader";
import AppDetails from "../../../components/AppDetails";
import { getApplication } from "../../../lib/actions";

type PageProps = {
  params: {
    applicationId: string;
  };
};

const ApplicationPage = async ({ params: { applicationId } }: PageProps) => {
  const application: IApplication | undefined = await getApplication(
    applicationId
  );

  if (!application) {
    return notFound();
  }

  return (
    <div>
      <AppHeader application={application} />

      <AppDetails application={application} />
    </div>
  );
};

export default ApplicationPage;
