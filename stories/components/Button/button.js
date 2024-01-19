import './button.css'

export const createButton = ({
  withIcon = false,
  text = "Texto",
  type = "fill"
}) => {
  const button = document.createElement('button');
  button.type = 'submit';
  button.role = 'button';
  button.innerHTML = text;
  button.className = [
    'button',
    `button--type-${type}`,
  ].join(' ');

  return button;
};
