import { createCard } from "./Card";

export default {
  title: "Design System/Atoms/Card",
};

const Template = ({ text, ...args }) => {
  return createCard({ text, ...args });
};

export const Default = Template.bind({});
Default.args = {
  title: "Titulo",
  description: "Descripcion larga de la Card",
};
