// ESLint gives an error for the import statement, which is a known issue.
// We can ignore using when we use the Chrome or Safari browser (see https://caniuse.com/mdn-javascript_statements_import_import_assertions_type_json).
// But note that we should currently not write import statements like this.
// The reason is that this import statement is currently in stage 3 of the TC39 process (see https://github.com/tc39/proposal-json-modules and https://github.com/tc39/proposal-import-attributes).
// This means that the import statement is not yet part of the ECMAScript standard and ESLint doesn't support it yet.
// An alternative is to 'fetch' the file and parse it as JSON.
import config from '/assignment.config.json' assert { type: 'json' };

export default class Assignment3a {
  constructor() {
    this.cats = [];
    this.getCats();
  }

  /**
   * Fetches the cats from localstorage and assigns them to the cats property.
   * It then calls the render method.
   * @returns {void}
   */
  getCats() {
    // TODO: implement this method
  }

  render() {
    const ulElement = document.querySelector('ul');
    this.cats.forEach((cat) => {
      const ahrefElement = document.createElement('a');
      ahrefElement.setAttribute('href', `./assignment-3c.html?cat=${cat}`);
      ahrefElement.textContent = cat;

      const liElement = document.createElement('li');
      liElement.appendChild(ahrefElement);
      ulElement.appendChild(liElement);
    });
  }
}
