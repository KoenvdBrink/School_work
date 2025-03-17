import { describe, it, expect } from 'vitest';
import { average, reward, getRewardText } from '../src/utils/oefening01_1b';

describe('JavaScript 01b - reward', () => {
  describe('testing the function average', () => {
    it('the given grades are 5, 5, 5', () => {
      expect(average(5, 5, 5)).to.be.equal(5);
    });
    it('the given grades are 6, 6, 6', () => {
      expect(average(6, 6, 6)).to.be.equal(6);
    });
    it('the given grades are 6, 8, 8', () => {
      expect(average(6, 8, 8)).to.be.equal(7.3);
    });
    it('the given grades are 6, 8, 9', () => {
      expect(average(6, 8, 9)).to.be.equal(7.7);
    });
    it('the given grades are 6.5, 8, 8', () => {
      expect(average(6.5, 8, 8)).to.be.equal(7.5);
    });
  });

  describe('testing the function reward', () => {
    it('the given grade is 0', () => {
      expect(reward(0)).to.be.equal(0);
    });
    it('the given grade is 5', () => {
      expect(reward(5)).to.be.equal(0);
    });
    it('the given grade is 6', () => {
      expect(reward(6)).to.be.equal(0);
    });
    it('the given grade is 7', () => {
      expect(reward(7)).to.be.equal(30);
    });
    it('the given grade is 7.5', () => {
      expect(reward(7.5)).to.be.equal(45);
    });
    it('the given grade is 10', () => {
      expect(reward(10)).to.be.equal(120);
    });
  });

  describe('testing the function getRewardText', () => {
    // these tests are not ESLINT complient to prevent students from looking up part
    // of the good solution.

    function totalereward(grade1, grade2, grade3) {
      return reward(grade1) + reward(grade2) + reward(grade3);
    }
    it('the given grades are 5, 5, 5', () => {
      expect(getRewardText(5, 5, 5)).to.be.equal(
        `My grades (with an average of ${ 
          average(5, 5, 5) 
          }) result in a reward €${ 
          totalereward(5, 5, 5) 
          }!`
      );
    });
    it('the given grades are 6, 6, 6', () => {
      expect(getRewardText(6, 6, 6)).to.be.equal(
        `My grades (with an average of ${ 
          average(6, 6, 6) 
          }) result in a reward €${ 
          totalereward(6, 6, 6) 
          }!`
      );
    });
    it('the given grades ares 6, 8, 8', () => {
      expect(getRewardText(6, 8, 8)).to.be.equal(
        `My grades (with an average of ${ 
          average(6, 8, 8) 
          }) result in a reward €${ 
          totalereward(6, 8, 8) 
          }!`
      );
    });
    it('the given grades are 6, 8, 9', () => {
      expect(getRewardText(6, 8, 9)).to.be.equal(
        `My grades (with an average of ${ 
          average(6, 8, 9) 
          }) result in a reward €${ 
          totalereward(6, 8, 9) 
          }!`
      );
    });
    it('the given grades are 6.5, 8, 8', () => {
      expect(getRewardText(6.5, 8, 8)).to.be.equal(
        `My grades (with an average of ${ 
          average(6.5, 8, 8) 
          }) result in a reward €${ 
          totalereward(6.5, 8, 8) 
          }!`
      );
    });
  });
});
