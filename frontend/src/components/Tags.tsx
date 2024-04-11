type TagProps = {
  tag: string;
  color: string;
};

export const Tag = ({ tag, color }: TagProps) => {
  const textColor = "text-" + color;
  const bgColor = "bg-" + color + "/10";

  return (
    <>
      {color && (
        <span
          className={`${textColor} py-1 px-[10px] font-semibold ${bgColor}  rounded-full text-xs `}
        >
          {tag}
        </span>
      )}
    </>
  );
};
