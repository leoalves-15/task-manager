import { Container } from "./styles";
import Card from "../card";
import { ColumnProps } from "./columnProps.types";
import { FC, useContext } from "react";
import { useDrop } from "react-dnd";
import { ICard } from "../../model/Card.type";
import { UpdateCard } from "../../services";
import { ContextCards } from "../../contexts";

const Column: FC<ColumnProps> = (props) => {
  const { title, cards, listId } = props;
  const { allCards, setAllCards } = useContext(ContextCards);

  const [, dropRef] = useDrop({
    accept: listId !== "new" ? "CARD" : "",
    drop(item: ICard, monitor) {
      item.lista = listId;
      let allCardsAux = allCards;
      allCardsAux = allCardsAux.filter((card) => card.id !== item.id);
      allCardsAux.push(item);
      setAllCards(allCardsAux);
      UpdateCard({ ...item, lista: listId });
    },
  });

  return (
    <Container ref={dropRef}>
      <h2>{title}</h2>
      <ul>
        {listId === "new" ? (
          <>
            <Card
              type="new"
              card={{
                id: "string1",
                titulo: "new",
                conteudo: "string",
                status: "new",
              }}
            />
          </>
        ) : (
          <>
            {cards?.map((item) => {
              return (
                <>
                  <Card type="normal" card={item} />
                </>
              );
            })}
          </>
        )}
      </ul>
    </Container>
  );
};

export default Column;
