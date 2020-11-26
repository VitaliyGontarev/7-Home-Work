const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", (event) => {
  const inputDataLength = event.target.value.length;
  const userInputLength = Number(inputRef.dataset.length);
  let borderColorAdd;
  if (inputDataLength === 0) {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
  } else if (inputDataLength === userInputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
