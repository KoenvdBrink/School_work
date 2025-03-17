// ESLint gives an error for the import statement, which is a known issue.
// We can ignore using when we use the Chrome or Safari browser (see https://caniuse.com/mdn-javascript_statements_import_import_assertions_type_json).
// But note that we should currently not write import statements like this.
// The reason is that this import statement is currently in stage 3 of the TC39 process (see https://github.com/tc39/proposal-json-modules and https://github.com/tc39/proposal-import-attributes).
// This means that the import statement is not yet part of the ECMAScript standard and ESLint doesn't support it yet.
// An alternative is to 'fetch' the file and parse it as JSON.
import config from '/assignment.config.json' assert { type: 'json' };

class CatsService {
  /**
   * Fetches the cats from the API. 
   * Once the API call is done, it returns a promise that resolves to a list of cat names.
   * @returns {Promise<string[]>} A promise that resolves to a list of cat names.
   */
  getCatNames() {
    // TODO: Implement this method.
  }

  /**
   * Fetches the cat data for the given catname from the API. 
   * Once the API call is done, it returns extracts the first Object of the response and
   * returns it as a fullfill the promise the method returns.
   * @param {string} catname
   * @returns {Promise<JSON Object>}
   */
  getCat(catname) {
    // TODO: Implement this method.
  }
}

const catsService = new CatsService();
export default catsService;
