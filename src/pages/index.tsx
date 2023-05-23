import { Inter } from "next/font/google";
import Hero from "../../components/Hero";
import Link from "next/link";
import Nav from "../../components/Nav";

const inter = Inter({ subsets: ["latin"] });

const Home = () => (
  <div className={inter.className}>
    <Nav />
    <Hero />
  </div>
);

export default Home;
