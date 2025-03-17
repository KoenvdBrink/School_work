/*

Datatypes, Expressions en Operators

*/

import { sum } from "./oefening01_1a";

/**
 * Your parents want to stimulate you to do your best at college. They set up the following.
 * - For every point, above a grade higher than 6, you get €30.
 * - If you grade is a 7, you will receive €30. For an 8,5 you will receive €75. For a 10 you
 *    will receive €120.
 *
 * Let's pick this up step for step, using the following example.
 * For FEP you get a 6,1, for OOP you get a 7,2 and for IPASS you get a 8,3. The total reward is
 *  €108.
 *
 * The function average calculates the average of the given parameters. These parameters are
 * FEPgrade, OOPgrade and IPASSgrade.
 *
 * @function average
 * @param {number} FEPgrade
 * @param {number} OOPgrade
 * @param {number} IPASSgrade
 * @return {number} - the average of the given grades, with 1 decimal
 */
function average(FEPgrade, OOPgrade, IPASSgrade) {
  return (Math.round(((FEPgrade + OOPgrade + IPASSgrade) / 3) * 10 ) / 10)
}

/**
 * The function calculates the reward with the given grade. For every grade that is greater than 6.
 *
 * @function reward
 * @param {number} grade - grade for  the course
 * @return {number} - reward according to the grade
 */
function reward(grade) {
  return Math.max(0, (grade - 6)) * 30
}

/**
 * The function getRewardText uses the parameters of the three courses to calculate the reward.
 * The function returns the average of the grades with the according reward.
 * The format for the text will be: My grades (with an average of {average}) result in a reward
 * €{reward}!
 *
 * NB: use the previously created functions
 * NB: use a string literal
 *
 * @function getRewardText
 * @param {number} FEPgrade
 * @param {number} OOPgrade
 * @param {number} IPASSgrade
 * @return {string} - a textual description of the average grade and according reward.
 * For example: 'My grades (with an average of 7.5) result in a reward €135.0'
 */
function getRewardText(FEPgrade, OOPgrade, IPASSgrade) {
  return `My grades (with an average of ${average(FEPgrade, OOPgrade, IPASSgrade)}) result in a reward €${reward(FEPgrade) + reward(OOPgrade) + reward(IPASSgrade)}!`
}


export {
  average,
  reward,
  getRewardText,
};
