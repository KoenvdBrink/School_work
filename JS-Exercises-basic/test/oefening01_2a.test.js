import { describe, it, expect } from 'vitest';

import {
  dayType,
  dayOfTheWeek,
} from '../src/utils/oefening01_2a';

describe('JavaScript 01 - Conditions', () => {
  describe('testing the function dayType', () => {
    it('using the date 1-sep-2019', () => {
      expect(dayType(new Date('2019-09-01'))).to.be.equal('weekend');
    });
    it('using the date 2-sep-2019', () => {
      expect(dayType(new Date('2019-09-02'))).to.be.equal('workday');
    });
    it('using the date 3-sep-2019', () => {
      expect(dayType(new Date('2019-09-03'))).to.be.equal('workday');
    });
    it('using the date 4-sep-2019', () => {
      expect(dayType(new Date('2019-09-04'))).to.be.equal('workday');
    });
    it('using the date 5-sep-2019', () => {
      expect(dayType(new Date('2019-09-05'))).to.be.equal('workday');
    });
    it('using the date 6-sep-2019', () => {
      expect(dayType(new Date('2019-09-06'))).to.be.equal('workday');
    });
    it('using the date 7-sep-2019', () => {
      expect(dayType(new Date('2019-09-07'))).to.be.equal('weekend');
    });
    it('a call without a date', () => {
      expect(dayType()).to.be.equal(false);
    });
    it('a call with the parameter "Hallo"', () => {
      expect(dayType('Hallo')).to.be.equal(false);
    });
  });

  describe('testing the function dayOfTheWeek', () => {
    it('using the date 1-sep-2019', () => {
      expect(dayOfTheWeek(new Date('2019-09-01'))).to.be.equal('Sunday');
    });
    it('using the date 2-sep-2019', () => {
      expect(dayOfTheWeek(new Date('2019-09-02'))).to.be.equal('Monday');
    });
    it('using the date 3-sep-2019', () => {
      expect(dayOfTheWeek(new Date('2019-09-03'))).to.be.equal('Tuesday');
    });
    it('using the date 4-sep-2019', () => {
      expect(dayOfTheWeek(new Date('2019-09-04'))).to.be.equal('Wednesday');
    });
    it('using the date 5-sep-2019', () => {
      expect(dayOfTheWeek(new Date('2019-09-05'))).to.be.equal('Thursday');
    });
    it('using the date 6-sep-2019', () => {
      expect(dayOfTheWeek(new Date('2019-09-06'))).to.be.equal('Friday');
    });
    it('using the date 7-sep-2019', () => {
      expect(dayOfTheWeek(new Date('2019-09-07'))).to.be.equal('Saturday');
    });
    it('a call without a date', () => {
      expect(dayOfTheWeek()).to.be.equal(false);
    });
    it('a call with the parameter "Hallo"', () => {
      expect(dayOfTheWeek('Hallo')).to.be.equal(false);
    });
  });
});
