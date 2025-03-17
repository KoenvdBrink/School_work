import { describe, it, expect } from 'vitest';

import {
  cleanUpInput, rotateText, reverseText, removeLastWord, getIntroText,
} from '../src/utils/oefening01_4';

describe('JavaScript 01 - Strings', () => {
  describe('testing the function cleanUpInput', () => {
    it('using \'Hallo\'', () => {
      expect(cleanUpInput('Hallo')).to.be.equal('hallo');
    });
    it('using \'  Hallo   \'', () => {
      expect(cleanUpInput('   Hallo   ')).to.be.equal('hallo');
    });
    it('using \' Hello World   \'', () => {
      expect(cleanUpInput(' Hello World   ')).to.be.equal('hello world');
    });
  });

  describe('testing the function rotateText', () => {
    it('using the parameters (\'Hallo \', true)', () => {
      expect(rotateText('Hallo ', true)).to.be.equal('allo H');
    });
    it('using the parameters (\'allo H\', true)', () => {
      expect(rotateText('allo H', true)).to.be.equal('llo Ha');
    });
    it('using the parameters (\'llo Ha\', true)', () => {
      expect(rotateText('llo Ha', true)).to.be.equal('lo Hal');
    });
    it('using the parameters (\'lo Hal\', true)', () => {
      expect(rotateText('lo Hal', true)).to.be.equal('o Hall');
    });
    it('using the parameters (\'o Hall\', true)', () => {
      expect(rotateText('o Hall', true)).to.be.equal(' Hallo');
    });
    it('using the parameters (\' Hallo\', true)', () => {
      expect(rotateText(' Hallo', true)).to.be.equal('Hallo ');
    });
    it('using the parameters (\'Hallo \', false)', () => {
      expect(rotateText('Hallo ', false)).to.be.equal(' Hallo');
    });
    it('using the parameters (\' Hallo\', false)', () => {
      expect(rotateText(' Hallo', false)).to.be.equal('o Hall');
    });
    it('using the parameters (\'o Hall\', false)', () => {
      expect(rotateText('o Hall', false)).to.be.equal('lo Hal');
    });
    it('using the parameters (\'lo Hal\', false)', () => {
      expect(rotateText('lo Hal', false)).to.be.equal('llo Ha');
    });
    it('using the parameters (\'llo Ha\', false)', () => {
      expect(rotateText('llo Ha', false)).to.be.equal('allo H');
    });
    it('using the parameters (\'allo H\', false)', () => {
      expect(rotateText('allo H', false)).to.be.equal('Hallo ');
    });
    it('using the parameters (\'\', false)', () => {
      expect(rotateText('', false)).to.be.equal('');
    });
    it('using the parameters (\'\', true)', () => {
      expect(rotateText('', true)).to.be.equal('');
    });
  });

  describe('testing the function reverseText', () => {
    it('using the parameters \'\'', () => {
      expect(reverseText('')).to.be.equal('');
    });
    it('using the parameters \'A\'', () => {
      expect(reverseText('A')).to.be.equal('A');
    });
    it('using the parameters \'Hallo\'', () => {
      expect(reverseText('Hallo')).to.be.equal('ollaH');
    });
  });

  describe('testing the function removeLastWord', () => {
    it('using the parameter \'\'', () => {
      expect(removeLastWord('')).to.be.equal('');
    });
    it('using the parameter \'A\'', () => {
      expect(removeLastWord('A')).to.be.equal('A');
    });
    it('using the parameter \'Hallo\'', () => {
      expect(removeLastWord('Hallo')).to.be.equal('Hallo');
    });
    it('using the parameter \'This is a text with multiple words\'', () => {
      expect(
        removeLastWord('This is a text with multiple words'),
      ).to.be.equal('This is a text with multiple');
    });
  });

  describe('testing the function getIntroText', () => {
    it(' using the parameter \'\'', () => {
      expect(getIntroText('', 0)).to.be.equal('...');
    });
    it(' using the parameter \'This course uses JavaScript, HTML and CSS. The most important knowledge for a Front-End Developer.\'', () => {
      expect(
        getIntroText(
          'This course uses JavaScript, HTML and CSS. The most important knowledge for a Front-End Developer.',
          14,
        ),
      ).to.be.equal('This course...');
    });
    it(' using the parameter \'This course uses JavaScript, HTML and CSS. The most important knowledge for a Front-End Developer.\'', () => {
      expect(
        getIntroText(
          'This course uses JavaScript, HTML and CSS. The most important knowledge for a Front-End Developer.',
          17,
        ),
      ).to.be.equal('This course uses...');
    });
    it(' using the parameter \'This course uses JavaScript, HTML and CSS. The most important knowledge for a Front-End Developer.\'', () => {
      expect(
        getIntroText(
          'This course uses JavaScript, HTML and CSS. The most important knowledge for a Front-End Developer.',
          43,
        ),
      ).to.be.equal('This course uses JavaScript, HTML and CSS....');
    });
    it(' using the parameter \'This course uses JavaScript, HTML and CSS.\'', () => {
      expect(
        getIntroText(
          'This course uses JavaScript, HTML and CSS.',
          43,
        ),
      ).to.be.equal('This course uses JavaScript, HTML and CSS.');
    });
  });
});
