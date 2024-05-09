import * as apiClient from "../API/api-client";
import { useMutation } from "react-query";
import ManageProjectForm from "../forms/ManageProjectForm";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(apiClient.createProject, {
    onSuccess: () => {
      console.log("SUCCESS");
      navigate("/projects");
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
