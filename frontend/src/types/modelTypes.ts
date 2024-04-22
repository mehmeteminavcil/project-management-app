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
