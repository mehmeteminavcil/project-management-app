import { useFormContext } from "react-hook-form";
import { ProjectFormData } from "../forms/ManageProjectForm";
import { ImagePlus } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
  multiple?: boolean;
  name: keyof ProjectFormData;
};

const AddImage = ({ title, multiple, name }: Props) => {
  const { register } = useFormContext<ProjectFormData>();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files);
      setSelectedImages(imagesArray);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="font-bold ">{title}</h2>
      <div className="flex gap-4 p-4 border rounded border-gray-5">
        <label className="flex items-center cursor-pointer">
          <ImagePlus size={30} className="text-gray-1" />
          <input
            type="file"
            multiple={multiple}
            accept="image/*"
            className="hidden"
            {...register(name, { required: false })}
            onChange={handleImageChange}
          />
        </label>

        {selectedImages.length > 0 && (
          <div className="flex-1 ">
            <div className="flex flex-wrap">
              {selectedImages.map((image, index) => (
                <div key={index} className="m-2 overflow-hidden rounded-md">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Selected Image ${index + 1}`}
                    className="h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddImage;
