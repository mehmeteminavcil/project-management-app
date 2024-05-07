import { useFormContext } from "react-hook-form";
import { ProjectFormData } from "../forms/ManageProjectForm";

type Props = {
  title: string;
  multiple?: boolean;
  name: keyof ProjectFormData;
};
const AddImage = ({ title, multiple, name }: Props) => {
  const { register } = useFormContext<ProjectFormData>();

  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <div className="flex flex-col gap-4 p-4 border rounded">
        <input
          type="file"
          multiple={multiple}
          accept="image/*"
          className="w-full font-normal text-gray-700"
          {...register(name, { required: false })}
        />
      </div>
    </div>
  );
};

export default AddImage;
