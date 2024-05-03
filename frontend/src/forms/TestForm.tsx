import { FormProvider, useForm } from "react-hook-form";
import TestFirstSection from "./TestFirstSection";
import AddTagSection from "../components/AddTagSection";
import AddImage from "../components/AddImage";

export type TestFormData = {
  name: string;
  imageFiles: FileList;
};

export type TestType = {
  userId: string;
  name: string;
};

type Props = {
  onSave: (testFormData: FormData) => void;
};

const TestForm = ({ onSave }: Props) => {
  const formMethods = useForm<TestFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formDataJson: TestFormData) => {
    const formData = new FormData();
    formData.append("name", formDataJson.name);

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col">
        <TestFirstSection />
        <AddTagSection />
        <AddImage />
        test
        <button className="p-1 border rounded-md">Submit</button>
      </form>
    </FormProvider>
  );
};

export default TestForm;
