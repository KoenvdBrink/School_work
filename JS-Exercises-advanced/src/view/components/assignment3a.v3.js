import { catsService } from '../../service';

export default class Assignment3b {
  constructor() {
    this.cats = [];
    this.getCats();
  }

  /**
   * Retrieves the names of the cats from the CatsService. 
   * Once the API call is done, it assigns a list of cat names to the cats property.
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
