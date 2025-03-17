import Trip from '../model/Trip';
import { baseURL } from '../backendServerConfig';

// Class that provides the CRUD functionality for the Trips

export default class TripService {
  
  /**
   * CREATE
   * the title of the trip to be added should be unique. In case the title is already in use
   * the promise should be revoked with an Error object that has the string value 409.
   * In case tht title is missing the trip is unprocessable resulting in an 422 error.
   * Note 409 is the HTTP status code for a request that could not be fullfilled because of a
   * conflict with the current state of the target resource. Most likely because otherwise there
   * would be a duplicated key created.
   * Note 422 is the HTTP status code for an unprocessable entity request.
   * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error 
   * on how to generate an Error object.
   * 
   * As a side effect this method will add the trip to the #trips array.
   * Note that this makes that this function is not a pure function.
   * 
   * @param { Trip } trip
   * @returns { Promise<array<Trip>> }
   */
  addTrip(trip) {
    const url = `${baseURL}/v1/trip/${trip.title}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(trip),
    }

    const req = fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
    return req;
  }

  /**
   * READ
   * this function returns a promise that if fullfilled will hold an array of trips.
   * @returns { Promise<array<Trip>> }
   */
  getTrips() {
    const url = `${baseURL}/v1/trips/`;
    return fetch(url)
      .then((response) => response.json());
  }

  /**
   * READ
   * this function returns a promise that if fullfilled will hold an array of trips.
   * @returns { Promise<array<Trip>> }
   */
    getTrip(key) {
      const url = `${baseURL}/v1/trip/${key}`;
      return fetch(url)
        .then((response) => response.json());
    }
  

  /**
   * UPDATE
   * This function updates a trip. The trip to be updated is identified by its title.
   * On fullfillment the resulting new trips array should be resolved.
   * If however the title can't be found within the available trips an error object with the 
   * message '404' should be returned.
   * Note that 404 is the HTML status code indicating that the requested page is not available.
   * @param { Trip } trip
   * @returns { Promise<array<Trip>> }
   */
  updateTrip(trip) {
    const url = `${baseURL}/v1/trip/${trip.title}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(trip),
    }

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
    
  }

  /**
   * DELETE
   * This function deletes a trip. The trip to be deleted is identified by its title.
   * On fullfillment the resulting new trips array should be resolved.
   * If however the title can't be found within the available trips an error object with the 
   * message '404' should be returned.
   * Note that 404 is the HTML status code indicating that the requested page is not available.
   * @param { Trip } trip 
   * @returns { Promise<array<Trip>> }
   */
  deleteTrip(trip) {
    const url = `${baseURL}/v1/trip/${trip.title}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
  }

}