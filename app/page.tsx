import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { getApplications } from "@/lib/actions";
import ApplicationsContainer from "@/components/ApplicationsContainer";
import Pagination from "@/components/Pagination";
import { cn } from "@/lib/utils";
import { DEFAULT_FETCH_LIMIT } from "@/lib/constants";

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
  const limit = limitStr ? parseInt(limitStr) : DEFAULT_FETCH_LIMIT;

  const { applications, total } = await getApplications({
    page,
    limit,
  });
console.log("applications", applications)

  const { applications: editorPickedApplications } = await getApplications({
    filter: (node) => Boolean(node.isEditorsPick),
  });
console.log("editorPickedApplications", editorPickedApplications)
  const lastsEditorsPick = editorPickedApplications.slice(
    editorPickedApplications.length > 3
      ? editorPickedApplications.length - 3
      : 0
  );

  const isAllFetched = applications.length === total;

  return (
    <div className={cn(inter.className, "pb-10")}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6"></div>

      <Hero total={total} />

      {editorPickedApplications.length > 0 ? (
        <ApplicationsContainer
          header="Our Editor's Pick"
          applications={lastsEditorsPick}
          className="mt-24"
        />
      ) : null}

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
