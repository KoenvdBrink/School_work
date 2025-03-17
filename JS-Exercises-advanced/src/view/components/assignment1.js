/*
  Assignment 1: Fetching a random dog image
  -----------------------------------------
  1. Implement the fetchAssignemnt1 method. The method is supposed to fetch a random dog image from the dog.ceo API
     Once the promise is resolved, the image is set to the class property and the render method is called.
     To verify that that the method is working, you can run the tests by running the following command in the terminal:
      npm run dev
     Open this page in the browser and check that an image of a dog is displayed.
     
     TIP: Open the API URL in the browser to see the response from the API. You can also use the network tab in the
          developer tools to see the response.
*/

export default class FetchAssignment1 {
  constructor() {
    this.image = '../images/Smiley.svg.png';
    // this.render();
    this.fetchAssignemnt1();
  }

  /**
   * Fetches a random dog image from the dog.ceo API
   * once the promise is resolved, the image is set to the
   * class property and the render method is called
   * 
   * @returns {void}
   * 
   */
  fetchAssignemnt1() {
    const URL = 'https://dog.ceo/api/breeds/image/random';
    // TODO: implement this method
  }

  render() {
    const img = document.querySelector('figure');
    const image = document.createElement('img');
    image.setAttribute('src', this.image);
    img.appendChild(image);
  }
}
