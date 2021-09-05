import { useEffect } from '@storybook/client-api';

export const createBody = ({ backgroundColor }) => {
  const element = document.createElement('div');
  element.className = 'container bg-white';
  element.innerText = 'test body';

  useEffect(() => {
    if (backgroundColor) {
      element.style.backgroundColor = backgroundColor;
    }
  });

  return element;
};