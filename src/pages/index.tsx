import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Text from "../../components/Text";
import Hero from "../../components/Hero";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => (
  <>
    <Hero />
  </>
);

export default Home;
