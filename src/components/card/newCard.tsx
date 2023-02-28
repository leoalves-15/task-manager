import { ContainButtons, Container, FormChangeTask } from "./styles";
import { FC, useContext } from "react";
import { CardProps, FormProps } from "./cardProps.types";
import { FaRegTimesCircle, FaCheck } from "react-icons/fa";
import { CreateCard, UpdateCard } from "../../services";
import { useForm } from "react-hook-form";
import { ContextAllCards, ContextCards, ContextLogin } from "../../contexts";

const NewCard: FC<CardProps> = () => {
  const { setLoadCardsFlag } = useContext(ContextAllCards);
  const { currentEditCard, cardSatus, currentList, setCardStatus } =
    useContext(ContextCards);
  const { token } = useContext(ContextLogin);

  const { register, handleSubmit } = useForm();

  const createTask = async (data: FormProps) => {
    const resp = await CreateCard(
      {
        titulo: data.titulo,
        conteudo: data.conteudo,
        lista: "toDo",
      },
      token
    );
    if (resp?.id) {
      setLoadCardsFlag((prev) => !prev);
    }
  };

  const changeTask = async (data: FormProps) => {
    await UpdateCard(
      {
        id: currentEditCard?.id,
        titulo: data.titulo,
        conteudo: data.conteudo,
        lista: currentList,
      },
      token
    );
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
      <FormChangeTask onSubmit={handleSubmit(directionFunction)}>
        <input
          defaultValue={currentEditCard?.titulo ? currentEditCard?.titulo : ""}
          required
          placeholder="Título"
          {...register("titulo")}
        />
        <textarea
          defaultValue={
            currentEditCard?.conteudo ? currentEditCard?.conteudo : ""
          }
          required
          placeholder="Conteúdo"
          {...register("conteudo")}
        />
        <ContainButtons>
          <button type="submit">
            <FaCheck color="rgb(166, 247, 80)" />
          </button>
          {cardSatus === "edit" && (
            <>
              <button
                type="button"
                onClick={() => {
                  setCardStatus("view");
                }}
              >
                <FaRegTimesCircle color="rgb(231, 24, 24)" />
              </button>
            </>
          )}
        </ContainButtons>
      </FormChangeTask>
    </Container>
  );
};

export default NewCard;
