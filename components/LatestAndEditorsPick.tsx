import { SearchItem } from "./SearchBarItem";
import { H4 } from "./Text";

type Props = {
  data: IApplication[];
};

const Section: React.FC<{ title: string; data: IApplication[] }> = ({
  title,
  data,
}) => (
  <>
    <H4 className="dark:text-primary font-normal opacity-50 px-4 py-4">
      {title}
    </H4>
    {data.slice(0, 3).map((item: IApplication) => (
      <SearchItem key={item.id} {...item} />
    ))}
  </>
);

export const LatestAndEditorsPick: React.FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return <H4>No apps found 😥</H4>;
  }

  const editorsPickApps = data.filter((app) => app.isEditorsPick);

  return (
    <>
      {editorsPickApps.length > 0 && (
        <Section title="Our Editor's pick ✨" data={editorsPickApps} />
      )}
    </>
  );
};
