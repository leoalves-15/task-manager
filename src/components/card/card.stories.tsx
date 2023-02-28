import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";

import Card from ".";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <DndProvider backend={HTML5Backend}>
    {" "}
    <Card {...args} />{" "}
  </DndProvider>
);

export const EditCard = Template.bind({});
EditCard.args = {
  card: { titulo: "teste", conteudo: "teste", lista: "toDo" },
  isNew: true,
};

export const NormalCard = Template.bind({});
NormalCard.args = {
  card: { titulo: "teste", conteudo: "teste", lista: "toDo" },
};

export const NewCard = Template.bind({});
NewCard.args = {
  card: { titulo: "teste", conteudo: "teste", lista: "toDo" },
  isNew: true,
};
