export type ICard = {
  id?: string;
  titulo: string;
  conteudo: string;
  lista?: string;
  status: "new" | "normal" | "edit";
};
