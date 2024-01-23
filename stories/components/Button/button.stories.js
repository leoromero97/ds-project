import { createButton } from "./button";
import { withActions } from '@storybook/addon-actions/decorator';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

export default {
  title: "Design System/Atoms/Button",
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'soft',
          value: '#fef2f2',
        },
      ],
    },
  },
  decorators: [withActions],
  argTypes: {
    text: {
      name: "text",
      control: {
        type: "text",
      },
    },
    type: {
      name: "type",
      options: ["fill", "outline", "ghost"],
      control: {
        type: "radio",
      },
    },
    isFull: {
      name: "isFull",
      control: {
        type: "boolean",
      },
    },
    onClick: {
      description: 'Evento click',
      action: 'clicked'
    },
  },
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


/* Pruebas de interacción */
Fill.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)

  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByText('Text'))

}