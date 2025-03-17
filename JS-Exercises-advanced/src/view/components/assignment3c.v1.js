// ESLint gives an error for the import statement, which is a known issue.
// We can ignore using when we use the Chrome or Safari browser (see https://caniuse.com/mdn-javascript_statements_import_import_assertions_type_json).
// But note that we should currently not write import statements like this.
// The reason is that this import statement is currently in stage 3 of the TC39 process (see https://github.com/tc39/proposal-json-modules and https://github.com/tc39/proposal-import-attributes).
// This means that the import statement is not yet part of the ECMAScript standard and ESLint doesn't support it yet.
// An alternative is to 'fetch' the file and parse it as JSON.
import config from '/assignment.config.json' assert { type: "json" };

export default class Assignment3c {
  constructor() {
    this.catData = [];
    // get the cat param from the url
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');

    this.getCat(cat);
  }

  getCat(cat) {
    this.catData.image_link="/images/Smiley.svg.png";
    this.catData.name="Smiley";
    this.catData.origin="FEP1";
    this.render();
  }

  render() {
    const imgElement = document.querySelector('img');
    imgElement.setAttribute('src', this.catData.image_link);
    imgElement.setAttribute('alt', this.catData.name);

    const captionElement = document.querySelector('figcaption');
    captionElement.textContent = this.catData.name;

    const catInfoElement = document.querySelector('#catinfo');
    catInfoElement.textContent = `Kat afkomstig uit ${this.catData.origin}`;
  }
}