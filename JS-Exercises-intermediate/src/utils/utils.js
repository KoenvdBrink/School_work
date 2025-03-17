/**
 * The function removeLastWord removes the last word from the parameter given
 *
 * @function removeLastWord
 * @param { string } text
 * @return { string } - the text without the last word
 *      for example:
 *          "This is a text with multiple words" => "This is a text with multiple"
 */
function removeLastWord(text) {
  const NOTFOUND = -1;
  const ZERO = 0;
  return text.lastIndexOf(' ') === NOTFOUND ? text : text.slice(ZERO, text.lastIndexOf(' '));
}

/**
 * The function getIntroText decides how many characters should be returned, appended with "..."
 * NB: you are prohibited to cut off words
 *
 * @function getIntroText
 * @param { string } text
 * @param { number } numberOfCharacters
 * @return { string } -
 *      Returns the text not longer than the given number of characters, appended with "..."
 *      for example:
 *          "This is a text with multiple words" => "This is a text with multiple ..."
 */
function getIntroText(text, numberOfCharacters) {
  const ZERO = 0;
  const ADDITION = 1;
  const APPENDEDTEXT = '...';
  return removeLastWord(text.slice(ZERO, numberOfCharacters + ADDITION)) + APPENDEDTEXT;
}

export {
  removeLastWord,
  getIntroText,
}
