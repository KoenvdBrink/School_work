import CryptoDao from './CryptoDao';
// eslint-disable-next-line no-unused-vars
import Crypto from '../model/Crypto';

/**
 * Class that offers CRUD operations for the Crypto model and stores via the REST API at the server
 */
export default class CryptoDaoRestImpl extends CryptoDao {

  constructor() {
    super();
    this.baseUrl = 'http://localhost:3000'; // TODO: move to config and set up a server with this REST API
  }

  /**
   * Adds a cyrpto to the storage
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  addCrypto(crypto) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crypto)
    };

    return fetch(`${this.baseUrl}/cryptos`, options).then(response => response.json());
  }

  /**
   * Fetches and returns the crypto list from the server
   * @returns {Promise<Array<Crypto>>}
   */
  getCryptoList() {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${this.baseUrl}/cryptos`, options).then(response => response.json());
  }

  /**
   * Updates a crypto
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  updateCrypto(crypto) {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crypto)
    };

    return fetch(`${this.baseUrl}/cryptos/${crypto.name}`, options).then(response => response.json());
  }

  /**
   * Removes a crypto
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
    removeCrypto(crypto) {
      const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };

      return fetch(`${this.baseUrl}/cryptos/${crypto.name}`, options).then(response => response.json());
    }
}
