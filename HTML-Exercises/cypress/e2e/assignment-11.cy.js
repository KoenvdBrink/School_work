/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-11.html';

describe('Assignment 11', () => {
  let html;

  beforeEach(async () => {
    await cy.visit(`/${htmlFileToBeTested}`);
    html = await utils.getHtmlText(htmlFileToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  it('should be valid html', () => {
    const { valid, message } = utils.isValidHtml(html);
    expect(valid, message).to.be.true;
  });

  describe('1. Template', () => {
    it('expect template element in body', () => {
      expect(Cypress.$('main > template').is('template'), 'should be present in body').to.be.true;
    });
  });

  describe('2. First section inside template', () => {
    it('expect section in template', () => {
      const regExp = /<template>\s+<section>/;
      expect(regExp.test(html), 'should have section in template').to.be.true;
    });

    it('expect one section left in body', () => {
      expect(Cypress.$('main > section').length).to.equal(1, 'should have one section in body');
    });
  });

  describe('3. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
