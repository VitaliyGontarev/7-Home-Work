const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue = counterValue + 1;
  return (counter.textContent = counterValue);
};

const decrement = () => {
  counterValue > 0 ? (counterValue = counterValue - 1) : (counterValue = 0);
  return (counter.textContent = counterValue);
};
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
