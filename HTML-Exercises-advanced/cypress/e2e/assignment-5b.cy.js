/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-5b.html';

describe('Assignment 5b', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('2. Gender', () => {
    it('2a. expect radio buttons to be linked to fieldset legend', () => {
      const gender = Cypress.$('legend:contains("Gender")');
      const legendId = gender.attr('id');
      expect(legendId, 'should have id attribute').not.to.be.undefined;
      gender.parent().find('input[type="radio"]').each((index, element) => {
        const labelledBy = Cypress.$(element).attr('aria-labelledby');
        expect(labelledBy, 'should have aria-labelledby attribute').not.to.be.undefined;
        expect(labelledBy.startsWith(legendId), 'should have aria-labelledby attribute starting with legend id')
          .to.be.true;
      });
    });

    it('2b. expect radio buttons to be linked to own labels', () => {
      const fieldset = Cypress.$('legend:contains("Gender")').parent();
      fieldset.find('input[type="radio"]').each((index, element) => {
        const labelId = fieldset.children('label').eq(index).attr('id');
        expect(labelId, 'should have id attribute').not.to.be.undefined;
        expect(
          Cypress.$(element).attr('aria-labelledby').endsWith(` ${labelId}`),
          'should have aria-labelledby attribute ending with label id',
        ).to.be.true;
      });
    });
  });

  describe('3. Pizza', () => {
    it('3a. expect checkboxes to be linked to fieldset legend', () => {
      const pizza = Cypress.$('legend:contains("Favorite pizza toppings?")');
      const legendId = pizza.attr('id');
      expect(legendId, 'should have id attribute').not.to.be.undefined;
      pizza.parent().find('input[type="checkbox"]').each((index, element) => {
        const labelledBy = Cypress.$(element).attr('aria-labelledby');
        expect(labelledBy, 'should have aria-labelledby attribute').not.to.be.undefined;
        expect(labelledBy.startsWith(legendId), 'should have aria-labelledby attribute starting with legend id')
          .to.be.true;
      });
    });

    it('3b. expect checkboxes to be linked to own labels', () => {
      const fieldset = Cypress.$('legend:contains("Favorite pizza toppings?")').parent();
      fieldset.find('input[type="checkbox"]').each((index, element) => {
        const labelId = fieldset.children('label').eq(index).attr('id');
        expect(labelId, 'should have id attribute').not.to.be.undefined;
        expect(
          Cypress.$(element).attr('aria-labelledby').endsWith(` ${labelId}`),
          'should have aria-labelledby attribute ending with label id',
        ).to.be.true;
      });
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
