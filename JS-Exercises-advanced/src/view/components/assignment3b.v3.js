import { catsService } from '../../service';

export default class Assignment3b {
  constructor() {
    this.nrOfCats = 0;
    this.getNumberOfCats();
  }

  /**
   * Retrieves the name of the cats from the CatsService. 
   * Once the API call is done, it determines the number of cats and sets the nrOfCats property.
   * It then calls the render method.
   * @returns {void}
   */
  getNumberOfCats() {
    // TODO: implement this method
  }

  render() {
    const pElement = document.querySelector('p');
    pElement.textContent = `There are ${this.nrOfCats} cats in the list.`;
  }
}
