import { Container, Title, Description, TitleContain } from "./styles";
import { FC } from "react";
import { CardProps } from "./cardProps.types";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDrag } from "react-dnd";

const ViewCard: FC<CardProps> = (props) => {
  const { card } = props;

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: {
      id: card.id,
      titulo: card.titulo,
      conteudo: card.conteudo,
      lista: card.lista,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container isDragging={isDragging} isNew={false} ref={dragRef}>
      <TitleContain>
        <Title> {card?.titulo}</Title>
      </TitleContain>
      <Description>{card?.conteudo}</Description>
      <FaTrash />
      <FaEdit />
    </Container>
  );
};

export default ViewCard;
