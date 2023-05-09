import { useRouter } from "next/router";
import Image from "next/image";

type AppHeaderProps = {
  appName: string;
  logoSrc: string;
  websiteLink: string;
};

const AppHeader = ({ appName, logoSrc, websiteLink }: AppHeaderProps) => {
  const router = useRouter();

  const handleVisitWebsite = () => {
    window.open(websiteLink, "_blank", "noopener noreferrer");
  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between mx-16 sm:mx-32 px-2 sm:px-32 py-2 mt-8">
      <div className="flex items-center justify-start sm:justify-center">
        <Image src={logoSrc} alt={`${appName} Logo`} width={50} height={50} />
        <h1 className="ml-2 text-4xl sm:text-5xl font-bold font-inter text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
          {appName}
        </h1>
      </div>
      <button
        className="flex items-center mt-2 sm:mt-0 sm:ml-4 px-3 py-2 font-bold border border-gray-500 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700"
        onClick={handleVisitWebsite}
      >
        Visit Website
        <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
      </button>
    </header>
  );
};

export default AppHeader;
