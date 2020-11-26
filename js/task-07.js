let fontSizeControlRef = document.getElementById("font-size-control");
let textRef = document.getElementById("text");

fontSizeControlRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
});
