import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
      <section className="flex items-center flex-1">
        <div className="flex flex-col w-full ">
          <h1 className="text-5xl font-extrabold font-first text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
              Explore Amazing DAO <br />
              and Web3 tools
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam
            ipsum, convallis vel orci sed, lacinia posuere dolor.
          </p>

          <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <div className="flex items-center w-[476px] h-[52px] rounded-xl focus-within:shadow-lg bg-white">
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="search"
                id="search"
                placeholder="Search for apps, tools, libraries..."
              />

              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
