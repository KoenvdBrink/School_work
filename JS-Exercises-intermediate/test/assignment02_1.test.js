import { describe, it, expect, beforeEach, test } from "vitest";

import {
  getArrayRef, addItem, getArrayCopy, isEqual, getLastItem, getArrayAsString, getFirstIndex,
  getArrayTail, getArrayHead, getSubArray, insertInto, remove 
} from '../src/utils/assignment02_1';

describe('JS02-1 - Array basics', () => {
  beforeEach(() => {
  });

  describe('Testing function: getArrayRef', () => {
    it('de functie zou een array terug moeten geven', () => {
      expect(getArrayRef([])).to.be.a('array');
    });

    it('de functie zou de gegeven array terug moeten geven', () => {
      const testArray = [1, 2, 3];
      expect(getArrayRef(testArray)).to.be.equal(testArray);
    });
  });

  describe('Testing function: addItem', () => {
    it('toevoegen van een enkel item', () => {
      const testArray = [];
      expect(addItem(testArray, 'Test')).to.be.equal(1);
      expect(testArray[0]).to.be.equal('Test');
    });
  });

  describe('Testing function: getArrayCopy', () => {
    it('de functie zou een nieuwe array object terug moeten geven', () => {
      const testArray = ['Testing'];
      const resultArray = getArrayCopy(testArray);
      expect(resultArray).to.be.a('array');
      expect(resultArray).not.to.be.equal(testArray);
    });
    it('de arrays zouden inhoudelijk gelijk moeten zijn', () => {
      const testArray = ['Testing'];
      const resultArray = getArrayCopy(testArray);
      expect(resultArray.length).to.be.equal(testArray.length);
      expect(resultArray[0]).to.be.equal('Testing');
    });
    it('wijzigen van de nieuwe array zou geen effect op de originele array moeten hebben', () => {
      const testArray = ['Testing'];
      const resultArray = getArrayCopy(testArray);
      testArray[0] = 'Hallo';
      expect(resultArray[0]).to.be.equal('Testing');
    });
  });

  describe('Testing function: isEqual', () => {
    it('testen of twee arrays inhoudelijk gelijk zijn', () => {
      const testArray = [1, 2, 3];
      let vergelijkArray = [1, 2, 3];
      expect(isEqual(testArray, vergelijkArray)).to.be.true;
      vergelijkArray = ['1', '2', '3'];
      expect(isEqual(testArray, vergelijkArray)).to.be.false;
      vergelijkArray = [3, 2, 1];
      expect(isEqual(testArray, vergelijkArray)).to.be.false;
    });
    it('testen of twee lege arrays inhoudelijk gelijk zijn', () => {
      const testArray = [];
      const vergelijkArray = [];
      expect(isEqual(testArray, vergelijkArray)).to.be.true;
    });
    it('testen met twee arrays die niet even lang zijn', () => {
      const testArray = [1, 2, 3];
      const vergelijkArray = [1, 2, 3, 4];
      expect(isEqual(testArray, vergelijkArray)).to.be.false;
      expect(isEqual(vergelijkArray, testArray)).to.be.false;
    });
  });

  describe('Testing function: getLastItem', () => {
    it('testen met een leeg array', () => {
      const testArray = [];
      expect(getLastItem(testArray)).to.be.equal(undefined);
    });

    it('testen met een gevulde array', () => {
      const testArray = [1, 2, 3];
      expect(getLastItem(testArray)).to.be.equal(3);
    });
  });

  describe('Testing function: getArrayAsString', () => {
    it('test met alleen array van getallen', () => {
      const testArray = [1, 2, 3];
      expect(getArrayAsString(testArray)).to.be.equal('1,2,3');
    });

    it('test met alleen array van strings', () => {
      const testArray = ['1', '2', '3'];
      expect(getArrayAsString(testArray)).to.be.equal('1,2,3');
    });

    it('test met een array die getallen en strings bevat', () => {
      const testArray = ['1', 2, '3'];
      expect(getArrayAsString(testArray)).to.be.equal('1,2,3');
    });
  });

  describe('Testing function: getFirstIndex', () => {
    it('test met een lege array', () => {
      const testArray = [];
      expect(getFirstIndex(testArray, 2)).to.be.equal(-1);
    });

    it('test met een array waarin het te zoeken item niet voorkomt', () => {
      const testArray = ['a', 'b', 'c', 'bb', ' b ', 'c', 'f'];
      expect(getFirstIndex(testArray, 'd')).to.be.equal(-1);
    });

    it('test met een array waarin het te zoeken item een keer voorkomt', () => {
      const testArray = ['a', 'b', 'c', 'bb', ' b ', 'c', 'f'];
      expect(getFirstIndex(testArray, 'b')).to.be.equal(1);
    });

    it('test met een array waarin het te zoeken item vaker voorkomt', () => {
      const testArray = ['a', 'b', 'c', 'bb', ' b ', 'c', 'f'];
      expect(getFirstIndex(testArray, 'c')).to.be.equal(2);
    });
  });

  describe('Testing function: getTailArray', () => {
    it('test met een lege gegeven Array', () => {
      const testArray = [];
      expect(getArrayTail(testArray, -1)).to.be.a('array');
      expect(getArrayTail(testArray, -1).toString()).to.be.equal('');
      expect(getArrayTail(testArray, 0).toString()).to.be.equal('');
      expect(getArrayTail(testArray, 2).toString()).to.be.equal('');
    });

    it('test die een lege tail array zou moeten opleveren', () => {
      const testArray = [1, 2, 3];
      expect(getArrayTail(testArray, 3)).to.be.a('array');
      expect(getArrayTail(testArray, 3).toString()).to.be.equal('');
      expect(getArrayTail(testArray, 4).toString()).to.be.equal('');
    });

    it('test die een deel van de array zou moeten opleveren', () => {
      const testArray = [1, 2, 3];
      expect(getArrayTail(testArray, 2)).to.be.a('array');
      expect(getArrayTail(testArray, 2).toString()).to.be.equal('3');
      expect(getArrayTail(testArray, 1).toString()).to.be.equal('2,3');
    });

    it('test die de gehele array zou moeten opleveren', () => {
      const testArray = [1, 2, 3];
      expect(getArrayTail(testArray, 0)).to.be.a('array');
      expect(getArrayTail(testArray, 0).toString()).to.be.equal('1,2,3');
    });
  });

  describe('Testing function: getArrayHead', () => {
    it('test met een lege gegeven Array', () => {
      const testArray = [];
      expect(getArrayHead(testArray, -1)).to.be.a('array');
      expect(getArrayHead(testArray, -1).toString()).to.be.equal('');
      expect(getArrayHead(testArray, 0).toString()).to.be.equal('');
      expect(getArrayHead(testArray, 2).toString()).to.be.equal('');
    });

    it('test die een lege Head array zou moeten opleveren', () => {
      const testArray = [1, 2, 3];
      expect(getArrayHead(testArray, 0)).to.be.a('array');
      expect(getArrayHead(testArray, 0).toString()).to.be.equal('');
    });

    it('test die een deel van de array zou moeten opleveren', () => {
      const testArray = [1, 2, 3];
      expect(getArrayHead(testArray, 1)).to.be.a('array');
      expect(getArrayHead(testArray, 1).toString()).to.be.equal('1');
      expect(getArrayHead(testArray, 2).toString()).to.be.equal('1,2');
    });

    it('test die de gehele array zou moeten opleveren', () => {
      const testArray = [1, 2, 3];
      expect(getArrayHead(testArray, 3)).to.be.a('array');
      expect(getArrayHead(testArray, 3).toString()).to.be.equal('1,2,3');
      expect(getArrayHead(testArray, 10).toString()).to.be.equal('1,2,3');
    });
  });

  describe('Testing function: getSubArray', () => {
    it('test met een lege array', () => {
      const testArray = [1, 2, 3];
      expect(getSubArray(testArray, 0, 0)).to.be.a('array');
      expect(getSubArray(testArray, 0, 0).toString()).to.be.equal('');
      expect(getSubArray(testArray, 1, 1).toString()).to.be.equal('');
    });

    it('tests die het begin van een array (getArrayHead) zouden moeten opleveren', () => {
      const testArray = [1, 2, 3, 4, 5];
      expect(getSubArray(testArray, 0, 1)).to.be.a('array');
      expect(getSubArray(testArray, 0, 1).toString()).to.be.equal('1');
      expect(getSubArray(testArray, 0, 3).toString()).to.be.equal('1,2,3');
    });

    it('tests die het eind van een array (getArrayTail) zouden moeten opleveren', () => {
      const testArray = [1, 2, 3, 4, 5];
      expect(getSubArray(testArray, 1, testArray.length)).to.be.a('array');
      expect(getSubArray(testArray, 1, testArray.length).toString()).to.be.equal('2,3,4,5');
      expect(getSubArray(testArray, testArray.length, testArray.length).toString()).to.be.equal('');
    });

    it('tests die een deel van de array moeten opleveren, excl het begin / eind van een array', () => {
      const testArray = [1, 2, 3, 4, 5];
      expect(getSubArray(testArray, 1, 3)).to.be.a('array');
      expect(getSubArray(testArray, 1, 3).toString()).to.be.equal('2,3');
      expect(getSubArray(testArray, 1, 4).toString()).to.be.equal('2,3,4');
    });
  });

  describe('Testing function: insertInto', () => {
    it('test door een item aan een lege array toe te voegen', () => {
      const testArray = [];
      const resultArray = insertInto(testArray, 'hallo', 0);
      expect(resultArray[0]).to.be.equal('hallo');
      expect(testArray.length).to.be.equal(0);
    });

    it('test door een item aan het einde van een gevulde array toe te voegen', () => {
      const testArray = ['hallo'];
      const resultArray = insertInto(testArray, 'world', 1);
      expect(resultArray[0]).to.be.equal('hallo');
      expect(resultArray[1]).to.be.equal('world');
      expect(testArray.length).to.be.equal(1);
    });

    it('test door een item aan het begin van een gevulde array toe te voegen', () => {
      const testArray = ['world'];
      const resultArray = insertInto(testArray, 'hello', 0);
      expect(resultArray[0]).to.be.equal('hello');
      expect(resultArray[1]).to.be.equal('world');
      expect(testArray.length).to.be.equal(1);
    });

    it('test door een item midden in een gevulde array een string toe te voegen', () => {
      const testArray = ['hello', 'world'];
      const resultArray = insertInto(testArray, 'JS', 1);
      expect(resultArray[0]).to.be.equal('hello');
      expect(resultArray[1]).to.be.equal('JS');
      expect(resultArray[2]).to.be.equal('world');
      expect(testArray.length).to.be.equal(2);
    });

    it('test door een item midden in een gevulde array een number toe te voegen', () => {
      const testArray = [1, 3];
      const resultArray = insertInto(testArray, 2, 1);
      expect(resultArray[0]).to.be.equal(1);
      expect(resultArray[1]).to.be.equal(2);
      expect(resultArray[2]).to.be.equal(3);
      expect(testArray.length).to.be.equal(2);
    });
  });

  describe('Testing function: remove', () => {
    it('test of het verwijderen van een item uit een lege array correct wordt afgehandeld', () => {
      const testArray = [];
      expect(remove(testArray, 5)).to.be.a('array');
      expect(remove(testArray, 5).toString()).to.be.equal('');
    });
    it('test of het verwijderen van een item uit een array met slechts een element "remove([7], 0)" een lege array opleverd', () => {
      const testArray = [7];
      const delArray = remove(testArray, 0);
      expect(delArray.toString()).to.be.equal('');
    });
    it('test of de functie een pure function is', () => {
      const testArray = [7];
      const delArray = remove(testArray, 0);
      expect(testArray.length).to.be.equal(1);
    });
    it('test of het verwijderen van een item uit een array die meer dan een element bevat correct verloopt "remove([1,2,7,3,4],2)=[1,2,3,4]', () => {
      const testArray = [1, 2, 7, 3, 4];
      const delArray = remove(testArray, 2);
      expect(testArray.length).to.be.equal(5);
      expect(delArray.toString()).to.be.equal('1,2,3,4');
    });
  });
});
