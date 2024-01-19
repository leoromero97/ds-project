import { createButton } from "./button";

export default {
  title: "Design System/Atoms/Button",
};

const Template = ({ text, ...args }) => {
  return createButton({ text, ...args });
};

export const Fill = Template.bind({});
Fill.args = {
  text: "Texto del boton",
  type: "fill",
};

export const Outline = Template.bind({});
Outline.args = {
  text: "Texto del boton",
  type: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  text: "Texto del boton",
  type: "ghost",
};
