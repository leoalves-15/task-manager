import { Container } from "./styles";
import Card from "../card";
import { ColumnProps } from "./columnProps.types";
import { FC, useContext } from "react";
import { useDrop } from "react-dnd";
import { ICard } from "../../model/Card.type";
import { UpdateCard } from "../../services";
import { ContextAllCards, CardsProvider } from "../../contexts";

const Column: FC<ColumnProps> = (props) => {
  const { title, cards, listId } = props;
  const { setLoadCardsFlag } = useContext(ContextAllCards);

  const [, dropRef] = useDrop({
    accept: listId !== "new" ? "CARD" : "",
    drop(item: ICard, monitor) {
      setLoadCardsFlag((prev) => !prev);
      UpdateCard({ ...item, lista: listId });
    },
  });

  return (
    <Container ref={dropRef}>
      <h2>{title}</h2>
      <ul>
        {listId === "new" ? (
          <CardsProvider>
            <Card
              isNew
              card={{
                id: "",
                titulo: "",
                conteudo: "",
                lista: "toDo",
              }}
            />
          </CardsProvider>
        ) : (
          <>
            {cards?.map((item) => {
              return (
                <CardsProvider>
                  <Card card={item} />
                </CardsProvider>
              );
            })}
          </>
        )}
      </ul>
    </Container>
  );
};

export default Column;
