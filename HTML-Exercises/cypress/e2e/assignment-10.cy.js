/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-10.html';

describe('Assignment 10', () => {
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

  describe('1. Dialog', () => {
    it('expect dialog element to be first child of body', () => {
      expect(Cypress.$('body > *:first-child').is('dialog'), 'should be first child of body').to.be.true;
    });
  });

  describe('2. Open attribute', () => {
    it('expect open attribute on dialog element', () => {
      expect(Cypress.$('dialog').attr('open'), 'should be present on dialog element').not.to.be.undefined;
    });
  });

  describe('3. First section', () => {
    it('expect section element in dialog', () => {
      expect(Cypress.$('dialog section').is('section'), 'should be present in dialog').to.be.true;
    });

    it('expect heading to be first child of section', () => {
      expect(Cypress.$('dialog section > *:first-child').is('h1, h2, h3, h4, h5, h6'), 'should contain heading').to.be.true;
    });

    it('expect p element in section', () => {
      expect(Cypress.$('dialog section > p').is('p'), 'should contain p element').to.be.true;
    });

    it('expect button element in section', () => {
      expect(Cypress.$('dialog section > button').is('button'), 'should contain button element').to.be.true;
    });
  });

  describe('4. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
