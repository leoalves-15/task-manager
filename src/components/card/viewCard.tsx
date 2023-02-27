import { Container, Title, Description, TitleContain } from "./styles";
import { FC, useContext } from "react";
import { CardProps } from "./cardProps.types";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDrag } from "react-dnd";
import { DeleteCard } from "../../services";
import { ContextAllCards, ContextCards } from "../../contexts";

const ViewCard: FC<CardProps> = (props) => {
  const { card } = props;
  const { setLoadCardsFlag } = useContext(ContextAllCards);
  const { setCardStatus, setCurrentEditCard, setCurrentList } = useContext(ContextCards);

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

  const deleteCard = async () => {
    await DeleteCard(card.id);
    setLoadCardsFlag((prev) => !prev);
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
      <button
        type="button"
        onClick={() => {
          setCardStatus("edit");
          setCurrentList(card.lista);
          setCurrentEditCard(card);
        }}
      >
        <FaEdit />
      </button>
    </Container>
  );
};

export default ViewCard;
