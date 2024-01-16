import Head from "next/head";
import { twMerge } from "tailwind-merge";
import { Nav } from "../components/Nav";
import Providers from "@/components/Providers";

import "../styles/globals.css";

type Props = {
  description?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  className,
}) => {
  const rootClassName = twMerge(
    "relative px-4 md:px-0 text-primary-black min-h-screen",
    className ? className : ""
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors bg-white dark:bg-[#212429]">
        <Providers>
          <div className={rootClassName}>
            <div className=" mx-auto">
              <Head>
                <title>{title}</title>
                <meta name="description" content={`${description}`} />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <Nav />
              <main className="max-w-screen-2xl mx-auto">{children}</main>
            </div>
            <div className="-z-10 w-full h-[70vh] absolute top-0 left-0 bg-light-pattern dark:bg-dark-pattern bg-no-repeat bg-cover lg:bg-[length:100%_100%]"></div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

Layout.defaultProps = {
  title: "Polis",
  description: "A decentralized DAO marketplace for ConsenSys example Dapps",
};

export default Layout;
