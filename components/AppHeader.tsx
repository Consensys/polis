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
    <header className="flex flex-col sm:flex-row items-center justify-between px-16 py-2 mt-8">
      <div className="flex items-center">
        <Image src={logoSrc} alt={`${appName} Logo`} width={50} height={50} />
        <h1 className="ml-2 text-lg font-medium">{appName}</h1>
      </div>
      <button
        className="flex items-center mt-2 sm:mt-0 sm:ml-4 px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={handleVisitWebsite}
      >
        Visit Website
        <i className="fas fa-external-link-alt ml-2"></i>
      </button>
    </header>
  );
};

export default AppHeader;
