/* eslint-disable class-methods-use-this */

import { cryptoService } from '../service';

export default class CryptoController {

  /**
   * Adds a crypto to the list of cryptos. In case the crypto is already in the list, the quantity is updated.
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  addCrypto(crypto) {
    return new Promise((resolve) => {
      this.getCryptoList()
        .then((cryptoList) => {
          // check if the crypto is already in the list
          const isCryptoInList = cryptoList.filter((c) => c.symbol === crypto.symbol).length > 0;
          if (!isCryptoInList) {
            // crypto not in list
            cryptoService.addCrypto(crypto).
            then((newCryptoList) => {
              resolve(newCryptoList);
            });
          } else {
            // crypto already in list
            // get the crypto from the list and update the quantity
            const FIRST_ITEM = 0; // there should be only one
            const cryptoToUpdate = cryptoList.filter((c) => c.symbol === crypto.symbol)[FIRST_ITEM];
            cryptoToUpdate.quantity += crypto.quantity;

            cryptoService.updateCrypto(cryptoToUpdate)
            .then((newCryptoList) => {
              resolve(newCryptoList);
            });
          }
        });
    });
  }

  /**
   * Returns the crypto list.
   * @returns {Promise<Array<Crypto>>}
   */
  getCryptoList() {
    console.log('getCryptoList');
    return cryptoService.getCryptoList();
  }

  /**
   * Updates a crypto.
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  updateCrypto(crypto) {
    return cryptoService.updateCrypto(crypto);
  }

  /**
   * Removes a crypto.
   * @param {Crypto} crypto
   * @returns {Promise<Array<Crypto>>}
   */
  deleteCrypto(crypto) {
    return cryptoService.removeCrypto(crypto);
  }
}
