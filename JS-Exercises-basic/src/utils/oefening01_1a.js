/*

Datatypes, Expressions and Operators

*/

/**
 * The function convertToString is called using different types of parameters and always returns a
 * string
 *
 * @function convertToString
 * @param { string | number | boolean | array } parameter
 * @returns { string } - the parameter to converted to a string
 */
function convertToString(parameter) {
  return String(parameter);
}

/**
 * The function isNotZero checks if the parameter is not equal to 0
 * NB: not using an if statement is possible
 *
 * @function isNotZero
 * @param { number } parameter
 * @return { boolean } - true for every number that is not 0
 */
function isNotZero(parameter) {
  return parameter !== 0;
}

/**
 * The function isEqual checks if the two parameters are equal, by value and datatype
 *
 * @function isEqual
 * @param { any } parameter1
 * @param { any } parameter2
 * @return { boolean } - true if the parameters are equal to value and datatype
 */
function isEqual(parameter1, parameter2) {
  return parameter1 === parameter2;
}

/**
 * The function sum adds up the two parameters and returns a numerical value
 *
 * @function sum
 * @param { number | string | boolean } parameter1
 * @param { number | string | boolean } parameter2
 * @return { number } - the mathematical sum of the two parameters
 */
function sum(parameter1, parameter2) {
  return Number(parameter1) + Number(parameter2);
}

/**
 * The function isUnderDag decides via the parameter if someone is underage (younger than 18)
 * NB: try not to use an if statement
 * NB: only ages between 0 and 120 are valid
 *
 * @function isUnderAge
 * @param { number } age - is a positive number with a value between 0 and 120 .
 * @return { boolean } - is true if the age is lower than 18 and within the valid range
 */
function isUnderAge(age) {
  return age >= 0 && age < 120 && age < 18;
}

/**
 * The function getDateObject uses the parameters to return a date object
 *
 * @function getDateObject
 * @param { number } day - a number between 1 and 31
 * @param { number } month - a number between 1 and 12
 * @param { number } year - a number between 0 and 200
 * @return { date } - a date object created with the parameters
 *
 * NB: it is not necessary to check if dates are valid, like 31-2-2020
 */
function getDateObject(day, month, year) {
  return new Date(year,month - 1,day)
}

/**
 * The function timeout decides if the absolute difference of the given dates (date1 and date2),
 * is larger then the given absolute difference
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 *
 * @function timeout
 * @param { date } date1
 * @param { date } date2
 * @param { number } timeLimit -
 *      number of minutes used to compare with the difference between the two dates
 * @return { boolean } -
 *      true if the difference between date1 and date2 is greater then the parameter timeLimit
 */
function timeout(date1, date2, timeLimit) {
  return Math.abs(timeLimit) < Math.abs((date1.getTime() - date2.getTime()) / 60000)
}

export {
  convertToString,
  isNotZero,
  isEqual,
  sum,
  isUnderAge,
  getDateObject,
  timeout,
};
