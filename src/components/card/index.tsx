import { Container, Title, Description, TitleContain } from "./styles";
import { CardProps } from "./Card.type";
import { FC } from "react";

const Card: FC<CardProps> = (props) => {
  const { title, description, status } = props;
  return (
    <Container>
      <TitleContain>
        <Title> {title}</Title>
      </TitleContain>
      <Description>{description}</Description>
      {status === "new" ? <>new</> : null}
      {status === "edit" ? <>edit</> : null}
      {status === "normal" ? <>normal</> : null}
    </Container>
  );
};

export default Card;
