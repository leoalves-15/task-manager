import { Container } from "./styles";
import { FC, useContext } from "react";
import { CardProps, FormProps } from "./cardProps.types";
import { FaPlusCircle, FaRegTimesCircle, FaCheck } from "react-icons/fa";
import { CreateCard, UpdateCard } from "../../services";
import { useForm } from "react-hook-form";
import { ContextAllCards, ContextCards } from "../../contexts";

const NewCard: FC<CardProps> = () => {
  const { setLoadCardsFlag } = useContext(ContextAllCards);
  const { currentEditCard, cardSatus, currentList, setCardStatus } =
    useContext(ContextCards);

  const { register, handleSubmit } = useForm();

  const createTask = async (data: FormProps) => {
    const resp = await CreateCard({
      titulo: data.titulo,
      conteudo: data.conteudo,
      lista: "toDo",
    });
    if (resp?.id) {
      setLoadCardsFlag((prev) => !prev);
    }
  };

  const changeTask = async (data: FormProps) => {
     await UpdateCard({
      id: currentEditCard?.id,
      titulo: data.titulo,
      conteudo: data.conteudo,
      lista: currentList,
    });
    setCardStatus("view");

    setLoadCardsFlag((prev) => !prev);
  };

  const directionFunction = async (data: FormProps) => {
    if (cardSatus === "new") {
      createTask(data);
    } else {
      changeTask(data);
    }
  };

  return (
    <Container isDragging={false} isNew>
      <form onSubmit={handleSubmit(directionFunction)}>
        <input
          defaultValue={currentEditCard?.titulo ? currentEditCard?.titulo : ""}
          required
          placeholder="Título"
          {...register("titulo")}
        />
        <input
          defaultValue={
            currentEditCard?.conteudo ? currentEditCard?.conteudo : ""
          }
          required
          placeholder="Conteúdo"
          {...register("conteudo")}
        />
        {cardSatus === "edit" ? (
          <>
            <button type="submit">
              <FaCheck />
            </button>
            <button
              type="button"
              onClick={() => {
                setCardStatus("view");
              }}
            >
              <FaRegTimesCircle />
            </button>
          </>
        ) : (
          <button type="submit">
            <FaPlusCircle />
          </button>
        )}
      </form>
    </Container>
  );
};

export default NewCard;
