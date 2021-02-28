import colors from './colors.js';

// Напиши скрипт, который после нажатия кнопки Start,
// раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const refs = {
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
  bodyRef: document.querySelector('body')
};

let currBackgrColor;
let intervalId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitcher = () => {
  const min = 0;
  const max = colors.length - 1;

  const randomValue = randomIntegerFromInterval(min, max);

  currBackgrColor = colors[randomValue];

  refs.bodyRef.style.backgroundColor = `${currBackgrColor}`;
};

const stopChangeBackgrColor = () => {
  clearInterval(intervalId);
  refs.bodyRef.style.backgroundColor = `${currBackgrColor}`;
  isActive = false;
};

const changeBackgrColor = function () {
  if (isActive) {
    return;
  } else {
    isActive = true;
  }
  
  intervalId = setInterval(colorSwitcher, 1000);
  
};

refs.startBtnRef.addEventListener('click', changeBackgrColor);
refs.stopBtnRef.addEventListener('click', stopChangeBackgrColor);

