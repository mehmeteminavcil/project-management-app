import { useMutation, useQuery } from "react-query";
import * as apiClient from "../API/api-client";
import { useNavigate, useParams } from "react-router-dom";

import ManageNoteForm from "../forms/ManageNoteForm";
import { NoteFormData } from "../types/modelTypes";

const EditNote = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const { data: note } = useQuery(
    ["fetchMyHotelById", noteId],
    () => apiClient.fetchNoteById(noteId || ""),
    { enabled: !!noteId }
  );

  const { mutate } = useMutation(apiClient.updateNote, {
    onSuccess: () => {
      navigate("/overview");
      console.log("Note updated successfully..!");
    },
    onError: () => {
      console.log("Something went wrong when  updating the note..!");
    },
  });

  const handleSave = (data: NoteFormData) => {
    mutate(data);
  };

  return <ManageNoteForm note={note} onSave={handleSave} edit />;
};

export default EditNote;
