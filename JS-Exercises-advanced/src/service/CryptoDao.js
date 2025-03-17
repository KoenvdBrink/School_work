/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

/**
 * @abstract 
 * @class CryptoDao
 */
export default class CryptoDao {
  constructor() {
    if (this.constructor === CryptoDao) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  /**
   * @abstract
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  addCrypto(crypto) {
    throw new Error("Method 'addCrypto()' must be implemented.");
  }

  /**
   * @abstract
   * @returns {Promise<Array<Crypto>>}
   */
  getCryptoList() {
    throw new Error("Method 'getCryptoList()' must be implemented.");
  }

  /**
   * @abstract
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  updateCrypto(crypto) {
    throw new Error("Method 'updateCrypto()' must be implemented.");
  }

  /**
   * @abstract
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  removeCrypto(crypto) {
    throw new Error("Method 'removeCrypto()' must be implemented.");
  }
}
