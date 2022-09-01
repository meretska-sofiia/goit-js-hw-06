const listItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemsEl.length}`);

listItemsEl.forEach(el => {
    const categoriesListItems = el.querySelectorAll('li');
    const categoriesTitleEl = el.querySelector('h2')
    console.log(`Category: ${categoriesTitleEl.textContent}`);
    console.log(`Elements: ${categoriesListItems.length}`);
})

