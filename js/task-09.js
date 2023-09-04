function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//! ----------------------------------------------------------
const page = document.querySelector('body')
const btn = document.querySelector('button.change-color')
const colorVal = document.querySelector('span.color')
btn.addEventListener('click', e => {
  let color = getRandomHexColor();
  page.style.backgroundColor = color;
  colorVal.textContent = color;
})