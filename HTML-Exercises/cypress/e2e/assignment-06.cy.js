/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-06.html';

describe('Assignment 6', () => {
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

  describe('1. 1st level heading', () => {
    it('expect there to be a header', () => {
      expect(Cypress.$('body h1').is('h1'), 'should have a 1st level heading').to.be.true;
      expect(Cypress.$('body h1').text()).to.equal('Assignment 6');
    });
  });

  describe('2. Sub heading', () => {
    it('expect there to be a section', () => {
      cy.get('body section:nth-of-type(1)');
    });

    it('expect there to be a sub heading in that section', () => {
      expect(Cypress.$('body section:nth-of-type(1)').children().first().is('h2'), 'should have a sub-heading in the section').to.be.true;
    });
  });

  describe('3. Paragraph below the subheader', () => {
    it('expect there to be a paragraph after the sub-heading', () => {
      expect(Cypress.$('body section:nth-of-type(1) > h2').next().is('p'), 'should have a paragraph underneath the sub-heading').to.be.true;
    });

    it('expect the paragraph to contain at least 2 words', () => {
      expect(Cypress.$('body section:nth-of-type(1) > h2 + p').html(), 'should contain at least 2 words').to.match(/\w(<br>|\s)+\w/i);
    });
  });

  describe('7. Another sub-header and paragraph', () => {
    it('expect there to be a section in the body', () => {
      cy.get('body section:nth-of-type(2)');
    });

    it('expect there to be another sub heading inside the third section (of any other level heading than the 1st)', () => {
      expect(Cypress.$('body section:nth-of-type(2)').children().first().is('h2'), 'should have a sub-heading inside the third section').to.be.true;
    });

    it('expect there to be a paragraph after the sub-heading', () => {
      expect(Cypress.$('body section:nth-of-type(2)').children().first().next()
        .is('p'), 'should contain a paragraph after the second sub-heading').to.be.true;
    });
  });

  describe('8. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
