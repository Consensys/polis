import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { getApplications } from "@/lib/actions";
import ApplicationsContainer from "@/components/ApplicationsContainer";
import EditorsPick from "@/components/EditorsPick";

const inter = Inter({ subsets: ["latin"] });

const Home = async () => {
  const applications = await getApplications();

  return (
    <div className={inter.className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6"></div>

      <Hero />
      <EditorsPick applications={applications} />

      <ApplicationsContainer
        header="All Available Tools"
        applications={applications}
        className="mt-24"
      />
    </div>
  );
};

export default Home;
