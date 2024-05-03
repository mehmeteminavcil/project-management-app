import { useMutation } from "react-query";
import TestForm from "../forms/TestForm";
import * as apiClient from "../API/api-client";

const TestPage = () => {
  const { mutate } = useMutation(apiClient.createTest, {
    onSuccess: () => {
      console.log("SUCCESS");
    },
    onError: () => {
      console.log("ERROR");
    },
  });

  const handleSubmit = (testFormData: FormData) => {
    mutate(testFormData);
    console.log(testFormData);
  };

  return <TestForm onSave={handleSubmit} />;
};

export default TestPage;
