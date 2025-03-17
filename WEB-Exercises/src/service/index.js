import TripService from './TripService';
import WeatherService from './WeatherService';

const tripService = new TripService();
const weatherService = new WeatherService();

export {
  tripService,
  weatherService,
};
