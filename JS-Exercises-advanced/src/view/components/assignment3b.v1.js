export default class Assignment3b {
  constructor() {
    this.nrOfCats = 0;
    this.getNumberOfCats();
  }

  /**
   * Fetches the cats from localstorage and assigns the length of the array to the nrOfCats property.
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
