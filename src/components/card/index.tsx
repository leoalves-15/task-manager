import { Container, Title, Description, TitleContain } from "./styles";
import { FC } from "react";
import { CardProps } from "./cardProps.types";
import { FaSave, FaPlusCircle, FaTrash, FaEdit } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { useDrag } from "react-dnd";
import { CreateCard } from "../../services";

const Card: FC<CardProps> = (props) => {
  const { card, type } = props;

  const [{ isDragging }, dragRef] = useDrag({
    type: type === "new" ? "" : "CARD",
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

  const createTask = () => {
    console.log("teste");
    CreateCard({ titulo: "teste esse", conteudo: "content", lista: "todo" });
  };

  return (
    <Container isDragging={isDragging} isNew={type === "new"} ref={dragRef}>
      {type === "new" ? (
        <>
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              createTask();
            }}
          >
            <input type="text" />
            <input type="text" />
            <button type="submit">
              <FaPlusCircle />
            </button>
          </form>
        </>
      ) : (
        <>
          <TitleContain>
            <Title> {card?.titulo}</Title>
          </TitleContain>
          <Description>{card?.conteudo}</Description>
        </>
      )}
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
