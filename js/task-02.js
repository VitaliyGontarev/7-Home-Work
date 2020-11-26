const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ancestorRef = document.querySelector("ul.ingredients");

let ingredientItemRef;
const createIngredientItem = (ingredient) => {
  ingredientItemRef = document.createElement("li");
  ingredientItemRef.textContent = ingredient;
  console.log(ingredientItemRef);
  return ingredientItemRef;
};
const everyIngredients = ingredients.map((ingredient) =>
  createIngredientItem(ingredient)
);
ancestorRef.append(...everyIngredients);
