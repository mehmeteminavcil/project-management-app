import { useFormContext } from "react-hook-form";
import { TestFormData } from "./TestForm";

const TestFirstSection = () => {
  const { register } = useFormContext<TestFormData>();
  return (
    <input
      type="text"
      {...register("name", { required: true })}
      className="border"
      placeholder="Your name string"
    />
  );
};

export default TestFirstSection;
