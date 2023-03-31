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
            <form>
              <input
                type="search"
                className="px-6 py-3 w-[476px] h-[52px] text-gray-700 bg-white border rounded-xl dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"
                placeholder="Search for apps, tools, libraries..."
              />

              <button
                type="button"
                className="px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
