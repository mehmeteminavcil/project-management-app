import mongoose from "mongoose";

export type TodoType = {
  _id: string;
  userId: string;
  title: string;
  isChecked: boolean;
  tags: TagsType[];
  date: Date;
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

const TodoSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    isChecked: { type: Boolean, default: false },
    tags: [TagsSchema],
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model<TodoType>("Todo", TodoSchema);
export default Todo;
