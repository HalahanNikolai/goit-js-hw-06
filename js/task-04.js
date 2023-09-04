let countVal = 0;
const valueRef = document.getElementById('value');
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

const onClickIncrementBtn = (event) => {
    countVal += 1;
    valueRef.textContent = countVal;
};
const onClickDecrementBtn = (event) => {
    countVal -= 1;
    valueRef.textContent = countVal;
};

decBtn.addEventListener('click', onClickDecrementBtn);
incBtn.addEventListener('click', onClickIncrementBtn);