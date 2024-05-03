import { useFieldArray, useFormContext } from "react-hook-form";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { ProjectFormData } from "../forms/ManageProjectForm";

const AddTagSection = () => {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext<ProjectFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const addField = () => {
    append({ name: "", color: "" });
  };

  const removeField = (index: number) => {
    remove(index);
  };

  const [selectedColors, setSelectedColors] = useState<string[]>(["green"]);

  const handleColorChange = (index: number, color: string) => {
    const updatedSelectedColors = [...selectedColors];
    updatedSelectedColors[index] = color;
    setSelectedColors(updatedSelectedColors);
    setValue(`tags.${index}.color`, color);
  };

  const colors = ["green", "pink", "yellow", "blue", "purple", "violet"];
  return (
    <div className="flex flex-col gap-2 p-3 border rounded-md border-gray-5">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex items-center p-1 border rounded-full border-gray-5 "
        >
          <input
            type="text"
            {...register(`tags.${index}.name`, {
              required: "Tag name is required...!",
            })}
            placeholder="Enter a tag"
            className={`py-1 px-[10px]  w-auto   text-xs mr-4  text-center font-semibold rounded-full outline-none placeholder-green bg-${selectedColors[index]}/10 text-${selectedColors[index]}`}
          />

          <div className="flex items-center gap-3">
            {errors && errors.tags && errors.tags[index]?.name && (
              <span className="text-error">
                {errors.tags[index].name.message}
              </span>
            )}
            {colors.map((color, colorIndex) => (
              <label key={colorIndex}>
                <input
                  {...register(`tags.${index}.color`)}
                  type="radio"
                  value={color}
                  className="hidden"
                  defaultChecked={colorIndex === 0}
                  onChange={() => handleColorChange(index, color)}
                />
                <span
                  className={`w-4 h-4 cursor-pointer block rounded-full bg-${color} ${
                    selectedColors[index] === color
                      ? "border-gray-1 border"
                      : ""
                  }`}
                />
              </label>
            ))}
          </div>

          <Trash2
            size={16}
            color="red"
            type="button"
            className="ml-2"
            onClick={() => removeField(index)}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addField}
        className="w-[70px] border  rounded-md"
      >
        Add Tag
      </button>
    </div>
  );
};

export default AddTagSection;
