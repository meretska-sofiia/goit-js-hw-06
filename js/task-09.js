function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorChangeSpanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body')

buttonEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorChangeSpanEl.innerHTML = bodyEl.style.backgroundColor;
});

  

