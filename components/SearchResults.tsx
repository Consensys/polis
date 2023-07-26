import { SearchItem } from "./SearchBarItem";
import { H4 } from "./Text";
import SearchIcon from "./icons/SearchIcon";

type Props = {
  results: {
    items: IApplication[];
    show: boolean;
  };
};

export const SearchResults: React.FC<Props> = ({ results }) => (
  <>
    <div className="flex items-center justify-between opacity-50 p-4">
      <H4 className="font-normal">Search</H4>
      <SearchIcon />
    </div>
    {results.items.map((item: IApplication) => (
      <SearchItem key={item.id} {...item} />
    ))}
  </>
);
