import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";

import Column from ".";

export default {
  title: "Components/Column",
  component: Column,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <Column {...args} />
  </DndProvider>
);

export const ColumnNew = Template.bind({});
ColumnNew.args = {
  cards: [
    { titulo: "teste", conteudo: "teste", lista: "new" },
    { titulo: "teste", conteudo: "teste", lista: "new" },
  ],
  title: "New",
  listId: "new",
};

export const ColumnDoing = Template.bind({});
ColumnDoing.args = {
  cards: [
    { titulo: "teste", conteudo: "teste", lista: "doing" },
    { titulo: "teste", conteudo: "teste", lista: "doing" },
  ],
  title: "Doing",
  listId: "doing",
};

export const ColumnToDo = Template.bind({});
ColumnToDo.args = {
  cards: [
    { titulo: "teste", conteudo: "teste", lista: "toDo" },
    { titulo: "teste", conteudo: "teste", lista: "toDo" },
  ],
  title: "To do",
  listId: "toDo",
};

export const ColumnDone = Template.bind({});
ColumnDone.args = {
  cards: [
    { titulo: "teste", conteudo: "teste", lista: "done" },
    { titulo: "teste", conteudo: "teste", lista: "done" },
  ],
  title: "Done",
  listId: "done",
};