/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-4/index.html';

describe('Assignment 4', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Section', () => {
    it('expect section to be #eb0050 (kind of red)', () => {
      expect(Cypress.$('section').css('color')).to.equal(
        'rgb(235, 0, 80)',
        'should be red',
      );
    });
  });

  describe('2. Section span', () => {
    it('expect section span to be blue', () => {
      expect(Cypress.$('section span').css('color')).to.equal(
        'rgb(0, 0, 255)',
        'should be blue',
      );
    });
  });

  describe('3. Hard to change', () => {
    it('expect first hard to change span to be green', () => {
      expect(Cypress.$('p span').eq(0).css('color')).to.equal(
        'rgb(0, 128, 0)',
        'should be green',
      );
    });

    it('expect CSS file not to contain !important', async () => {
      const cssText = await (
        await fetch('../../../src/assignment-4/styles.css')
      ).text();
      expect(cssText).not.to.include(
        '!important',
        'should not contain !important',
      );
    });
  });

  describe('4. Hard to change too', () => {
    it('expect second hard to change span to be green', () => {
      expect(Cypress.$('p span').eq(1).css('color')).to.equal(
        'rgb(0, 128, 0)',
        'should be green',
      );
    });
  });

  describe('5. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
