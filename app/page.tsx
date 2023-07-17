import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { getApplications } from "@/lib/actions";
import ApplicationsContainer from "@/components/ApplicationsContainer";
import Pagination from "@/components/Pagination";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

type PageProps = {
  searchParams: {
    page?: string;
    limit?: string;
  };
};

const Home = async ({
  searchParams: { page: pageStr, limit: limitStr },
}: PageProps) => {
  const page = pageStr ? parseInt(pageStr) : 1;
  const limit = limitStr ? parseInt(limitStr) : 2;

  const { applications, total } = await getApplications({
    page,
    limit,
  });

  const { applications: editorPickedApplications } = await getApplications({
    filter: (node) => Boolean(node.isEditorsPick),
  });

  const isAllFetched = applications.length === total;

  return (
    <div className={cn(inter.className, "pb-10")}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6"></div>

      <Hero />
      <ApplicationsContainer
        header="Our Editor's Pick"
        applications={editorPickedApplications}
        className="mt-24"
      />
      <ApplicationsContainer
        header="All Available Tools"
        applications={applications}
        className="mt-24"
      />
      {!isAllFetched ? <Pagination currentPage={page} limit={limit} /> : null}
    </div>
  );
};

export default Home;
