function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const arr = [];
  let startWidth = 30;
  let startHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement('div')
    
    newEl.style.width = `${startWidth}px`;
    newEl.style.height = `${startHeight}px`;
    newEl.style.border = `1px solid ${getRandomHexColor()}`;

    startWidth += 10;
    startHeight += 10;
    arr.push(newEl)

  }
      containerEl.append(...arr);
}

function destroyBoxes() {
   containerEl.innerHTML = '';
}

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls input');
const containerEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', () => {
  containerEl.innerHTML = '';
  createBoxes(Number(inputEl.value))
})

destroyBtnEl.addEventListener('click', destroyBoxes)



