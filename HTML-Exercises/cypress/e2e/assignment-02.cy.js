/// <reference types="Cypress" />

import { getHtmlText, isValidHtml } from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-02.html';

describe('Assignment 2', () => {
  let html;

  beforeEach(async () => {
    await cy.visit(`/${htmlFileToBeTested}`);
    html = await getHtmlText(htmlFileToBeTested);
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') Cypress.runner.stop();
  });

  it('should be valid html', () => {
    const { valid, message } = isValidHtml(html);
    expect(valid, message).to.be.equal(true);
  });

  describe('1. Language attribute', () => {
    it('expect lang attribute on html element', () => {
      expect(Cypress.$('html').attr('lang'), 'should be present on html element').not.to.be.equal(undefined);
    });

    it('expect lang attribute to contain correct value for English', () => {
      expect(Cypress.$('html').attr('lang'), 'should contain correct value for English').to.match(/^(en|en-GB|en-US)$/);
    });
  });

  describe('2. Title attribute', () => {
    it('expect title attribute on p element', () => {
      expect(Cypress.$('main > p').attr('title'), 'should be present on p element').not.to.be.equal(undefined);
    });

    it('expect title attribute to consist of at least two words', () => {
      expect(Cypress.$('main > p').attr('title'), 'should consist of at least two words').to.contain(' ');
    });
  });

  describe('3. Style attribute', () => {
    it('expect non-empty style attribute on p element', () => {
      expect(Cypress.$('main > p').attr('style'), 'should not be empty').not.to.be.empty.equals(true);
    });
  });

  describe('4. Disabled attribute', () => {
    it('expect disabled attribute on button element', () => {
      expect(Cypress.$('body button').attr('disabled'), 'should be present on button element').not.to.be.undefined.equals(true);
    });
  });

  describe('5. Image element', () => {
    it('expect img element in body', () => {
      expect(Cypress.$('body img').is('img'), 'should be present in body').to.be.equals(true);
    });

    it('expect img element to have src attribute', () => {
      expect(Cypress.$('body img').attr('src'), 'should have required src attribute').not.to.be.empty.equals(true);
    });

    it('expect img element to have alt attribute', () => {
      expect(Cypress.$('body img').attr('alt'), 'should have required alt attribute').not.to.be.empty.equals(true);
    });
  });

  describe('6. Base element', () => {
    it('expect base element in head', () => {
      expect(Cypress.$('head > base').is('base'), 'should be present in head').to.be.equals(true);
    });

    it('expect href attribute on base element', () => {
      expect(Cypress.$('head > base').attr('href'), 'should be present on base element').not.to.be.undefined.equals(true);
    });

    it('expect href attribute to refer to online repository', () => {
      expect(Cypress.$('head > base').attr('href'), 'should refer to online repository').to.match(/^http/);
    });
  });

  describe('7. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
