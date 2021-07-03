'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulList = document.getElementById("ingredients");
const ingrediendFoods = ingredients.forEach(ingredient => {
  const items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);

});

console.log(ingrediendFoods);








