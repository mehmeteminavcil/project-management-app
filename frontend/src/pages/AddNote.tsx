import { useMutation } from "react-query";
import * as apiClient from "../API/api-client";
import ManageNoteForm from "../forms/ManageNoteForm";
import { NoteFormData } from "../types/modelTypes";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(apiClient.addNote, {
    onSuccess: async () => {
      navigate("/overview");
      console.log("New note added...OK!");
    },
    onError: (error: Error) => {
      console.log(JSON.stringify(error));
    },
  });
  const onSubmit = (data: NoteFormData) => {
    mutate(data);
  };

  return <ManageNoteForm onSave={onSubmit} />;
};

export default AddNote;
