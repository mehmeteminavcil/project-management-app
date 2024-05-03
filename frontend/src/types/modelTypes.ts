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

export type ProjectType = {
  _id: string;
  userId: string;
  name: string;
  title: string;
  description: string;
  deadline: string;
  team: [];
  tags: TagsType[];
  imageUrls: string[];
};
