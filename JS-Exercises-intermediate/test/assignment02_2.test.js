import { describe, it, expect, beforeEach, test } from "vitest";

import {
  addToQueue, getLiFoItem, getFiFoItem, sortDescAscList, getAllLongTextItems, sum, getTotalPrice,
  getAllIndexes, calculate, getReceiptTotal, 
} from '../src/utils/assignment02_2';

describe('JS02-2 - Advanced Arrays & Objects', () => {
  beforeEach(() => {
  });

  describe('Testing: addToQueue', () => {
    it('item aan een lege queue toevoegen', () => {
      const testArray = [];
      const resultArray = addToQueue(testArray, 'Hello');
      expect(resultArray).to.be.a('array');
      expect(resultArray.toString()).to.be.equal('Hello');
      expect(resultArray.length).to.be.equal(1);
    });

    it('functie is een pure function', () => {
      const testArray = [];
      const resultArray = addToQueue(testArray, 'Hello');
      expect(resultArray.length).to.be.equal(1);
      expect(testArray.length).to.be.equal(0);
    });

    it('item aan een gevulde queue toevoegen', () => {
      const testArray = ['a', 1, 'b', 3, 'd', 7];
      const resultArray = addToQueue(testArray, 'c');
      expect(resultArray.toString()).to.be.equal('a,1,b,3,d,7,c');
      expect(testArray.toString()).to.be.equal('a,1,b,3,d,7');
    });
  });

  describe('Testing: getLiFoItem', () => {
    it('item uit een lege lijst ophalen', () => {
      const testArray = [];
      const lifoItem = getLiFoItem(testArray);
      expect(testArray).to.be.a('array');
      expect(testArray.length).to.be.equal(0);
      expect(lifoItem).to.be.a('undefined');
    });
    it('item uit een gevulden lijst ophalen', () => {
      const testArray = [1, 2, 3, 4];
      const lifoItem = getLiFoItem(testArray);
      expect(testArray).to.be.a('array');
      expect(testArray.length).to.be.equal(3);
      expect(testArray.toString()).to.be.equal('1,2,3');
      expect(lifoItem).to.be.a('number');
      expect(lifoItem).to.be.equal(4);
    });
    it('queue via addToQueue vullen en met lifoItem weer leeg halen', () => {
      let testArray = [];
      testArray = addToQueue(testArray, 1);
      testArray = addToQueue(testArray, 3);
      testArray = addToQueue(testArray, 4);
      testArray = addToQueue(testArray, 5);
      expect(testArray.toString()).to.be.equal('1,3,4,5');
      expect(getLiFoItem(testArray)).to.be.equal(5);
      expect(getLiFoItem(testArray)).to.be.equal(4);
    });
  });

  describe('Testing: getFiFoItem', () => {
    it('item uit een lege lijst ophalen', () => {
      const testArray = [];
      const fifoItem = getFiFoItem(testArray);
      expect(testArray).to.be.a('array');
      expect(testArray.length).to.be.equal(0);
      expect(fifoItem).to.be.a('undefined');
    });
    it('item uit een gevulden lijst ophalen', () => {
      const testArray = [1, 2, 3, 4];
      const fifoItem = getFiFoItem(testArray);
      expect(testArray).to.be.a('array');
      expect(testArray.length).to.be.equal(3);
      expect(testArray.toString()).to.be.equal('2,3,4');
      expect(fifoItem).to.be.a('number');
      expect(fifoItem).to.be.equal(1);
    });
    it('queue via addToQueue vullen en met FiFoItem weer leeg halen', () => {
      let testArray = [];
      testArray = addToQueue(testArray, 1);
      testArray = addToQueue(testArray, 3);
      testArray = addToQueue(testArray, 4);
      testArray = addToQueue(testArray, 5);
      expect(testArray.toString()).to.be.equal('1,3,4,5');
      expect(getFiFoItem(testArray)).to.be.equal(1);
      expect(getFiFoItem(testArray)).to.be.equal(3);
    });
  });

  describe('Testing: sortDescAscList', () => {
    it('sorteren van een lege lijst', () => {
      const testArray = [];
      const resultArray = sortDescAscList(testArray);
      expect(resultArray).to.be.a('array');
      expect(resultArray.length).to.be.equal(0);
      expect(testArray.length).to.be.equal(0);
    });

    it('sorteren van een lijst met nummers', () => {
      const testArray = [3, 1, 5, 2, 4, 1];
      const resultArray = sortDescAscList(testArray);
      expect(resultArray).to.be.a('array');
      expect(resultArray.toString()).to.be.equal('5,4,3,2,1,1');
    });

    it('functie zou een pure function moeten zijn', () => {
      const testArray = [3, 1, 5, 2, 4, 1];
      const resultArray = sortDescAscList(testArray);
      expect(testArray.toString()).to.be.equal('3,1,5,2,4,1');
    });

    it('sorteren van een lijst met strings met kleine letters', () => {
      const testArray = ['b', 'a', 'd', 'c'];
      const resultArray = sortDescAscList(testArray);
      expect(resultArray).to.be.a('array');
      expect(resultArray.toString()).to.be.equal('d,c,b,a');
    });

    it('sorteren van een lijst met strings met kleine en grote letters', () => {
      const testArray = ['b', 'a', 'B', 'A', 'd', 'c'];
      const resultArray = sortDescAscList(testArray);
      expect(resultArray).to.be.a('array');
      expect(resultArray.toString()).to.be.equal('d,c,b,a,B,A');
    });
  });

  describe('Testing: getAllLongTextItems', () => {
    it('testen dat het resultaat een array is', () => {
      const testArray = [];
      const resultArray = getAllLongTextItems(testArray, 3);
      expect(resultArray).to.be.a('array');
    });

    it('testen dat de functie een pure function is', () => {
      const testArray = ['Hallo', 'dit', 'is', 'een', 'voorbeeld'];
      const resultArray = getAllLongTextItems(testArray, 3);
      expect(resultArray.toString()).to.be.equal('Hallo,voorbeeld');
      expect(testArray.toString()).to.be.equal('Hallo,dit,is,een,voorbeeld');
    });

    it('testen met een lege array en diverse maxLengtes', () => {
      const testArray = [];
      expect(getAllLongTextItems(testArray, 3).toString()).to.be.equal('');
      expect(getAllLongTextItems(testArray, 0).toString()).to.be.equal('');
      expect(getAllLongTextItems(testArray, -3).toString()).to.be.equal('');
    });

    it('testen met een array waarvan alle items langer zijn dan de maxLength', () => {
      const testArray = ['Hallo', 'dit', 'is', 'een', 'voorbeeld'];
      expect(getAllLongTextItems(testArray, 1)).to.be.a('array');
      expect(getAllLongTextItems(testArray, 1).toString()).to.be.equal('Hallo,dit,is,een,voorbeeld');
      expect(getAllLongTextItems(testArray, 0).toString()).to.be.equal('Hallo,dit,is,een,voorbeeld');
      expect(getAllLongTextItems(testArray, -1).toString()).to.be.equal('Hallo,dit,is,een,voorbeeld');
    });

    it('testen met een array waarvan alle items korter zijn dan de maxLength', () => {
      const testArray = ['Hallo', 'dit', 'is', 'een', 'voorbeeld'];
      const resultArray = getAllLongTextItems(testArray, 10);
      expect(resultArray).to.be.a('array');
      expect(resultArray.toString()).to.be.equal('');
    });

    it('testen met een array waarvan de items gedeeltelijk aan de maxLength voldoen', () => {
      const testArray = ['Hallo', 'dit', 'is', 'een', 'voorbeeld'];
      const resultArray = getAllLongTextItems(testArray, 3);
      expect(resultArray).to.be.a('array');
      expect(resultArray.toString()).to.be.equal('Hallo,voorbeeld');
    });
  });

  describe('Testing: sum', () => {
    it('testen met een lege array', () => {
      const testArray = [];
      const result = sum(testArray);
      expect(result).to.be.a('number');
      expect(result).to.be.equal(0);
    });

    it('testen met [1, 2, 3, 4]', () => {
      const testArray = [1, 2, 3, 4];
      const result = sum(testArray);
      expect(result).to.be.a('number');
      expect(result).to.be.equal(10);
    });

    it('testen dat het een pure function is', () => {
      const testArray = [1, 2, 3, 4];
      const result = sum(testArray);
      expect(testArray.toString()).to.be.equal('1,2,3,4');
    });
  });

  describe('Testing: getTotalPrice', () => {
    it('test dat met een lege kassabon', () => {
      const testArray = [];
      const result = getTotalPrice(testArray);
      expect(result).to.be.equal(0);
    });

    it('test dat met een enkele bestelregel op de kassabon', () => {
      let testArray = [['Muntdrop', 1, 1.59]];
      let result = getTotalPrice(testArray);
      expect(result).to.be.equal(1.59);

      testArray = [['Muntdrop', 2, 1.50]];
      result = getTotalPrice(testArray);
      expect(result).to.be.equal(3);
    });

    it('test dat met een gevulde kassabon', () => {
      const testArray = [['Engelse drop', 2, 1.43], ['Muntdrop', 1, 1.59], ['Honingdrop', 2, 1.65]];
      const result = getTotalPrice(testArray);
      expect(result).to.be.equal(7.75);
    });

    it('test dat de functie een pure function is', () => {
      const testArray = [['Engelse drop', 2, 1.43], ['Muntdrop', 1, 1.59], ['Honingdrop', 2, 1.65]];
      const testString = testArray.toString();
      const result = getTotalPrice(testArray);
      expect(testArray.toString()).to.be.equal(testString);
    });
  });

  describe('Testing: getReceiptTotal', () => {
    it('test dat met een lege kassabon', () => {
      const testArray = [];
      const result = getReceiptTotal(testArray);
      expect(result).to.be.equal(0);
    });

    it('test dat met een enkele bestelregel op de kassabon', () => {
      let testArray = [{
        naam: 'Muntdrop', aantal: 1, prijs: 1.59,
      }];
      let result = getReceiptTotal(testArray);
      expect(result).to.be.equal(1.59);

      testArray = [{
        naam: 'Muntdrop', aantal: 2, prijs: 1.50,
      }];
      result = getReceiptTotal(testArray);
      expect(result).to.be.equal(3);
    });

    it('test dat met een gevulde kassabon', () => {
      const testArray = [
        { naam: 'Engelse drop', aantal: 2, prijs: 1.43 },
        { naam: 'Muntdrop', aantal: 1, prijs: 1.59 },
        { naam: 'Honingdrop', aantal: 2, prijs: 1.65 }];
      const result = getReceiptTotal(testArray);
      expect(result).to.be.equal(7.75);
    });

    it('test dat het een pure function is', () => {
      const testArray = [
        { naam: 'Engelse drop', aantal: 2, prijs: 1.43 },
        { naam: 'Muntdrop', aantal: 1, prijs: 1.59 },
        { naam: 'Honingdrop', aantal: 2, prijs: 1.65 }];
      const testArrayString = JSON.stringify(testArray);
      const result = getReceiptTotal(testArray);
      expect(JSON.stringify(testArray)).to.be.equal(testArrayString);
    });
  });

  describe('Testing: getAllIndexes', () => {
    it('testen met een lege array', () => {
      const testArray = [];
      const expectedResultArray = [];
      expect(JSON.stringify(getAllIndexes(testArray, 2))).to.be
        .equal(JSON.stringify(expectedResultArray));
    });

    it('test gevulde array waarin de te zoeken item slechts een enkele keer voorkomt', () => {
      const testArray = [1, 2, 3, 2, 5, 6, 1, 2, 9];
      const expectedResultArray = [2];
      expect(JSON.stringify(getAllIndexes(testArray, 3))).to.be
        .equal(JSON.stringify(expectedResultArray));
    });

    it('test gevulde array waarin de te zoeken item vaker voorkomt', () => {
      const testArray = [1, 2, 3, 2, 5, 6, 1, 2, 9];
      const expectedResultArray = [1, 3, 7];
      expect(JSON.stringify(getAllIndexes(testArray, 2))).to.be
        .equal(JSON.stringify(expectedResultArray));
    });

    it('test dat de functie een pure function is', () => {
      const testArray = [1, 2, 3, 2, 5, 6, 1, 2, 9];
      const testArrayString = JSON.stringify(testArray);
      const resultArray = getAllIndexes(testArray, 2);
      expect(JSON.stringify(testArray)).to.be
        .equal(testArrayString);
    });
  });

  describe('Testing: calculate', () => {
    it('testing met Math.min en [2, 1, 5, 9]', () => {
      const testArray = [2, 1, 5, 9];
      expect(calculate(Math.min, testArray)).to.be.equal(1);
    });
    it('testing met Math.max en [2, 1, 5, 9]', () => {
      const testArray = [2, 1, 5, 9];
      expect(calculate(Math.max, testArray)).to.be.equal(9);
    });
  });
});
