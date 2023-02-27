export type CardContextType = {
  cardSatus: "new" | "view" | "edit";
  setCardStatus: React.Dispatch<React.SetStateAction<"new" | "view" | "edit">>;
};
