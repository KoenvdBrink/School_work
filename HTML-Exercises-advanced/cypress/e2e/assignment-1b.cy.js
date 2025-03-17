/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-1b.html';

describe('Assignment 1b', () => {
    beforeEach(async () => {
        await cy.visit(htmlPageToBeTested);
    });

    afterEach(() => {
        if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
    });

    describe('1. Combining forms', () => {
        it('expect the page to contain a single form', () => {
            expect(Cypress.$('body form').length).to.equal(1, 'should contain a single form');
        });

        it('expect the form to have a single submit button', () => {
            expect(Cypress.$('form button').length).to.equal(1, 'should contain one button');
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
