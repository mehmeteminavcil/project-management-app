export type TodoType = {
  _id: string;
  userId: string;
  title: string;
  isChecked: boolean;
  createdAt: string;
  tags: TagsType[];
};

export type TagsType = {
  _id: string;
  name: string;
  color: string;
};

export type NoteType = {
  _id: string;
  userId: string;
  title: string;
  text: string;
  createdAt: string;
  tags: TagsType[];
};

export type NoteFormData = {
  _id: string;
  userId: string;
  title: string;
  text: string;
  tags: TagsTypeData[];
};

export type TagsTypeData = {
  name: string;
  color: string;
};

export type Team = {
  _id: string;
  userId: string;
  email: string;
  isAdmin: boolean;
};

export type ProjectType = {
  _id: string;
  userId: string;
  name: string;
  title: string;
  description: string;
  deadline: string;
  team: Team[];
  tags: TagsType[];
  imageUrls: string[];
  logoUrl: string;
  bannerUrl: string;
  createdAt: string;
};
