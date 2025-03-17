/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-4.html';

describe('Assignment 4', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Action', () => {
    it('expect first form to have action static/data.html', () => {
      expect(Cypress.$('body form:first-of-type').attr('action'), 'should have action attribute')
        .not.to.be.undefined;
      expect(Cypress.$('body form:first-of-type').attr('action')).to.equal(
        'static/data.html',
        'should have action static/data.html',
      );
    });
  });

  describe('2. Method', () => {
    it('expect second form to have method post', () => {
      expect(Cypress.$('body form:nth-of-type(2)').attr('method'), 'should have method attribute')
        .not.to.be.undefined;
      expect(Cypress.$('body form:nth-of-type(2)').attr('method').toLowerCase()).to.equal(
        'post',
        'should have method post',
      );
    });
  });

  describe('3. Autocomplete', () => {
    it('expect third form to have autocomplete off', () => {
      expect(Cypress.$('body form:nth-of-type(3)').attr('autocomplete'), 'should have autocomplete attribute')
        .not.to.be.undefined;
      expect(Cypress.$('body form:nth-of-type(3)').attr('autocomplete').toLowerCase()).to.equal(
        'off',
        'should have autocomplete off',
      );
    });
  });

  describe('5. Encoding type', () => {
    it('expect fifth form to have enctype multipart/form-data', () => {
      expect(Cypress.$('body form:last-of-type').attr('enctype'), 'should have enctype attribute')
        .not.to.be.undefined;
      expect(Cypress.$('body form:last-of-type').attr('enctype').toLowerCase()).to.equal(
        'multipart/form-data',
        'should have enctype multipart/form-data',
      );
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
