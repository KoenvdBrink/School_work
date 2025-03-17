import CryptoDao from './CryptoDao';
// eslint-disable-next-line no-unused-vars
import Crypto from '../model/Crypto';

/**
 * Class that offers CRUD operations for the Crypto model and stores the data in the localstorage
 */
export default class CryptoDaoLocalstorageImpl extends CryptoDao {
  /**
   * Adds a Crypto to the list and stores it at the localstorage
   * Notice that a crypto is identified by its symbol and only one crypto with the same symbol can be added
   * If the crypto is already in the list, the quantity is updated
   * Note that the functionality of increasing the quantity of an existing crypto is a business logic and 
   * should actually be implemented in the controller layer.
   *
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  addCrypto(crypto) {
    // TODO: implement this method
  }

  /**
   * Returns the crypto list from the localstorage
   * @returns {Promise<Array<Crypto>>}
   */
  // eslint-disable-next-line class-methods-use-this
  getCryptoList() {
    // TODO: implement this method
  }

  /**
   * Updates a crypto from the localstorage
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  updateCrypto(crypto) {
    // TODO: implement this method
  }

  /**
   * Removes a crypto from the localstorage
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  removeCrypto(crypto) {
    // TODO: implement this method
  }
}
