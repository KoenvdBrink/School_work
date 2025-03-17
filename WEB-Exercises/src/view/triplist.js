import { tripService } from '../service';
import Trip from '../model/Trip';
import { getIntroText } from '../utils/text-utils';


// filters object set by the filter region on the site.
// in case the filterOnRating is set to true there should also be a property filterOnMinimumRating
// that tells us the minimum rating number to be filtered on.
const filters = {
  filterOnRating: false,
  filterOnMinimumRating: 0,
};

/**
 * This function should load the addTrip page with the trip title as key searchparam.
 * @param {Event} event 
 */
function editTrip(event) {
}

/**
 * This function uses extracts the trip to be removed from the event, identified by the data attribute provided in the
 * target of the event, using the deleteTrip method of the tripService.
 * Once the deleteTrip method is fullfilled the dialog should be closed and the render function should be called.
 * @param {Event} event 
 */
function removeTrip(event) {
}

/**
 * This function will fill the in the html defined dialog with values for the trip to be shown.
 * The parentNode of the element that triggered the call of this function should have an id attribute that holds the
 * key value of the trip to be shown. Using this key value the tripService can provide this function with all the trip
 * information to be shown.
 * 
 * @param {Event} event 
 */
function showDialog(event) {
}

/**
 * This function renders a single trip using the HTML template given by #trip-template and returns the
 * rendered html template.
 * Note that the description field that should hold the trip.review should only show up to 50 characters,
 * by using the getIntroText util function.
 * 
 * @param {Trip} trip 
 * @returns {Node}
 */
function renderTrip(trip) {
    // render single trip using the html template
}

/**
 * This function retrieves the trips from the service and renders them in the .trips element.
 * The function should apply the filters set by the user to reduce the list of trips.
 * To break down the complexity of the rendering this function uses the renderTrip function to render a single Trip.
 */
function render() {
}

const ratingFilterElement = document.querySelector('#ratingFilter');
const ratingRangeFilterElement = document.querySelector('#ratingRangeFilter');

/**
 * This function should be triggered by changes to the filter checkbox or slider and
 * should set the filters object according to the view settings and enable/disable the slider based on the checkbox.
 * Because the changes of the filter should have impact on the list of trips to be shown the render function
 * should be called again.
 * 
 * @param {Event} event 
 */
function ratingFilterChanged(event) {
}

// add the listeners on the checkbox and slider to trigger the call of the ratingFilterChanged function

render();