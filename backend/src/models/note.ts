import mongoose from "mongoose";

export type NoteType = {
  _id: string;
  userId: string;
  title: string;
  text: string;
  tags: TagsType[];
};

export type TagsType = {
  _id: string;
  name: string;
  color: string;
};

const TagsSchema = new mongoose.Schema({
  name: { type: String, required: false },
  color: { type: String, required: false },
});

const NoteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    tags: [TagsSchema],
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model<NoteType>("Note", NoteSchema);
export default Note;
