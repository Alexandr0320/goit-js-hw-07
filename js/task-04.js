'use strict';

const counterBtn = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 counterBtn.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  counterBtn.span.textContent = counterValue;
};

counterBtn.sub.addEventListener("click", increment);
counterBtn.add.addEventListener("click", decrement);