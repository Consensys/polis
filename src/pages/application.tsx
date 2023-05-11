import React from "react";
import AppHeader from "../../components/AppHeader";
import applicationData from "../../data/application-data.json";
import AppDetails from "../../components/AppDetails";
import Image from "next/image";

const ApplicationPage: React.FC = () => {
  return (
    <div>
      <AppHeader
        appName={applicationData.name}
        logoSrc={applicationData.logo}
        websiteLink={applicationData.website}
      />

      <AppDetails
        category={applicationData.category}
        description={applicationData.description}
        externalLinks={applicationData.external_links}
        images={applicationData.images}
      />
    </div>
  );
};

export default ApplicationPage;
