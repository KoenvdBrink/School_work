/*

Strings

*/

/**
 * The function cleanUpInput transforms the parameter input according to the following rules:
 * - remove the empty spaces at the front and at the end
 * - all uppercase letter should be transformed to lowercase letters
 *
 * NB: the parameter always has a value
 *
 * @function cleanUpInput
 * @param {string} input - input entered via an input text
 * @return {string} - the input string transformed via the two rules
 */
function cleanUpInput(input){
  return input.trim().toLowerCase();
}

/**
 * The function rotateText uses the parameter text and toTheLeft, to decide how the text should be
 * rotated. If the parameter toTheLeft is true, the text is rotated to the left. Otherwise the text
 * is rotated to the right.
 *
 * @function rotateText
 * @param {string} text
 * @param {boolean} toTheLeft -
 *          true to rotate the text from right to left, otherwise from left to right
 * @return {string} - the text that has to be rotated.
 *          For example:
 *          rotateText('Hallo ', true) => 'allo H'
 *          rotateText('allo H', true) => 'llo Ha'
 *          rotateText('llo Ha', false) => 'allo H'
 */
function rotateText(text, toTheLeft) {
  if (toTheLeft) {
    return text.slice(1) + text[0];
  } else {
    return text[text.length - 1] + text.slice(0, -1);
  }
}


/**
 * De functie reverseText draait de gegeven parameter om, zodat je het spiegelbeeld krijgt
 *
 * The function reverseText flips the text given, making it a reflection
 *
 * @function reverseText
 * @param {string} text
 * @return {string} - the reflection of the text
 *      for example:
 *          "Hallo" => "ollaH"
 */
function reverseText(text) {
  return text.split('').reverse().join('');
}


/**
 * The function removeLastWord removes the last word from the parameter given
 *
 * @function removeLastWord
 * @param {string} text
 * @return {string} - the text without the last word
 *      for example:
 *          "This is a text with multiple words" => "This is a text with multiple"
 */
function removeLastWord(text) {
  const words = text.trim().split(' ');
  words.pop();
  return words.join(' ');
}


/**
 * The function getIntroText decides how many characters should be returned, appended with "..."
 * NB: you are prohibited to cut off words
 *
 * @function getIntroText
 * @param {string} text
 * @param {number} numberOfCharacters
 * @return {string} -
 *      Returns the text not longer than the given number of characters, appended with "..."
 *      for example:
 *          "This is a text with multiple words" => "This is a text with multiple ..."
 */

// ---- CUT ----
function getIntroText(text, numberOfCharacters) {
  const ZERO = 0;
  const ADDITION = 1;
  const APPENDEDTEXT = '...';
  if (text.length <= numberOfCharacters) {
    return text;
  }

  const words = text.split(' ');
  let result = '';

  for (let word of words) {
    if ((result + word).length > numberOfCharacters) {
      break;
    }
    result += (result ? ' ' : '') + word;
  }

  return result + APPENDEDTEXT;
}
// ---- ENDCUT ----


export {
  cleanUpInput,
  rotateText,
  reverseText,
  removeLastWord,
  getIntroText,
};
