import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TagsTypeData } from "../types/modelTypes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddTagSection from "../components/AddTagSection";
import { ProjectType } from "../../../backend/src/models/project";
import AddImage from "../components/AddImage";
import AddTeam from "../components/AddTeam";

export type ProjectFormData = {
  name: string;
  title: string;
  description: string;
  deadline: string;
  team: Team[];
  tags: TagsTypeData[];
  imageFiles: FileList;
  imageUrls: string[];
  logoImgFile: FileList;
  logoUrl: string;
  bannerImgFile: FileList;
  bannerUrl: string;
};

type Team = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
};

type Props = {
  project?: ProjectType;
  onSave: (projectFormData: FormData) => void;
};

const ManageProjectForm = ({ project, onSave }: Props) => {
  const formMethods = useForm<ProjectFormData>();
  const { handleSubmit, register } = formMethods;

  const [startDate, setStartDate] = useState<Date | null>(new Date());

  // useEffect(() => {
  //   reset(project);
  // }, [project, reset]);

  const onSubmit = handleSubmit((formDataJson: ProjectFormData) => {
    const formData = new FormData();
    if (project) {
      formData.append("projectId", project._id);
    }

    formData.append("name", formDataJson.name);
    formData.append("title", formDataJson.title);
    formData.append("description", formDataJson.description);
    formData.append("deadline", JSON.stringify(startDate));

    formDataJson.tags.forEach((tag, index) => {
      formData.append(`tags[${index}][name]`, tag.name);
      formData.append(`tags[${index}][color]`, tag.color);
    });

    formDataJson.team.forEach((user, index) => {
      formData.append(`team[${index}][userId]`, user._id);
      formData.append(`team[${index}][email]`, user.email);
      formData.append(`team[${index}][isAdmin]`, String(user.isAdmin));
    });

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    Array.from(formDataJson.logoImgFile).forEach((logoImageFile) => {
      formData.append(`logoImgFile`, logoImageFile);
    });
    Array.from(formDataJson.bannerImgFile).forEach((bannerImageFile) => {
      formData.append(`bannerImgFile`, bannerImageFile);
    });

    console.log(formDataJson);
    onSave(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="w-full border rounded-md border-gray-5 bg-[#f9f8ff] p-[10px] ">
          <h2 className="my-4 font-semibold text-gray-1">Add New Note</h2>
          <label>
            Name of Project:
            <input
              type="text"
              className="w-full px-3 py-1 font-semibold border rounded-md outline-none border-gray-4"
              {...register("name")}
            />
          </label>
          <label>
            Title:
            <input
              className="w-full px-3 py-1 font-semibold border rounded-md outline-none border-gray-4"
              {...register("title")}
            />
          </label>
          <label>
            Description:
            <textarea
              className="w-full p-3 border rounded-md outline-none min-h-40 max-h-[300px] border-gray-4 "
              {...register("description")}
            />
          </label>
          <div className="flex w-full gap-3 px-2 py-1 my-2 border rounded-md border-gray-4">
            Deadline:
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <AddTagSection />
          <AddTeam />
          <AddImage title="Logo Image" name="logoImgFile" />
          <AddImage title="Banner Image" name="bannerImgFile" />
          <AddImage title="Image Files" multiple name="imageFiles" />
          <button
            type="submit"
            className="px-3 py-2 mt-2 rounded-md bg-purple hover:bg-purple/85 text-w w-[200px] mx-auto"
          >
            Create new Project
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ManageProjectForm;
