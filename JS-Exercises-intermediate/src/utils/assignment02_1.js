// Arrays
// In this assignment we will focus on common array operations

/**
 *
 * Returns the reference toward the array given.
 * @function getArrayRef
 * @param { Array } array
 * @returns { Array } - the reference of the array, which is the array itself.
 */
function getArrayRef(array) {
}

/**
 * 
 * Add an item to the array and return the length of the resulting array.
 * Note that the function is not a pure function, since the array given will be changed by this function.
 * @function addItem
 * @param { Array } array
 * @param { any } item
 * @returns { number } - the new length of the given array. 
 */
function addItem(array, item) {
}

/**
 * this pure function will return a copy of the given array and not a reference to the given array. 
 * try to solve this assignment using the spread operator (...)
 * @function getArrayCopy
 * @param { Array } array
 * @returns { Array } new array that contains the same content as the array given.
 */
function getArrayCopy(array) {
}

/**
 * isEqual determines whether the content of two given arrays is equal. 
 * TIP: This problem can be solved without a simple comparison that doesn't need to loop through the array items.
 * @function isEqual
 * @param { Array } array1
 * @param { Array } array2
 * @returns { boolean } true if the two arrays contain the same content, otherwise false.
 */
function isEqual(array1, array2) {
}

/**
 * this function is supposed to return the last item of the given array, unless there is no last item. 
 * In that case teh function should return undefined.
 * @function getLastItem
 * @param { Array } array
 * @returns { any } the last item of the given array, unless there is no last item, 
 *                  in which case undefined should be returned.
 */
function getLastItem(array) {
}

/**
 * return the content of the array as a single string in which the values are comma separated.  
 * @function getArrayAsString
 * @param { Array } array
 * @returns { string } al values of the array will be placed within a single string, in which 
 *                      the values are separated by a ','.
 */
function getArrayAsString(array) {
}

/**
 * returns the index of the first occurance of the given item.
 * In case the item can't be found -1 shall be returned.
 * @function getFirstIndex
 * @param { Array } array
 * @param { any } item
 * @returns { number } index position of the item within the array, otherwise -1
 */
function getFirstIndex(array, item) {
}

/**
 * returns an array containing the items of the given array starting at the index provided.
 * @function getArrayTail
 * @param { Array } array
 * @param { number } index
 * @returns { Array } the tail array starting at the index given.
 */
function getArrayTail(array, index) {
}

/**
 * returns an array that contains the head of the array given til the provided index.
 * @function getArrayHead
 * @param { Array } array
 * @param { number } index
 * @returns { Array } de head of the given array until the given index.
 */
function getArrayHead(array, index) {
}

/**
 * returns an array containing that items of the array given, starting at the from index parameter
 * until the provided til parameter.
 * @function getSubArray
 * @param { Array } array
 * @param { number } from
 * @param { number } til
 * @returns { Array } an array containing the part of the given array, starting at the from index
 *                    and ending at the til index.
 */
function getSubArray(array, from, till) {
}

/**
 * The insertInto function shall return a new array. The array returned will be the array given, 
 * but has the given item inserted at the given index.
 * @function insertInto
 * @param { Array } array
 * @param { any } item
 * @param { number } index
 * @returns { Array } a new array with the item inserted into a clone of the given array 
 *                    at the given index 
 */
function insertInto(array, item, index) {
}

/**
 * returns an array simulair to the array given, but with the item at the given index removed.
 * @function remove
 * @param { Array } array
 * @param { number } index
 * @returns { Array } the new array nieuwe array die alleen het verwijderde item bevat
 */
function remove(array, index) {
}

export {
  getArrayRef,
  addItem,
  getArrayCopy,
  isEqual,
  getLastItem,
  getArrayAsString,
  getFirstIndex,
  getArrayTail,
  getArrayHead,
  getSubArray,
  insertInto,
  remove,
};
