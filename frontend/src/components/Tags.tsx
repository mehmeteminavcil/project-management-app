type TagProps = {
  tag: string;

  color: string;
};

export const Tag = ({ tag, color }: TagProps) => {
  return (
    <span
      className={`text-${color} py-1 px-[10px] t  font-semibold  bg-${color}/10 rounded-full text-xs `}
    >
      {tag}
    </span>
  );
};
