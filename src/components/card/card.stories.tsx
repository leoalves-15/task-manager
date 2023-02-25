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
  title: "teste",
  description: "teste",
  status: "edit",
};

export const NormalCard = Template.bind({});
NormalCard.args = {
  title: "teste",
  description: "teste",
  status: "normal",
};

export const NewCard = Template.bind({});
NewCard.args = {
  title: "teste",
  description: "teste",
  status: "new",
};
