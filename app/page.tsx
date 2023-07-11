import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { getApplications } from "@/lib/actions";
import ApplicationsContainer from "@/components/ApplicationsContainer";

const inter = Inter({ subsets: ["latin"] });

const Home = async () => {
  const applications = await getApplications();

  return (
    <div className={inter.className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6"></div>

      <Hero />
      <ApplicationsContainer
        header="Our Editor's Pick"
        applications={applications?.slice(0, 3)}
        className="mt-24"
      />
      <ApplicationsContainer
        header="All Available Tools"
        applications={applications}
        className="mt-24"
      />
    </div>
  );
};

export default Home;
