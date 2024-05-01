const categoriesAmount = document.querySelectorAll('#categories li.item');

console.log(`Number of categories: ${categoriesAmount.length}`);

categoriesAmount.forEach(category => {
  const categoryName = category.querySelector('h2');
  console.log(`Category: ${categoryName.textContent}`);

  const categoriesItems = category.querySelectorAll('ul>li');
  console.log(`Elements: ${categoriesItems.length}`);
});
