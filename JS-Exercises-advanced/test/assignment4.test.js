import { describe, test, expect, beforeEach } from 'vitest';
import Crypto from '../src/model/Crypto';
import CryptoDaoLocalstorageImpl from '../src/service/CryptoDaoLocalstorageImpl';

describe('CryptoDaoLocalstorageImpl', () => {

  const cryptoService = new CryptoDaoLocalstorageImpl();

  beforeEach(() => {
    localStorage.clear();
  });

  describe('getCrypto with empty list of cryptos', () => {
    test('should return a promise', () => {
      expect(cryptoService.getCryptoList()).toBeInstanceOf(Promise);
    });

    test('should return an empty array if no crypto is stored', async () => {
      const cryptoList = await cryptoService.getCryptoList();
      expect(cryptoList).toEqual([]);
    });
  });

  describe('addCrypto', () => {
    test('should return a promise', () => {
      expect(cryptoService.addCrypto()).toBeInstanceOf(Promise);
    });
    test('should return an array with one crypto if one crypto is stored', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const cryptoList = await cryptoService.addCrypto(crypto);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto]));
    });
    test('should return an array with two cryptos if two cryptos are stored', async () => {
      const crypto1 = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const crypto2 = new Crypto({symbol: 'ETH', quantity: 0.5});
      let cryptoList = await cryptoService.addCrypto(crypto1);
      cryptoList = await cryptoService.addCrypto(crypto2);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto1, crypto2]));
    });
    test('should return an array of two crypto if the same crypto is stored twice', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      let cryptoList = await cryptoService.addCrypto(crypto);
      cryptoList = await cryptoService.addCrypto(crypto);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto, crypto]));
    });
  });

  describe('updateCrypto', () => {
    test('should return a promise', () => {
      expect(cryptoService.updateCrypto()).toBeInstanceOf(Promise);
    });

    test('should return an array', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const cryptoList = await cryptoService.updateCrypto(crypto);
      expect(cryptoList).toBeInstanceOf(Array);
    });

    test('should not alter the crypto list if the crypto is not in the list', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const cryptoList = await cryptoService.updateCrypto(crypto);
      expect(cryptoList).toEqual([]);
    });

    test('should update the crypto if the crypto is in the list and the list only contains one crypto', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      await cryptoService.addCrypto(crypto);
      const crypto2 = new Crypto({symbol: 'BTC', quantity: 0.0002});
      const cryptoList = await cryptoService.updateCrypto(crypto2);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto2]));
    });

    test('should update the crypto if the crypto is in the list and the list contains more different cryptos', async () => {
      const crypto1 = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const crypto2 = new Crypto({symbol: 'ETH', quantity: 0.5});
      await cryptoService.addCrypto(crypto1);
      await cryptoService.addCrypto(crypto2);
      const crypto3 = new Crypto({symbol: 'BTC', quantity: 0.0002});
      const cryptoList = await cryptoService.updateCrypto(crypto3);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto3, crypto2]));
    });

    test('should update the crypto all cryptos of the same symbol is in the list and the list contains more cryptos', async () => {
      const crypto1 = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const crypto2 = new Crypto({symbol: 'BTC', quantity: 0.0002});
      const crypto3 = new Crypto({symbol: 'ETH', quantity: 0.5});
      await cryptoService.addCrypto(crypto1);
      await cryptoService.addCrypto(crypto2);
      await cryptoService.addCrypto(crypto3);
      const crypto4 = new Crypto({symbol: 'BTC', quantity: 0.0003});
      const cryptoList = await cryptoService.updateCrypto(crypto4);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto4, crypto4, crypto3]));
    })
  });

  describe('removeCrypto', () => {
    test('should return a promise', () => {
      expect(cryptoService.removeCrypto()).toBeInstanceOf(Promise);
    });

    test('should return an array', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const cryptoList = await cryptoService.removeCrypto(crypto);
      expect(cryptoList).toBeInstanceOf(Array);
    });

    test('should not alter the crypto list if the crypto is not in the list', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const cryptoList = await cryptoService.removeCrypto(crypto);
      expect(cryptoList).toEqual([]);
    });

    test('should remove the crypto if the crypto is in the list and the list only contains one crypto', async () => {
      const crypto = new Crypto({symbol: 'BTC', quantity: 0.0001});
      await cryptoService.addCrypto(crypto);
      const cryptoList = await cryptoService.removeCrypto(crypto);
      expect(cryptoList).toEqual([]);
    });

    test('should remove the crypto if the crypto is in the list and the list contains more different cryptos', async () => {
      const crypto1 = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const crypto2 = new Crypto({symbol: 'ETH', quantity: 0.5});
      await cryptoService.addCrypto(crypto1);
      await cryptoService.addCrypto(crypto2);
      const cryptoList = await cryptoService.removeCrypto(crypto1);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto2]));
    });

    test('should remove all cryptos of the same symbol is in the list and the list contains more cryptos', async () => {
      const crypto1 = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const crypto2 = new Crypto({symbol: 'BTC', quantity: 0.0002});
      const crypto3 = new Crypto({symbol: 'ETH', quantity: 0.5});
      await cryptoService.addCrypto(crypto1);
      await cryptoService.addCrypto(crypto2);
      await cryptoService.addCrypto(crypto3);
      const cryptoList = await cryptoService.removeCrypto(crypto1);
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto3]));
    });
  });

  describe('getCrypto with cryptos stored', () => {
    test('should return a list of cryptos', async () => {
      const crypto1 = new Crypto({symbol: 'BTC', quantity: 0.0001});
      const crypto2 = new Crypto({symbol: 'ETH', quantity: 0.5});
      await cryptoService.addCrypto(crypto1);
      await cryptoService.addCrypto(crypto2);
      const cryptoList = await cryptoService.getCryptoList();
      expect(JSON.stringify(cryptoList)).toEqual(JSON.stringify([crypto1, crypto2]));
    });
  });
});
