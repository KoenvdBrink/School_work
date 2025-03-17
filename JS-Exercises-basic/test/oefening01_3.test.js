import { describe, it, expect } from 'vitest';

import { nFac } from '../src/utils/oefening01_3';

describe('JavaScript 01 - Loops', () => {
  describe('testing the function nFac', () => {
    it('using n = 0', () => {
      expect(nFac(0)).to.be.equal(1);
    });
    it('using n = 1', () => {
      expect(nFac(1)).to.be.equal(1);
    });
    it('using n = 2', () => {
      expect(nFac(2)).to.be.equal(2);
    });
    it('using n = 3', () => {
      expect(nFac(3)).to.be.equal(6);
    });
    it('using n = 4', () => {
      expect(nFac(4)).to.be.equal(24);
    });
    it('using n = 17', () => {
      expect(nFac(17)).to.be.equal(355687428096000);
    });
    it('using n = 18', () => {
      expect(nFac(18)).to.be.equal(6402373705728000);
    });
  });
});
