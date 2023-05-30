import { Inter } from "next/font/google";
import Hero from "../../components/Hero";
import Link from "next/link";
import Nav from "../../components/Nav";

const inter = Inter({ subsets: ["latin"] });
import EditorsPick from "../../components/EditorsPick";
const Home = () => (
  <div className={inter.className}>
    <Nav />
    <Hero />
    <EditorsPick />
  </div>
);

export default Home;
