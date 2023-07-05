import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LinkIcon from "./icons/LinkIcon";
import EditIcon from "./icons/EditIcon";

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
          <div className="flex items-center justify-start sm:justify-center">
            <Image
              src={logo}
              alt={`${title} Logo`}
              className="w-8 h-8 md:w-10 md:h-10"
              width={50}
              height={50}
            />
          </div>
        )}
        <h1 className="ml-2 text-4xl font-bold text-transparent sm:text-5xl font-inter bg-gradient-to-br bg-clip-text from-primary to-secondary">
          {title}
        </h1>
      </div>
      <div className="flex gap-2 lg:gap-4">
        <Button
          variant="borderless"
          href={applicationUrl}
          className="px-4 rounded-3xl lg:rounded-full md:px-7 cursor-not-allowed opacity-40"
        >
          <EditIcon />
          <span className="hidden lg:block"> Edit Application</span>
        </Button>

        {applicationUrl && (
          <Button
            variant="borderless"
            href={applicationUrl}
            className="px-4 rounded-3xl lg:rounded-full md:px-7"
          >
            <LinkIcon /> <span className="hidden lg:block"> Visit Website</span>
          </Button>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
