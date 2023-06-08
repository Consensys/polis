import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import EditorsPick from "../components/EditorsPick";
import AllApps from "../components/AllApps";

const inter = Inter({ subsets: ["latin"] });

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api`, { next: { revalidate: 5 } });
  const applications = await response.json();

  return (
    <div className={inter.className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6"></div>

      <Hero />
      <EditorsPick applications={applications?.slice(0,3)} />
      <AllApps applications={applications} />
    </div>
  );
};

export default Home;
