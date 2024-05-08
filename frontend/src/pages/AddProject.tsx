import * as apiClient from "../API/api-client";
import { useMutation } from "react-query";
import ManageProjectForm from "../forms/ManageProjectForm";

const AddProject = () => {
  const { mutate } = useMutation(apiClient.createProject, {
    onSuccess: () => {
      console.log("SUCCESS");
    },
    onError: () => {
      console.log("ERROR");
    },
  });

  const handleSave = (projectFormData: FormData) => {
    mutate(projectFormData);
  };

  return <ManageProjectForm onSave={handleSave} />;
};

export default AddProject;
