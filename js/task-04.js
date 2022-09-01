
let counterValue = 0;
const valueEl = document.querySelector('#value');
const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');

btnDecrementEl.addEventListener('click', () => {
    counterValue -= 1
    valueEl.innerHTML = counterValue;
});

btnIncrementEl.addEventListener('click', () => {
    counterValue += 1
    valueEl.innerHTML = counterValue;
})

