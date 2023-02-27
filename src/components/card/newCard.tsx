import { Container } from "./styles";
import { FC, useContext } from "react";
import { CardProps, FormProps } from "./cardProps.types";
import { FaPlusCircle } from "react-icons/fa";
import { CreateCard, UpdateCard } from "../../services";
import { useForm } from "react-hook-form";
import { ContextCards } from "../../contexts";

const NewCard: FC<CardProps> = (props) => {
  const { type } = props;
  const { setAllCards } = useContext(ContextCards);
  const { register, handleSubmit } = useForm();

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

  const changeTask = async (data: FormProps) => {
    const resp = await UpdateCard({
      titulo: data.titulo,
      conteudo: data.conteudo,
      lista: "todo",
    });
    // if (resp?.id) {
    //   setAllCards((prev) => [...prev, resp]);
    // }
  };

  const onSubmit = async (data: FormProps) => {
    if (type === "new") {
      createTask(data);
    } else {
      changeTask(data);
    }
  };

  return (
    <Container isDragging={false} isNew>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </Container>
  );
};

export default NewCard;
