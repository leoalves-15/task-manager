import { Container, ColumnTitle } from "./styles";
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
      <ColumnTitle>{title}</ColumnTitle>
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
                <CardsProvider key={item.id}>
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
