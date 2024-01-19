import './card.css';

export const createCard = ({
  size = 'small',
  title = 'Titulo de la card',
  description = 'Descripion de la card, mencionando un texto más largo'
}) => {
  const cardWrapper = document.createElement('div');
  const card = document.createElement('div');
  const avatar = document.createElement('div');
  const content = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');

  cardWrapper.appendChild(card);
  card.appendChild(avatar);
  card.appendChild(content);
  content.appendChild(span);
  content.appendChild(p);

  span.innerHTML = title;
  span.className = 'text-h4';
  p.className = 'text-body';
  p.innerHTML = description;
  cardWrapper.className = 'wrapper'
  avatar.className = 'card__avatar';
  content.className = 'card__content';

  card.className = [
    'card',
    `card--${size}`
  ].join(' ');

  return cardWrapper;
}