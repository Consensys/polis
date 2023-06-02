import { Inter } from "next/font/google";
import Hero from "../components/Hero";
import EditorsPick from "../components/EditorsPick";
import AllApps from "../components/AllApps";

const inter = Inter({ subsets: ["latin"] });

const Home = async () => {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6"></div>

      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <EditorsPick />
      <AllApps />
    </div>
  );
};

export default Home;
