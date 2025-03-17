/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-3b.html';

describe('Assignment 3b', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Product id', () => {
    it('expect product id input field to have type hidden', () => {
      expect(Cypress.$('input[name="productId"]').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input[name="productId"]').attr('type')).to.equal('hidden', 'should have type hidden');
    });
  });

  describe('2. Password', () => {
    it('expect password input field to have type password', () => {
      expect(Cypress.$('input#password').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input#password').attr('type')).to.equal('password', 'should have type password');
    });
  });

  describe('3. File', () => {
    it('expect file input field to have type file', () => {
      expect(Cypress.$('input[name="file"]').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input[name="file"]').attr('type')).to.equal('file', 'should have type file');
    });
  });

  describe('4. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
