const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (event.target.value.charAt(0) === " ") {
    event.target.value = "";
  }
  outputRef.textContent =
    event.target.value === "" ? `незнакомец` : event.target.value;
});
