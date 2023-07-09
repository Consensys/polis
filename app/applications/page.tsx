import { getApplications } from "@/lib/actions";
import { notFound } from "next/navigation";
import ApplicationsContainer from "@/components/ApplicationsContainer";

type PageProps = {
  searchParams: {
    user: string;
  };
};

const MyApplications = async ({ searchParams }: PageProps) => {
  const user = searchParams.user;

  if (!user) {
    return notFound();
  }

  const applications = await getApplications(
    (applications) => applications.user === user
  );

  return (
    <ApplicationsContainer applications={applications} className="mt-24" />
  );
};

export default MyApplications;
