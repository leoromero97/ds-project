import './button.css'

export const createButton = ({
  isFull = false,
  text = "Texto",
  type = "fill",
  onClick
}) => {
  const button = document.createElement('button');
  button.type = 'submit';
  button.role = 'button';
  button.innerHTML = text;
  button.className = [
    'button',
    `button--type-${type}`,
    `button--isFull-${isFull}`,
  ].join(' ');
  button.addEventListener('click', onClick)
  return button;
};
