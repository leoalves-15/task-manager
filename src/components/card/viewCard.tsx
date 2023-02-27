import { Container, Title, Description, TitleContain } from "./styles";
import { FC } from "react";
import { CardProps } from "./cardProps.types";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDrag } from "react-dnd";
import { DeleteCard } from "../../services";

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

  const deleteCard = async ()  => {
    const resp = await DeleteCard(card.id);
    console.log(resp)
  };

  return (
    <Container isDragging={isDragging} isNew={false} ref={dragRef}>
      <TitleContain>
        <Title> {card?.titulo}</Title>
      </TitleContain>
      <Description>{card?.conteudo}</Description>
      <button
        type="button"
        onClick={() => {
          deleteCard();
        }}
      >
        <FaTrash />
      </button>
      <FaEdit />
    </Container>
  );
};

export default ViewCard;
