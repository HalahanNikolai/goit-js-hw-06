const items = document.querySelectorAll('.item');
[].forEach.call(items, (element) => {
    const titles = element.querySelector('h2').innerHTML;
    const length = element.querySelectorAll('li').length;
    console.log(`Category: ${titles}`);
    console.log(`Elements: ${length}`);
});

