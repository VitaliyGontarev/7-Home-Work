const elements = document.querySelectorAll("li.item");
console.table(`В списке ${elements.length} категории.`);
elements.forEach((element) => {
  console.table(`Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.lastElementChild.children.length}`);
});
