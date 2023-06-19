import Image from "next/image";
import Link from "next/link";

type AppHeaderProps = {
  title: string;
  logo?: string;
  applicationUrl?: string;
};

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  logo,
  applicationUrl,
}) => {
  return (
    <header className="flex items-center justify-between px-2 py-2 mt-8">
      <div className="flex items-center justify-start sm:justify-center">
        {logo && (
          <Image
            src={logo}
            alt="logo"
            className="w-10 h-10 logo sm:w-14 sm:h-14"
            width={50}
            height={50}
          />
        )}
        <h1 className="ml-2 text-4xl font-bold text-transparent sm:text-5xl font-inter bg-gradient-to-br bg-clip-text from-primary to-secondary">
          {title}
        </h1>
      </div>
      {applicationUrl && (
        <Link href={applicationUrl} passHref>
          <button className="flex items-center px-3 py-2 mt-2 font-bold text-gray-500 border border-gray-500 rounded-full sm:mt-0 sm:ml-4 hover:bg-gray-100 hover:text-gray-700">
            Visit Website
            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </Link>
      )}
    </header>
  );
};

export default AppHeader;
