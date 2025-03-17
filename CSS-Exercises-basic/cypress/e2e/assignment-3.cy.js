/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-3/index.html';

describe('Assignment 3', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Comment', () => {
    it('expect h1 not to be red', () => {
      expect(Cypress.$('h1').css('color')).to.equal(
        'rgb(0, 0, 0)',
        'should be black',
      );
    });

    it('expect CSS file to contain comment', async () => {
      const cssText = await (
        await fetch('../../../public/pages/assignment-3/styles.css')
      ).text();
      expect(cssText).to.match(/\/\*.+\*\//, 'should contain comment');
    });
  });

  describe('2. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
