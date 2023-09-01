const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsAll = document.querySelector('#ingredients');
const newArr = ingredients.map((el, ind, arr) => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  return item;
});

ingredientsAll.append(...newArr);
//* ********************************************
