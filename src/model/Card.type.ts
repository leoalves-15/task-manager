export type ICard = {
  id?: string;
  titulo: string;
  conteudo: string;
  lista: "new" | "toDo" | "doing" | "done";
};
