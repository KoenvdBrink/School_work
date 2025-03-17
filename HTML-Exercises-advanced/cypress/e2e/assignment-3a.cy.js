/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-3a.html';

describe('Assignment 3a', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Age', () => {
    it('expect age input field to have type number', () => {
      expect(Cypress.$('input#age').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input#age').attr('type')).to.equal('number', 'should have type number');
    });
  });

  describe('2. Date of birth', () => {
    it('expect date of birth input field to have type date', () => {
      expect(Cypress.$('input#dob').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input#dob').attr('type')).to.equal('date', 'should have type date');
    });
  });

  describe('3. Phone number', () => {
    it('expect phone number input field to have type tel', () => {
      expect(Cypress.$('input#phone').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input#phone').attr('type')).to.equal('tel', 'should have type tel');
    });
  });

  describe('4. Email address', () => {
    it('expect email address input field to have type email', () => {
      expect(Cypress.$('input#email').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input#email').attr('type')).to.equal('email', 'should have type email');
    });
  });

  describe('5. Favorite color', () => {
    it('expect favorite color input field to have type color', () => {
      expect(Cypress.$('input#color').attr('type'), 'should have type attribute').not.to.be.undefined;
      expect(Cypress.$('input#color').attr('type')).to.equal('color', 'should have type color');
    });
  });

  describe('6. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
