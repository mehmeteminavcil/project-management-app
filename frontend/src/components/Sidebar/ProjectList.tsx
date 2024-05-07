type ProjectListProps = {
  id: string;
  logoUrl: string;
  name: string;
  count: number;
  navOpen: boolean;
};

export const ProjectsList = ({
  id,
  logoUrl,
  name,
  count,
  navOpen,
}: ProjectListProps) => {
  return (
    <li id={id} className="flex items-center cursor-pointer ">
      <img src={logoUrl} alt={name} className="" width={32} height={32} />
      {navOpen && (
        <>
          <h3 className="text-sm font-medium ml-[6px] text-gray-4">{name}</h3>
          <span className="ml-auto text-gray-3 font-medium text-[12px]">
            {count}
          </span>
        </>
      )}
    </li>
  );
};
