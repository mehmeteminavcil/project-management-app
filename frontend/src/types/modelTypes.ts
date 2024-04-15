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
