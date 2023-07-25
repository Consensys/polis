"use-client";

import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";
import Link from "next/link";
import { useState } from "react";

export const SearchItem: React.FC<IApplication> = ({
  title,
  logo,
  id,
}: IApplication) => {
  const [error, setError] = useState(false);

  const logoPlaceholder = !logo ? "/cardplaceholderimg.svg" : logo;

  return (
    <Link
      href={`applications/${id}`}
      className="flex items-center gap-3 py-2 px-6 justify-between hover:bg-slate-100 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <Image
          src={error ? "/cardplaceholderimg.svg" : logoPlaceholder}
          onError={() => setError(true)}
          alt=""
          width={25}
          height={25}
        />
        <span className="dark:text-primary">{title}</span>
      </div>

      <SearchIcon />
    </Link>
  );
};
