import { useFormContext } from "react-hook-form";
import { ProjectFormData } from "../forms/ManageProjectForm";
import { ImagePlus } from "lucide-react";

type Props = {
  title: string;
  multiple?: boolean;
  name: keyof ProjectFormData;
};

const AddImage = ({ title, multiple, name }: Props) => {
  const { register } = useFormContext<ProjectFormData>();

  return (
    <div className="font-semibold text-gray-1">
      <h2 className="font-bold ">{title}</h2>
      <div className="flex gap-4 p-4 border rounded border-gray-5">
        <label className="flex items-center cursor-pointer">
          <ImagePlus size={30} className="text-gray-1" />
          <input
            type="file"
            multiple={multiple}
            accept="image/*"
            className=""
            {...register(name, { required: false })}
          />
        </label>
      </div>
    </div>
  );
};

export default AddImage;
