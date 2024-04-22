import { useState } from "react";
import { Tag } from "./Tags";
import { Trash } from "lucide-react";

type TagItem = {
  name: string;
  color: string;
};

type AddTagProps = {
  tags: TagItem[];
  onAddTag: (tag: TagItem) => void;
  onRemoveTag: (tag: TagItem) => void;
};

const AddTag = ({ tags, onAddTag, onRemoveTag }: AddTagProps) => {
  const [tagName, setTagName] = useState<string>("");
  const [tagColor, setTagColor] = useState<string>("green");

  const colors = ["green", "pink", "yellow", "blue", "purple", "violet"];

  const handleAddTag = () => {
    if (tagName && tagColor) {
      onAddTag({ name: tagName, color: tagColor });
      setTagName("");
      setTagColor("green");
    }
  };

  const removeTag = (item: TagItem) => {
    onRemoveTag(item);
  };

  return (
    <div className="flex flex-col gap-2 p-3 border rounded-md border-gray-5">
      <div className="flex items-center gap-2">
        {tags?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-1 p-1 pr-2 border rounded border-gray-5"
            onClick={() => removeTag(item)}
          >
            <Tag tag={item.name} key={item.name} color={item.color} />
            <Trash className="cursor-pointer text-gray-3" size={16} />
          </div>
        ))}
      </div>
      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter a tag..pick a color"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            className="px-2 border rounded-md outline-none border-gray-4"
          />
          <div className="flex gap-3 ">
            {colors.map((color, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="tagColor"
                  value={color}
                  checked={tagColor === color}
                  onChange={() => setTagColor(color)}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 rounded-full bg-${color} ${
                    tagColor === color && "scale-125"
                  }`}
                ></div>
              </label>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleAddTag}
          className="font-bold text-white rounded bg-green hover:bg-green/85 w-[150px]"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTag;
