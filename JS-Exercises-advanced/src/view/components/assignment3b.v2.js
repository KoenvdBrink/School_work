// ESLint gives an error for the import statement, which is a known issue.
// We can ignore using when we use the Chrome or Safari browser (see https://caniuse.com/mdn-javascript_statements_import_import_assertions_type_json).
// But note that we should currently not write import statements like this.
// The reason is that this import statement is currently in stage 3 of the TC39 process (see https://github.com/tc39/proposal-json-modules and https://github.com/tc39/proposal-import-attributes).
// This means that the import statement is not yet part of the ECMAScript standard and ESLint doesn't support it yet.
// An alternative is to 'fetch' the file and parse it as JSON.
import config from '/assignment.config.json' assert { type: 'json' };

export default class Assignment3b {
  constructor() {
    this.nrOfCats = 0;
    this.getNumberOfCats();
  }

  /**
   * Fetches the cats from the API. 
   * Once the API call is done, it determines the number of cats and sets the nrOfCats property.
   * It then calls the render method.
   * @returns {void}
   */
  getNumberOfCats() {
    const param = 'min_weight=1';
    const url = `https://api.api-ninjas.com/v1/cats?${param}`;
    // TODO: implement this method
  }

  render() {
    const pElement = document.querySelector('p');
    pElement.textContent = `There are ${this.nrOfCats} cats in the list.`;
  }
}
