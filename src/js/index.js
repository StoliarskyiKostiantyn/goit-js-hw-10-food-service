import markupText from '../templates/markup.hbs';
import menuItem from '../menu.json';
console.log(markupText);
console.log(menuItem);
const menuDiv = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuItem);
menuDiv.insertAdjacentHTML('beforeend', menuMarkup);
function createMenuMarkup(menuItem) {
  return menuItem.map(markupText).join('');
}
