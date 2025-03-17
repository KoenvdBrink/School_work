import { describe, it, expect } from 'vitest';

import {
  convertToString, isNotZero, isEqual, sum, isUnderAge, getDateObject, timeout,
} from '../src/utils/oefening01_1a';

describe('JavaScript 01a - DataTypes, Expressions and Operators Test', () => {
  describe('testing the function convertToString', () => {
    it('the function should return a string', () => {
      expect(convertToString(42)).to.be.a('string');
    });
    it('with the parameter 42, the function should return "42"', () => {
      expect(convertToString(42)).to.be.equal('42');
      expect(convertToString(42)).to.be.a('string');
    });
    it('with the parameter [5, 6], the function should return "5,6"', () => {
      expect(convertToString([5, 6])).to.be.equal('5,6');
      expect(convertToString([5, 6])).to.be.a('string');
    });
    it('with the parameter true, the function should return "true"', () => {
      expect(convertToString(true)).to.be.equal('true');
      expect(convertToString(true)).to.be.a('string');
    });
  });

  describe('testing the function isNotZero', () => {
    it('with the parameter 0, the function should return false', () => {
      expect(isNotZero(0)).to.be.equal(false);
    });
    it('with the parameter 1, the function should return true', () => {
      expect(isNotZero(1)).to.be.equal(true);
    });
    it('with the parameter -1, the function should return true', () => {
      expect(isNotZero(-1)).to.be.equal(true);
    });
    it('with the parameter 7, the function should return true', () => {
      expect(isNotZero(7)).to.be.equal(true);
    });
  });

  describe('testing the function isEqual', () => {
    it('with the parameters 5 and 5, the function should return true', () => {
      expect(isEqual(5, 5)).to.be.equal(true);
    });
    it('with the parameters "5" and "5", the function should return true', () => {
      expect(isEqual('5', '5')).to.be.equal(true);
    });
    it('with the parameters 5 and "5", the function should return false', () => {
      expect(isEqual(5, '5')).to.be.equal(false);
    });
    it('with the parameters [5] and "5", the function should return false', () => {
      expect(isEqual([5], '5')).to.be.equal(false);
    });
    it('with the parameters 5 and [5], the function should return false', () => {
      expect(isEqual(5, [5])).to.be.equal(false);
    });
    it('with the parameters {getal: 5} en {getal: 5}, the function should return false', () => {
      expect(isEqual({ getal: 5 }, { getal: 5 })).to.be.equal(false);
    });
  });

  describe('testing the function sum', () => {
    it('with the parameters 1, 1 the function should return 2', () => {
      expect(sum(1, 1)).to.be.equal(2);
    });
    it('with the parameters 0, 0 the function should return 0', () => {
      expect(sum(0, 0)).to.be.equal(0);
    });
    it('with the parameters true, true the function should return 2', () => {
      expect(sum(true, true)).to.be.equal(2);
    });
    it('with the parameters false, false the function should return 0', () => {
      expect(sum(false, false)).to.be.equal(0);
    });
    it('with the parameters "1", "1" the function should return 2', () => {
      expect(sum('1', '1')).to.be.equal(2);
    });
  });

  describe('testing the function isUnderAge', () => {
    it('the function shuold return a boolean', () => {
      expect(isUnderAge(15)).to.be.a('boolean');
    });
    it('with an age of -10, the function should return false', () => {
      expect(isUnderAge(-10)).to.be.equal(false);
    });
    it('with an age of 0, the function should return true', () => {
      expect(isUnderAge(0)).to.be.equal(true);
    });
    it('with an age of 10, the function should return true', () => {
      expect(isUnderAge(10)).to.be.equal(true);
    });
    it('with an age of 17, the function should return true', () => {
      expect(isUnderAge(17)).to.be.equal(true);
    });
    it('with an age of 18, the function should return false', () => {
      expect(isUnderAge(18)).to.be.equal(false);
    });
    it('with an age of 150, the function should return false', () => {
      expect(isUnderAge(150)).to.be.equal(false);
    });
    it('with an age of 120, the function should return true', () => {
      expect(isUnderAge(120)).to.be.equal(false);
    });
  });

  describe('testing the function getDateObject', () => {
    it('testing the values 1, 9, 2019', () => {
      expect(getDateObject(1, 9, 2019).toDateString()).to.be.equal(new Date('2019-09-01').toDateString());
    });
    it('testing the values 31, 2, 2019', () => {
      expect(getDateObject(31, 2, 2019).toDateString()).to.be.equal(new Date('2019-02-31').toDateString());
    });
    it('testing the values 1, 1, 1970', () => {
      expect(getDateObject(1, 1, 1970).toDateString()).to.be.equal(new Date('1970-1-1').toDateString());
    });
  });

  describe('testing de functie timeout', () => {
    it('the function with the parameters (new Date("2019-09-01T08:30:00"), new Date("2019-09-01T11:30:00"), 60)) should return false', () => {
      expect(
        timeout(
          new Date('2019-09-01T08:30:00'),
          new Date('2019-09-01T11:30:00'),
          60,
        ),
      ).to.be.equal(true);
    });
    it('the function with the parameters (new Date("2019-09-01T11:30:00"), new Date("2019-09-01T08:30:00"), 60)) should return false', () => {
      expect(
        timeout(
          new Date('2019-09-01T11:30:00'),
          new Date('2019-09-01T08:30:00'),
          60,
        ),
      ).to.be.equal(true);
    });
    it('the function with the parameters (new Date("2019-09-01T11:30:00"), new Date("2019-09-01T08:30:00"), 190)) should return true', () => {
      expect(
        timeout(
          new Date('2019-09-01T11:30:00'),
          new Date('2019-09-01T08:30:00'),
          190,
        ),
      ).to.be.equal(false);
    });
    it('the function with the parameters (new Date("2019-08-31T23:59:00"), new Date("2019-09-01T00:01:00"), -5)) should return true', () => {
      expect(
        timeout(
          new Date('2019-08-31T23:59:00'),
          new Date('2019-09-01T00:01:00'),
          -5,
        ),
      ).to.be.equal(false);
    });
    it('the function with the parameters (new Date("2019-08-31T23:59:00"), new Date("2019-09-01T00:01:00"), -1)) should return true', () => {
      expect(
        timeout(
          new Date('2019-08-31T23:59:00'),
          new Date('2019-09-01T00:01:00'),
          -3,
        ),
      ).to.be.equal(false);
    });
    it('the function with the parameters (new Date("2019-08-31T23:59:00"), new Date("2019-09-01T00:01:00"), 0)) should return false', () => {
      expect(
        timeout(
          new Date('2019-08-31T23:59:00'),
          new Date('2019-09-01T00:01:00'),
          0,
        ),
      ).to.be.equal(true);
    });
    it('the function with the parameters (new Date("2019-08-31T23:59:00"), new Date("2019-09-01T00:01:00"), 1)) should return false', () => {
      expect(
        timeout(
          new Date('2019-08-31T23:59:00'),
          new Date('2019-09-01T00:01:00'),
          1,
        ),
      ).to.be.equal(true);
    });
    it('the function with the parameters (new Date("2019-08-31T23:59:00"), new Date("2019-09-01T00:01:00"), 2)) should return false', () => {
      expect(
        timeout(
          new Date('2019-08-31T23:59:00'),
          new Date('2019-09-01T00:01:00'),
          2,
        ),
      ).to.be.equal(false);
    });
    it('the function with the parameters (new Date("2019-08-31T23:59:00"), new Date("2019-09-01T00:01:00"), 3)) should return true', () => {
      expect(
        timeout(
          new Date('2019-08-31T23:59:00'),
          new Date('2019-09-01T00:01:00'),
          3,
        ),
      ).to.be.equal(false);
    });
  });
});
