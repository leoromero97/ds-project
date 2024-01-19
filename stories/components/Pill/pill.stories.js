import { createPill } from './pill';

export default {
  title: 'Design System/Atoms/Pill'
}

const Template = ({ text, variant, ...args} ) => {
  return createPill({ text, variant, ...args });
} 

export const Default = Template.bind({});
Default.args = {
  text: 'Habilitado',
  variant: 'blue',
};
