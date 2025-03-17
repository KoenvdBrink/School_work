export default class TripController {

  #trips = []; // define a private attribute.

  /**
   * Pure method to add a trip and returns the resulting trips array.
   * @param { Trip } trip
   * @returns { array<Trip> }
   * Note that for now we store this trip in memory (the array property of this class).
   */
  addTrip(trip) {
  }

  /**
   * Pure method that returns an array of Trip items.
   * @returns { array<Trip> }
   */
  getTrips() {
  }

  /**
   * pure method that returns an array of trips of which the rating is equal to the rating provided.
   * try to solve this assignment without the use of a loop.
   * @param { number } rating 
   * @returns { array<Trip> }
   */
  getTripsFilteredOnRating(rating) {
  }

  /**
   * pure method that returns an array of strings, with each string being the title of a trip.
   * try to solve this assignment without the use of a loop.
   * @returns { array<string> }
   */
  getTripTitels() {    
  }

  /**
   * Pure method meant for testing.
   * The function resets the trips array to an empty array.
   * @returns { array<Trip> } should be an empty array.
   */
  reset() {
    this.trips = [];
    return [...this.trips];
  }
}