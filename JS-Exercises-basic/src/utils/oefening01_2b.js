/*

Conditions

*/

/**
The NS has standard prices for traveling by train. However, there are exemptions.
One exemption is when the travelers fall into a certain age category. You get to calculate the
fare, with the given exemptions.

Via multiple exercises (functions), the main goal of calculating the fare will be achieved.
*/

/**
 * The function getAge uses the parameter date, which is used to calculate the age
 * NB: the age is calculated on 1 Januari 2020
 * NB: you can assume that the parameter is valid
 *
 * @function getAge
 * @param {date} birthDate
 * @return {number} - the calculated age on 1 Januari 2020
 */
function getAge(birthDate) {
  const today = new Date("2020-01-01")
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
}


/**
 * The function hasRightForAgeDiscount decides if the person is eligible for discount.
 * The person has be younger than 12 years old, or older than 65 years old
 *
 * @function hasRightForAgeDiscount
 * @param {number} age - age in years
 * @return {boolean} - true for all ages younger than 12 and older than 65
 */
function hasRightForAgeDiscount(age) {
  if (age < 12 || age > 65){
    return true
  } else {
    return false
  }
}

/**
 * The function hasRightForWeekendDiscount decides wether the given date falls in the weekend
 *
 * @function hasRightForWeekendDiscount
 * @param {date} dateOfTravel
 * @return {boolean} - true if the day of travel falls in the weekend, false if not
 */
function hasRightForWeekendDiscount(dateOfTravel) {
  const day = dateOfTravel.getDay();
  if (day == 0 || day == 6 ) {
    return true
  } else {
    return false
  }
}

/**
 * The function defaultPrice decides the price using the distant. The distant is in kilometers.
 * If the distance is equal or smaller than 50 km, you will pay 80 cent per kilometer. Distances
 * larger than 50 km have a starting rate of €15 and cost 60 cent per kilometer.
 *
 * @function defaultPrice
 * @param {number} distanceInKm
 * @return {number} - with a distance <= 50km you will pay 80cent per km
 *                    with a distance > 50 km you will pay €15 as a staring rate and 60 cent per
 *                    kilometer
 */
function defaultPrice(distanceInKm){
  if (distanceInKm <= 0){
    return 0
  } else if (distanceInKm <= 50){
    return distanceInKm * 0.8
  } else{
    return 15 + distanceInKm * 0.6
  }
}

/**
 * The function ticketPrice uses the parameters birthDate, travelDate and distanceInKm to calculate
 * the ticket price
 * NB: use the previously created functions
 * NB: additional discount can be acquired by people that:
 *      - can get discount according to their age, with 30% additional discount by traveling
 *          during the week
 *      - can get discount according to their age, with 35% additional discount by traveling
 *          during the weekend
 *      - do not get discount according to their age, with 40% additional discount by traveling
 *          during the weekend
 *
 * @function ticketPrice
 * @param {date} birthDate
 * @param {date} travelDate
 * @param {number} distanceInKm
 * @return {number} - the ticket price with the following additional discount:
 *          35% during the weekend for people that can get discount according to their age
 *          30% during the week for people that can get discount according to their age
 *          40% during the weekend voor people that can not get discount according to their age
 */
function ticketPrice(birthDate, travelDate, distanceInKm) {
  const price = defaultPrice(distanceInKm)
  if (hasRightForAgeDiscount(getAge(birthDate))){
    if (hasRightForWeekendDiscount(travelDate)){
      return price * 0.65
    }else{
      return price * 0.7
    }
  }else{
    if (hasRightForWeekendDiscount(travelDate)){
      return price * 0.6
    }else{
      return price
    }
  }
}

export {
  getAge,
  hasRightForAgeDiscount,
  hasRightForWeekendDiscount,
  defaultPrice,
  ticketPrice,
};
