type ProjectListProps = {
  id: string;
  imgUrl: string;
  title: string;
  count: number;
  navOpen: boolean;
};

export const ProjectsList = ({
  id,
  imgUrl,
  title,
  count,
  navOpen,
}: ProjectListProps) => {
  return (
    <li id={id} className="flex items-center cursor-pointer ">
      <img src={imgUrl} alt={title} className="" width={32} height={32} />
      {navOpen && (
        <>
          <h3 className="text-sm font-medium ml-[6px] text-gray-4">{title}</h3>
          <span className="ml-auto text-gray-3 font-medium text-[12px]">
            {count}
          </span>
        </>
      )}
    </li>
  );
};
