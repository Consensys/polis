import { SearchBar } from "./SearchBar";
import { H1, Text } from "./Text";

const Hero = () => {
  return (
    <section className="flex items-center flex-1 mt-24">
      <div className="flex flex-col w-full">
        <H1 className="font-extrabold text-center">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-primary to-slate-500 dark:text-gray-300">
            Explore Amazing DAO <br />
            and Web3 tools
          </span>
        </H1>
        <Text className="mx-auto mt-6 text-center dark:text-white max-w-2xl text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam
          ipsum, convallis vel orci sed, lacinia posuere dolor.
        </Text>
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
