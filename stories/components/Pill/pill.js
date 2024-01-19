import './pill.css'

export const createPill = ({
  text = "Texto pill",
  variant = "blue",
}) => {
  const pill = document.createElement('div');
  pill.innerHTML = text;
  pill.className = [
    'pill',
    `pill--color--${variant}`,
  ].join(' ');

  return pill;
};
