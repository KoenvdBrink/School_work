import { catsService } from '../../service';

export default class Assignment3c {
  constructor() {
    this.catData = [];
    // get the cat param from the url
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');

    this.getCat(cat);
  }

  /**
   * This function retrieves cat data from CatsService. Once the API call is done, 
   * it assigns the cat data to the catData property and calls the render method.
   * 
   * @param {string} cat
   * @returns {void}
   */
  getCat(cat) {
    // TODO: implement this method
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
