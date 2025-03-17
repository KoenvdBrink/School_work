import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import sinon from 'sinon';

import {
  getAge, hasRightForAgeDiscount, hasRightForWeekendDiscount, defaultPrice, ticketPrice,
} from '../src/utils/oefening01_2b';

describe('JavaScript 01 - Conditions - ticket price opdracht', () => {
  const now = new Date('2020-01-01');
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers(now.getTime());
  });

  afterEach(() => {
    clock.restore();
  });

  describe('testing the function getAge with the current 1-jan-2020', () => {
    it('given is the birth date 1-jan-2010', () => {
      expect(getAge(new Date('2010-01-01'))).to.be.equal(10);
    });
    it('given is the birth date 2-jan-2010', () => {
      expect(getAge(new Date('2010-01-02'))).to.be.equal(9);
    });
    it('given is the birth date 1-sep-2000', () => {
      expect(getAge(new Date('2000-09-01'))).to.be.equal(19);
    });
    it('given is the birth date 24-dec-1950', () => {
      expect(getAge(new Date('1950-12-24'))).to.be.equal(69);
    });
  });

  describe('testing the function hasRightForAgeDiscount', () => {
    it('given is the age of 0', () => {
      expect(hasRightForAgeDiscount(0)).to.be.equal(true);
    });
    it('given is the age of 11', () => {
      expect(hasRightForAgeDiscount(11)).to.be.equal(true);
    });
    it('given is the age of 12', () => {
      expect(hasRightForAgeDiscount(12)).to.be.equal(false);
    });
    it('given is the age of 35', () => {
      expect(hasRightForAgeDiscount(35)).to.be.equal(false);
    });
    it('given is the age of 65', () => {
      expect(hasRightForAgeDiscount(65)).to.be.equal(false);
    });
    it('given is the age of 66', () => {
      expect(hasRightForAgeDiscount(66)).to.be.equal(true);
    });
  });

  describe('testing the function hasRightForWeekendDiscount', () => {
    it('given is the travel date 2019-sep-01', () => {
      expect(hasRightForWeekendDiscount(new Date('2019-09-01'))).to.be.equal(
        true,
      );
    });
    it('given is the travel date 2019-sep-02', () => {
      expect(hasRightForWeekendDiscount(new Date('2019-09-02'))).to.be.equal(
        false,
      );
    });
    it('given is the travel date 2019-sep-03', () => {
      expect(hasRightForWeekendDiscount(new Date('2019-09-03'))).to.be.equal(
        false,
      );
    });
    it('given is the travel date 2019-sep-04', () => {
      expect(hasRightForWeekendDiscount(new Date('2019-09-04'))).to.be.equal(
        false,
      );
    });
    it('given is the travel date 2019-sep-05', () => {
      expect(hasRightForWeekendDiscount(new Date('2019-09-05'))).to.be.equal(
        false,
      );
    });
    it('given is the travel date 2019-sep-06', () => {
      expect(hasRightForWeekendDiscount(new Date('2019-09-06'))).to.be.equal(
        false,
      );
    });
    it('given is the travel date 2019-sep-07', () => {
      expect(hasRightForWeekendDiscount(new Date('2019-09-07'))).to.be.equal(
        true,
      );
    });
  });

  describe('testing the functino defaultPrice', () => {
    it('given is a distance of 0km', () => {
      expect(defaultPrice(0)).to.be.equal(0);
    });
    it('given is a distance of 10km', () => {
      expect(defaultPrice(10)).to.be.equal(8);
    });
    it('given is a distance of 49km', () => {
      expect(defaultPrice(49)).to.be.equal(39.2);
    });
    it('given is a distance of 50km', () => {
      expect(defaultPrice(50)).to.be.equal(40);
    });
    it('given is a distance of 100km', () => {
      expect(defaultPrice(100)).to.be.equal(75);
    });
    it('given is a distance of 101km', () => {
      expect(defaultPrice(101)).to.be.equal(75.6);
    });
    it("given is a distance of -10km (let's look if we can make money ;-), based on a true story)", () => {
      expect(defaultPrice(-10)).to.be.equal(0);
    });
  });

  describe('testing function ticketPrice', () => {
    it("given is the birth date '1-jan-2010', travel date '1-sep-2019' and a distance of travel of 10 km", () => {
      expect(
        ticketPrice(new Date('2010-01-01'), new Date('2019-09-01'), 10),
      ).to.be.equal(5.2);
    });
    it("given is the birth date '1-jan-2010', travel date '1-sep-2019' and a distance of travel of 100 km", () => {
      expect(
        ticketPrice(new Date('2010-01-01'), new Date('2019-09-01'), 100),
      ).to.be.equal(48.75);
    });
    it("given is the birth date '2-jan-2010', travel date '1-sep-2019' and a distance of travel of 10 km", () => {
      expect(
        ticketPrice(new Date('2010-01-01'), new Date('2019-09-02'), 10),
      ).to.be.equal(5.6);
    });
    it("given is the birth date '2-jan-2010', travel date '1-sep-2019' and a distance of travel of 100 km", () => {
      expect(
        ticketPrice(new Date('2010-01-01'), new Date('2019-09-02'), 100),
      ).to.be.equal(52.5);
    });

    it("given is the birth date '1-okt-2000', travel date '1-sep-2019' and a distance of travel of 10 km", () => {
      expect(
        ticketPrice(new Date('2000-10-01'), new Date('2019-09-01'), 10),
      ).to.be.equal(4.8);
    });
    it("given is the birth date '1-okt-2000', travel date '1-sep-2019' and a distance of travel of 100 km", () => {
      expect(
        ticketPrice(new Date('2000-10-01'), new Date('2019-09-01'), 100),
      ).to.be.equal(45);
    });
    it("given is the birth date '2-okt-2000', travel date '1-sep-2019' and a distance of travel of 10 km", () => {
      expect(
        ticketPrice(new Date('2000-10-01'), new Date('2019-09-02'), 10),
      ).to.be.equal(8);
    });
    it("given is the birth date '2-okt-2000', travel date '1-sep-2019' and a distance of travel of 100 km", () => {
      expect(
        ticketPrice(new Date('2000-10-01'), new Date('2019-09-02'), 100),
      ).to.be.equal(75);
    });
  });
});
