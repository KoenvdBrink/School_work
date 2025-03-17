/*

Conditions

*/

/**
 * The function dayType uses a parameter that is a date. In case the day falls in the weekend, the
 * function returns the value "weekend". In any other case, the function returns the value
 * "weekday".
 * NB: in case the parameter is empty, the function returns false.
 *
 * @function dayType
 * @param {date} date
 * @return {string | boolean} -
 *      'weekend' in case the date falls on a Saturday or Sunday
 *      'weekday' in case the day falls between Monday and Friday
 *      false for every other input, like incorrect of empty parameter
 */
function dayType(date) {
  if (!date || !(date instanceof Date)){
    return false
  }
  const day = date.getDay();
  if (day == 0 || day == 6 ) {
    return "weekend"
  } else {
    return "workday"
  }
}

/**
 * The function dayOfTheWeek uses the parameter date to decide the current day of the week.
 * NB: in case the parameter is empty or incorrect, the function returns false
 *
 * @function dayOfTheWeek
 * @param {date} date
 * @return {string | boolean} -
 *      the function return the values Sunday through Saturday, depending on the input.
 *      in any other case return false
 */
function dayOfTheWeek(date) {
  if (!date || !(date instanceof Date)){
    return false
  }
  const day = date.getDay();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[day]
}

export {
  dayType,
  dayOfTheWeek,
};
