/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import catsService from './CatsService.v1';

import CryptoDaoLocalstorageImpl from './CryptoDaoLocalstorageImpl';
import CryptoDaoRestImpl from './CryptoDaoRestImpl';

const storageLocation = 'local';
let service = null;

if (storageLocation === 'local') {
  service = new CryptoDaoLocalstorageImpl();
} else {
  service = new CryptoDaoRestImpl();
}

const cryptoService = service;

export { catsService, cryptoService };
