import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  limit: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  limit = 2,
}: any) => {
  return (
    <div className="flex justify-center pt-16">
      <Link
        scroll={false}
        href={{
          search: `page=${currentPage + 1}&limit=${limit}`,
        }}
        className="py-[10px] px-5 rounded-[20px] bg-gradient-to-b text-gray-900 from-white font-medium to-[#ADB5C3]"
      >
        Load more tools
      </Link>
    </div>
  );
};

export default Pagination;
