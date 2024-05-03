import mongoose from "mongoose";

export type TagsType = {
  name: string;
  color: string;
};

const TagsSchema = new mongoose.Schema({
  name: { type: String, required: false },
  color: { type: String, required: false },
});

export type TestType = {
  userId: string;
  name: string;
  tags: TagsType[];
  imageUrls: string[];
};

const testSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  tags: [TagsSchema],
  imageUrls: [{ type: String, required: false }],
});

const Test = mongoose.model("Test", testSchema);

export default Test;
