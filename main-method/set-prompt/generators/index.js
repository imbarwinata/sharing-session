/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
import autocompletePrompt from 'inquirer-autocomplete-prompt'
import fuzzy from 'fuzzy'

const DEFAULT_TIMEOUT = Math.random() * 470 + 30;
const FOODS = ['Apple', 'Orange', 'Banana', 'Kiwi', 'Lichi', 'Grapefruit'];

const searchFood = (_answers, input = '') => new Promise((resolve) => {
  setTimeout(() => {
    resolve(fuzzy.filter(input, FOODS).map((el) => el.original));
  }, DEFAULT_TIMEOUT);
});

export default function (plop) {
  plop.setGenerator('test', {
    prompts: [{
      type: 'autocomplete',
      name: 'fruit',
      message: 'What is your favorite fruit?',
      searchText: 'We are searching the internet for you!',
      emptyText: 'Nothing found!',
      default: 'Banana',
      source: searchFood,
      suggestOnly: false,
      pageSize: 4,
      validate: (val) => val ? true : 'Type something!',
    }],
    actions: (data) => {
      console.log('[actions]', data)
      return []
    },
  })
  plop.setPrompt('autocomplete', autocompletePrompt)
}
