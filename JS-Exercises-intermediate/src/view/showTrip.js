import { tripController } from '../controller';
import Trip from '../model/Trip';

let trips = [];

function init() {
  trips = tripController.getTrips();
  trips.forEach((trip)=> {
    render(trip);
  });
}

/**
 * for now this function returns the html code to be displayed.
 * In the module WEB of this subject we will focus on how to render the output on the browser.
 * @param { Trip } trip 
 * @returns { string } string that holds html code to be displayed.
 * the string should look "<h2>{trip.title}</h2><p><strong>{short intro trip.review of max 30 characters}...</strong></p>"
 * 
 * tip: In JS01 there was an exercise to shorten a string to get this intro text. The solution of that exercise can be
 * found in the utils.js file within the utils directory. Use this function to generate the intro text.
 */
function render(trip) {
}

export {
  render,
}
