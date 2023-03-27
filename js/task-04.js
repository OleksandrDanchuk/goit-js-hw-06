let counterValue = 0;

const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
const elementVelue = document.querySelector('#value');

decrButton.addEventListener('click', () => {
  counterValue -= 1;
  elementVelue.textContent = counterValue;
});

incrButton.addEventListener('click', () => {
  counterValue += 1;
  elementVelue.textContent = counterValue;
});
