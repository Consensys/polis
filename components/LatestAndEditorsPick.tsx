import { SearchItem } from "./SearchBarItem";
import { H4 } from "./Text";

type Props = {
  data: IApplication[];
};

export const LatestAndEditorsPick: React.FC<Props> = ({ data }) => (
  <>
    <H4 className="dark:text-primary font-normal opacity-50 px-4 py-4">Latest apps added 🔥</H4>
    {data.slice(data.length - 3).map((item: IApplication) => (
      <SearchItem key={item.id} {...item} />
    ))}
    <H4 className="dark:text-primary font-normal opacity-50 px-4 py-4">
      Our Editor&apos;s pick ✨
    </H4>
    {data
      .filter((app) => app.isEditorsPick)
      .slice(0, 3)
      .map((item: IApplication) => (
        <SearchItem key={item.id} {...item} />
      ))}
  </>
);
