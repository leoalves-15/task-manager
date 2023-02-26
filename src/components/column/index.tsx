import { Container } from "./styles";
import Card from "../card";
import { ColumnProps } from "./columnProps.types";
import { FC } from "react";
import { useDrop } from "react-dnd";
import { ICard } from "../../model/Card.type";

const Column: FC<ColumnProps> = (props) => {
  const { title, cards } = props;

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: ICard, monitor) {
      //item é o card arrastado
      // console.log(item.id); aqui vai a função de mudar o card de coluna
    },
  });

  return (
    <Container ref={dropRef}>
      <h2>{title}</h2>
      <ul>
        {cards?.map(() => {
          return (
            <>
              <Card
                type="normal"
                card={{
                  id: "string1",
                  title: "string",
                  description: "string",
                  status: "done",
                }}
              />
            </>
          );
        })}
      </ul>
    </Container>
  );
};

export default Column;
