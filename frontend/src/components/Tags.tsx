type TagProps = {
  tag: string;
  color?: string;
};
export const Tag = ({ tag, color }: TagProps) => {
  return (
    <span
      className={`${
        color ? `text-${color} bg-${color}/10` : "text-green bg-green/10"
      } py-1 px-[10px]   font-semibold  rounded-full text-xs`}
    >
      {tag}
    </span>
  );
};
