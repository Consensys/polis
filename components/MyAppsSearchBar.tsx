
type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
};

const MyAppsSearchBar: React.FC<Props> = ({ handleSearch, query }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search..."
      className="border h-fit border-primary border-opacity-20 w-full rounded-lg max-w-xl "
    />
  );
};

export default MyAppsSearchBar;
