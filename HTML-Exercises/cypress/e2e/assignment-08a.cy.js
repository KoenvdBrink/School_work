/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-08a.html';

describe('Assignment 8a', () => {
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

  describe('1. Paragraph', () => {
    it('expect there to be a paragraph', () => {
      expect(Cypress.$('main > h1').next()[0].nodeName).to.equal('P', 'should have a paragraph');
    });

    it('expect the paragraph to contain at least 4 words', () => {
      expect(Cypress.$('main > h1 + p').text(), 'should contain at least 4 words').to.match(/(\w+\s+){3,}\w+/i);
    });
  });

  describe('2. Emphasizing', () => {
    it('expect there to be an emphasized word', () => {
      expect(Cypress.$('main > h1 + p').children('em').length).to.equal(1, 'should have an emphasized tag');
      expect(Cypress.$('main > h1 + p > em').text(), 'should have an emphasized word').not.to.be.empty;
    });
  });

  describe('3. Important', () => {
    it('expect there to be an important word', () => {
      expect(Cypress.$('main > h1 + p').children('strong').length).to.equal(1, 'should have an important tag');
      expect(Cypress.$('main > h1 + p > strong').text(), 'should have an important word').not.to.be.empty;
    });
  });

  describe('4. Less important', () => {
    it('expect there to be a less important word', () => {
      expect(Cypress.$('main > h1 + p').children('small').length).to.equal(1, 'should have a less important tag');
      expect(Cypress.$('main > h1 + p > small').text(), 'should have a less important word').not.to.be.empty;
    });
  });

  describe('5. Quote', () => {
    it('expect there to be a quoted word', () => {
      expect(Cypress.$('main > h1 + p').children('q').length).to.equal(1, 'should have a quote tag');
      expect(Cypress.$('main > h1 + p > q').text(), 'should have a quoted word').not.to.be.empty;
    });
  });

  describe('6. Abbreviation', () => {
    it('expect there to be an abbreviated word', () => {
      expect(Cypress.$('main > h1').text()).to.equal('This is assignment 8a of FEP1', 'should have the correct heading text');
      expect(Cypress.$('main > h1').children('abbr').length).to.equal(1, 'should have an abbreviated tag');
      expect(Cypress.$('main > h1 > abbr').text()).to.equal('FEP', 'should have an abbreviated word');
      expect(Cypress.$('main > h1 > abbr').attr('title'), 'should have an explanation of what the abbreviation means').not.to.be.empty;
    });
  });

  describe('7. Blockquote', () => {
    it('expect there to be a blockquote', () => {
      expect(Cypress.$('main').children('blockquote').length).to.equal(1, 'should have a blockquote tag');
      expect(Cypress.$('main > blockquote').text(), 'should have contents inside the blockquote').not.to.be.empty;
    });
  });

  describe('8. Allowed paragraph children', () => {
    it('expect paragraphs to only contain phrasing elements', () => {
      const { element, valid } = utils.containsOnlyPhrasingContent(html, 'p');
      if (!valid) throw new Error(`should not have a ${element.nodeName} child element for a paragraph`);
    });
  });

  describe('9. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
