'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector("#ingredients");
const arr = [];
const ingrediendFoods = ingredients.forEach(ingredient => {
  const items = document.createElement("li");
  items.textContent = ingredient;
 listIngredients.appendChild(items);

});

console.log(ingrediendFoods);


