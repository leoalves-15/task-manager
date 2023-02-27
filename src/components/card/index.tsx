import { Container, Title, Description, TitleContain } from "./styles";
import { FC, useContext } from "react";
import { CardProps, FormProps } from "./cardProps.types";
import { FaSave, FaPlusCircle, FaTrash, FaEdit } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { useDrag } from "react-dnd";
import { CreateCard } from "../../services";
import { useForm } from "react-hook-form";
import { ContextCards } from "../../contexts";

const Card: FC<CardProps> = (props) => {
  const { card, type } = props;
  const { setAllCards } = useContext(ContextCards);
  const { register, handleSubmit } = useForm();

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

  const createTask = async (data: FormProps) => {
    const resp = await CreateCard({
      titulo: data.titulo,
      conteudo: data.conteudo,
      lista: "todo",
    });
    if (resp?.id) {
      setAllCards((prev) => [...prev, resp]);
    }
  };

  return (
    <Container isDragging={isDragging} isNew={type === "new"} ref={dragRef}>
      {type === "new" ? (
        <>
          <form onSubmit={handleSubmit(createTask)}>
            <input
              defaultValue=""
              required
              placeholder="Título"
              {...register("titulo")}
            />
            <input
              defaultValue=""
              required
              placeholder="Conteúdo"
              {...register("conteudo")}
            />
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
