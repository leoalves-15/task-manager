import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";

import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <Header />
  </DndProvider>
);

export const HeaderHome = Template.bind({});
HeaderHome.args = {};
