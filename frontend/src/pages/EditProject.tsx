import ManageProjectForm from "../forms/ManageProjectForm";

const handleSave = () => {
  console.log("fd");
};
const EditProject = () => {
  return <ManageProjectForm onSave={handleSave} />;
};

export default EditProject;
