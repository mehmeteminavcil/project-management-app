import mongoose, { Schema } from "mongoose";

export type ProjectType = {
  _id: string;
  userId: string;
  name: string;
  title: string;
  description: string;
  deadline: string;
  team: { userId: mongoose.Types.ObjectId; email: string; isAdmin: boolean }[];
  tags: TagsType[];
  logoUrl: string[];
  bannerUrl: string[];
  imageUrls: string[];
};

type TagsType = {
  _id: string;
  name: string;
  color: string;
};

const TagsSchema = new mongoose.Schema({
  name: { type: String, required: false },
  color: { type: String, required: false },
});

const ProjectSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: String, required: false },
    logoUrl: [{ type: String }],
    bannerUrl: [{ type: String }],
    imageUrls: [{ type: String }],
    team: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        email: { type: String, required: true },
        isAdmin: { type: Boolean, required: true },
      },
    ],

    tags: [TagsSchema],
  },
  { timestamps: true }
);

const Project = mongoose.model<ProjectType>("Project", ProjectSchema);
export default Project;
