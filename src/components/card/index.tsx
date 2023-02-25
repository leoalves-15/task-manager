import { Container, Title, Description, TitleContain } from "./styles";
import { CardProps } from "./Card.type";
import { FC } from "react";
import { FaSave, FaPlusCircle, FaTrash, FaEdit } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";

const Card: FC<CardProps> = (props) => {
  const { title, description, status } = props;
  return (
    <Container>
      <TitleContain>
        <Title> {title}</Title>
      </TitleContain>
      <Description>{description}</Description>
      {status === "new" ? (
        <>
          <FaPlusCircle />
        </>
      ) : null}
      {status === "edit" ? (
        <>
          <FaSave /> <CgUnavailable />
        </>
      ) : null}
      {status === "normal" ? (
        <>
          <FaTrash />
          <FaEdit />
        </>
      ) : null}
    </Container>
  );
};

export default Card;
