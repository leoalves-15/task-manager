import { Container, Title, Description, TitleContain } from "./styles";
import { FC } from "react";
import { CardProps } from "./cardProps.types";
import { FaSave, FaPlusCircle, FaTrash, FaEdit } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { useDrag } from "react-dnd";

const Card: FC<CardProps> = (props) => {
  const { card, type } = props;

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container isDragging={isDragging} ref={dragRef}>
      <TitleContain>
        <Title> {card?.title}</Title>
      </TitleContain>
      <Description>{card?.description}</Description>
      {type === "new" ? (
        <>
          <FaPlusCircle />
        </>
      ) : null}
      {type === "edit" ? (
        <>
          <FaSave /> <CgUnavailable />
        </>
      ) : null}
      {type === "normal" ? (
        <>
          <FaTrash />
          <FaEdit />
        </>
      ) : null}
    </Container>
  );
};

export default Card;
