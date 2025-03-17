// Arrays
// in this exercises we will continue with common JS Array manipulations

/**
 * adds an item to the end of an array.
 * !!! Notice: This functie is a "pure function"; see: https://youtu.be/fYbhD_KMCOg
 * @function addToQueue
 * @param { Array } queue
 * @param { any } item
 * @return { Array }
 */
function addToQueue(queue, item) {
}

/**
 * LIFO stands for Last In First Out. This function assumes that the last item has been added
 * at the end of the array. So this function will return the last item of the array and will
 * remove this item from the array.
 * Therefore this function is NOT a pure function.
 * try to solve this without a loop statement.
 * @function getLiFoItem
 * @param { Array } queue
 * @returns { any }
 */
function getLiFoItem(queue) {
}

/**
 * FIFO stands for First In First Out. This function assumes that the last item is added to the end
 * of the array. So this function will return the first item within the array and remove it from the
 * array. Therefore this function is NOT a pure function.
 * try to solve this without a loop statement.
 * @function getFiFoItem
 * @param { Array } queue
 * @returns { any }
 */
function getFiFoItem(queue) {
}

/**
 * sortDescAscList sorts the items of the list from high to low.
 * try to solve this without a loop statement.
 * @function sortDescAscList
 * @param { Array } list
 * @returns { Array }
 */
function sortDescAscList(list) {
}

/**
 * returns all items as an array that are longer than the provided maxLength
 * try to solve this without a loop statement.
 * @function getAllLongTextItems
 * @param { Array<string> } array
 * @param { number } maxLength
 * @returns { Array<string> }
 * example:
 * getAllLongTextItems(["Hallo", "dit", "is", "een", "voorbeeld"], 3) = ["Hallo", "voorbeeld"]
 */
function getAllLongTextItems(array, maxLength) {
}

/**
 * returns the sum of the values of the array.
 * try to solve this without a loop statement.
 * @function sum
 * @param { Array<number> } array
 * @returns { number }
 *
 * example:
 * sum([1,2,3,4]) = 10
 */
function sum(array) {
  // see https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers of
  // https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
}

/**
 * the parameter of this function is an array representing a receipt. Each item of the array again is an
 * array representing a single line of the receipt, consisting of the name of the product, the number of
 * products bought and the price for a single product.
 * This function calculates the total prijs of the receipt by calculating the sum of each item on the list.
 * try to solve this without a loop statement.
 *
 * @function getTotalPrice
 * @param { Array<Array<string, number, number>> } array
 * @returns { number }
 *
 * voorbeeld:
 * getTotalPrice(
 *  [
 *      ['Engelse drop', 2, 1.43],
 *      ['Muntdrop', 1, 1.59],
 *      ['Honingdrop', 2, 1.65]
 *  ]
 * ) = (2*1.43) + (1*1.59) + (2*1.65) = 7.75
 */
function getTotalPrice(array) {
}

/**
 * This function is similar to the function getTotalPrice. The difference is that the receipt array now
 * doesn't contain an array representing a single line of the receipt, but an JSON object to represent it.
 * try to solve this without a loop statement.
 *
 * @function getReceiptTotal
 * @param { Array<Object> } array
 * @returns { number }
 *
 * example:
 * getReceiptTotal(
 *  [
 *      {naam: 'Engelse drop', aantal: 2, prijs: 1.43},
 *      {naam: 'Muntdrop', aantal: 1, prijs: 1.59},
 *      {naam: 'Honingdrop', aantal: 2, prijs: 1.65}
 *  ]
 * ) = (2*1.43) + (1*1.59) + (2*1.65) = 7.75
 */
function getReceiptTotal(array) {
}

/**
 * returns an array of all indexes of items within the given array, that match the given searchItem.
 * @function getAllIndexes
 * @param { Array<any> } array
 * @param { any } searchItem
 * @returns { Array<number> }
 *
 * example:
 * getAllIndexes(['a','b','a','c'], 'a') = [0, 2]
 */
function getAllIndexes(array, searchItem) {
}

/**
 * Note that this is a very difficult exercise. Don't worry if can't solve this one.
 * this function expects 2 parameters of which the first parameter is the reference toward a math function
 * which expects a list (not an array) of values as parameters. 
 * This function wil call the math function (first parameter) using the array values provided by the second
 * parameter of this function.
 * The result of this function is the result of the function parameter with the provided values.
 * Tip: Use the spread operator to solve this exercise.
 * @function calculate
 * @param { function } functie
 * @param { Array<number> } array
 * @returns { number }
 *
 * example:
 * calculate(Math.min, [2, 4, 1, 8, 5]) = 1
 * calculate(Math.max, [2, 4, 1, 8, 5]) = 8
 */
function calculate(functie, array) {
}


export {
  addToQueue,
  getLiFoItem,
  getFiFoItem,
  sortDescAscList,
  getAllLongTextItems,
  sum,
  getTotalPrice,
  getAllIndexes,
  calculate,
  getReceiptTotal
};
