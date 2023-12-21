import { getApplications } from "@/lib/actions";
import { SearchBar } from "./SearchBar";
import { H1, Text } from "./Text";

type Props = {
  total: number;
};

const Hero = async ({ total }: Props) => {
  const data = await getApplications({
    limit: total,
  });

  const filteredApps = data.applications.filter((app) => app.isEditorsPick);

  return (
    <section className="flex items-center flex-1 mt-24">
      <div className="flex flex-col w-full">
        <H1 className="font-extrabold text-center">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-primary to-slate-500 dark:text-gray-300">
            Explore awesome DAO <br />
            and Web3 tools
          </span>
        </H1>
        <Text className="mx-auto mt-6 text-center dark:text-white max-w-2xl text-lg">
          Explore our collection of dapp templates and essential tools, curated
          to empower developers in their quest to create outstanding projects.
        </Text>
        <SearchBar applications={filteredApps} />
      </div>
    </section>
  );
};

export default Hero;
