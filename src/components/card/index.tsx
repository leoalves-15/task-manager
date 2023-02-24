import "./App.css";
import { Container, Title, Description } from "./styles";
import { CardProps } from "./Card.type";
import { FC } from "react";

const Card: FC<CardProps> = (props) => {
  const { title, description } = props;
  return (
    <Container>
      <Title> {title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
