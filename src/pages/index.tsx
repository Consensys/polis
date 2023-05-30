import { Inter } from "next/font/google";
import Hero from "../../components/Hero";

const inter = Inter({ subsets: ["latin"] });
import EditorsPick from "../../components/EditorsPick";
import Layout from "../../components/Layout";
const Home = () => (
  <div className={inter.className}>
    <Layout>
      <Hero />
      <EditorsPick />
    </Layout>
  </div>
);

export default Home;
