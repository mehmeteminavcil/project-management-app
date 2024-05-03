import { useFormContext } from "react-hook-form";
import { TestFormData } from "./TestForm";

const AddTeamSection = () => {
  const { register } = useFormContext<TestFormData>();
  return (
    <div>
      <h2>Add a team to Project:</h2>
    </div>
  );
};

export default AddTeamSection;
