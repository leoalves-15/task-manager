export type ICard = {
  id?: string;
  title: string;
  description: string;
  status: "new" | "doing" | "done";
};
