import { useFormContext } from "react-hook-form";
import { ProjectFormData } from "../forms/ManageProjectForm";

const AddImage = () => {
  const { register } = useFormContext<ProjectFormData>();

  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Images</h2>
      <div className="flex flex-col gap-4 p-4 border rounded">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full font-normal text-gray-700"
          {...register("imageFiles", { required: true })}
        />
      </div>
    </div>
  );
};

export default AddImage;
