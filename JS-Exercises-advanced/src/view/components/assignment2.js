/*
  Assignment 2: Fetching the terrier breeds
  -----------------------------------------
  1. Implement the fetchAssignemnt2 method. The method is supposed to fetch a list of breeds from the dog.ceo API
     Once the promise is resolved, the breeds of terriers is set to the class property and the render method is called.
     To verify that that the method is working, you can run the tests by running the following command in the terminal:
      npm run dev
     Open this page in the browser and check that the list of terrier breeds is displayed, starting with 'american' and
     ending with 'yorkshire'.

     TIP: Open the API URL in the browser to see the response from the API. You can also use the network tab in the
          developer tools to see the response.
*/

export default class FetchAssignment2 {
  constructor() {
    this.breeds = [];
    this.render();
    this.fetchAssignemnt2();
  }

  /**
   * Fetches a random dog image from the dog.ceo API
   * once the promise is resolved, the image is set to the
   * class property and the render method is called
   * 
   * @returns {void}
   * 
   */
  fetchAssignemnt2() {
    const URL = 'https://dog.ceo/api/breeds/list/all';
    // TODO: implement this method
  }

  render() {
    const breedsElement = document.querySelector('#breeds');
    breedsElement.innerHTML = JSON.stringify(this.breeds);
  }
}
