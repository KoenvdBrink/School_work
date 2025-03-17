/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-05.html';

describe('Assignment 5', () => {
  let html;

  beforeEach(async () => {    
    await cy.visit(`/${htmlFileToBeTested}`);
    html = await utils.getHtmlText(htmlFileToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Testing on valid HTML', () => {
    it('should be valid html', () => {
      const { valid, message } = utils.isValidHtml(html);
      expect(valid, message).to.be.true;
    });
  });

  describe('2. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
