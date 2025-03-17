import Trip from '../model/Trip';
import { tripService } from '../service';

const form = document.querySelector('form');

/**
 * This function will show an error message within the section defined by the class attribute errormsg.
 * The error message to be shown depends on the error. The default error message is 'Oeps, er is iets mis gegaan !'.
 * But in case the error.message holds a value of 409 the errormsg should be 'Er bestaat al een trip met deze titel !' and
 * a class value of 'error' should be added to the #key input field.
 * 
 * @param {Error} error 
 */
function showError(error) {
}

/**
 * There might be an error that was shown by the showError function. But we want this error to disappear as soon as the user
 * tries to correct the error by making changes to the trip titel in the #key input field.
 * Therefore this function should clear the text in the .errormsg section and remove the error from the classlist of the #key
 * input field.
 * 
 * @param {Event} event 
 */
function clearError(event) {
}

/**
 * This function extracts the values of the add trip form to build an instance of Trip object with it,
 * which will be returned by this function.
 * 
 * @returns {Trip}
 */
function extractTripFromForm() {
}

/**
 * This function should handel the submission of the add trip form, by extracting the form field and using them to
 * instantiate a new Trip instance. The new Trip instance can then be used to add the Trip using the tripService.
 * However the tripService might return an error which should be communicated to the user.
 * But if everything goes well, than the index.html page should be loaded.
 * 
 * @param {Event} event 
 */
function formSubmit(event) {

}


// add an eventlistener that will call the clearError function, as soon as the user uses the #key input field for the trip titel.

// notice that we are not listening for the submit button click event but on the submit event of the form!!!
// listening to the button would workaround browser checks like required input fields. Add the required listener for this.
