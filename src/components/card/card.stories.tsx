import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from ".";

export default {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const EditCard = Template.bind({});
EditCard.args = {
  card: { titulo: "teste", conteudo: "teste", status: "edit" },
  type: "edit",
};

export const NormalCard = Template.bind({});
NormalCard.args = {
  card: { titulo: "teste", conteudo: "teste", status: "normal" },
  type: "normal",
};

export const NewCard = Template.bind({});
NewCard.args = {
  card: { titulo: "teste", conteudo: "teste", status: "new" },
  type: "new",
};
