export type ICard = {
  id?: string;
  title: string;
  description: string;
  lista?: string;
  status: "new" | "doing" | "done";
};
