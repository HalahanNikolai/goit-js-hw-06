
const elemUl = document.getElementById('categories').children.length;
console.log(`Number of categories: ${elemUl}`);

const arrayTitlesCategoriesRef = document.querySelectorAll('h2');
arrayTitlesCategoriesRef.forEach((title) => {
    console.log('Category:', title.textContent);
    console.log('Elements:', title.nextElementSibling.children.length);
});