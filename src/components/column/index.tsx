import { Container } from "./styles";
import Card from "../card";
import { ColumnProps } from "./columnProps.types";
import { FC } from "react";

const Column: FC<ColumnProps> = (props) => {
  const { title } = props;
  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        <Card
          type="normal"
          card={{
            id: "string",
            title: "string",
            description: "string",
            status: "done",
          }}
        />
        <Card
          type="normal"
          card={{
            id: "string",
            title: "string",
            description: "string",
            status: "done",
          }}
        />
        <Card
          type="normal"
          card={{
            id: "string",
            title: "string",
            description: "string",
            status: "done",
          }}
        />
      </ul>
    </Container>
  );
};

export default Column;
