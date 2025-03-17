/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-09.html';

describe('Assignment 9', () => {
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

  describe('1. Table', () => {
    it('expect table element in section', () => {
      expect(Cypress.$('main > table').is('table'), 'should be present in section').to.be.true;
    });
  });

  describe('2. Table head and body', () => {
    it('expect thead element to be first child of table', () => {
      expect(Cypress.$('table > *:first-child').is('thead'), 'should be first child of table').to.be.true;
    });

    it('expect tbody element to be second child of table', () => {
      expect(Cypress.$('table > *:nth-child(2)').is('tbody'), 'should be second child of table').to.be.true;
    });
  });

  describe('3. Table head row', () => {
    it('expect one tr element in thead', () => {
      expect(Cypress.$('table > thead > tr').length).to.equal(1, 'should contain one row');
    });
  });

  describe('4. Table head cells', () => {
    it('expect three th elements in table head tr', () => {
      expect(Cypress.$('table > thead > tr > th').length).to.equal(3, 'should contain three th cells');
    });
  });

  describe('5. Table body rows and cells', () => {
    it('expect three tr elements in tbody', () => {
      expect(Cypress.$('table > tbody > tr').length).to.equal(3, 'should contain three rows');
    });

    it('expect td elements in table body trs', () => {
      // Allow making the exercises step by step: after step 5, there are 9 td elements; at the end, there are 6.
      expect(Cypress.$('table > tbody > tr > td').length).to.be.at.least(6, 'should contain at least six td cells');
      expect(Cypress.$('table > tbody > tr > td').length).to.be.at.most(9, 'should contain at most nine td cells');
    });
  });

  describe('6. Row span', () => {
    it('expect one td element in last tr', () => {
      expect(Cypress.$('table > tbody > tr:last-child > td').length).to.equal(1, 'should contain one td cell');
    });

    it('expect colspan="3" attribute on td element', () => {
      expect(Cypress.$('table > tbody > tr:last-child > td').attr('colspan')).to.equal('3', 'should have colspan="3" attribute');
    });
  });

  describe('7. Column span', () => {
    it('expect three td elements in first tr', () => {
      expect(Cypress.$('table > tbody > tr:first-child > td').length).to.equal(3, 'should contain three td cells');
    });

    it('expect two td elements in second tr', () => {
      expect(Cypress.$('table > tbody > tr:nth-child(2) > td').length).to.equal(2, 'should contain two td cells');
    });

    it('expect rowspan="2" attribute on one td element', () => {
      expect(Cypress.$('table > tbody > tr:first-child > td[rowspan]').length).to.equal(1, 'should be present on one td cell');
      expect(Cypress.$('table > tbody > tr:first-child > td[rowspan]').attr('rowspan')).to.equal('2', 'should have rowspan="2" attribute');
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
