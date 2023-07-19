import { getApplications } from "@/lib/actions";
import UserApps from "@/components/UserApplications";
import { notFound } from "next/navigation";

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
    <>
      <UserApps applications={applications} />
    </>
  );
};

export default MyApplications;
