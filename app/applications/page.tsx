import { getApplications } from "@/lib/actions";
import { notFound } from "next/navigation";
import ApplicationsContainer from "@/components/ApplicationsContainer";

type PageProps = {
  searchParams: {
    user: string;
  };
};

const Applications = async ({ searchParams: { user } }: PageProps) => {
  const { applications } = await getApplications({
    filter: (applications) => applications.user === user,
  });

  if (!applications?.length) {
    return notFound();
  }

  return (
    <ApplicationsContainer applications={applications} className="mt-24" />
  );
};

export default Applications;
