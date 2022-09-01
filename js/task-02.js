const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = (nameItem) => {
  const ingredientsListItems = document.createElement('li');
  ingredientsListItems.textContent = nameItem;
  ingredientsListItems.classList.add('item');
 
  return ingredientsListItems
}

const ingredientsListArr = ingredients.map(el => makeIngredientsList(el));

ingredientsListEl.append(...ingredientsListArr);

