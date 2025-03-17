/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-07.html';

describe('Assignment 7', () => {
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

  describe('Unordered list', () => {
    const listSelector = 'body section:nth-of-type(1) > ul';

    it('should have an unordered list inside of the first section', () => {
      expect(Cypress.$('body section:nth-of-type(1)').children().length).to.equal(1, 'should have a child element');
      expect(Cypress.$('body section:nth-of-type(1)').children()[0].nodeName).to.equal('UL', 'should have an unordered list as child');
    });

    it('should have 3 list items', () => {
      expect(Cypress.$(listSelector).children().length).to.equal(3, 'should have 3 children');
      expect(Cypress.$(listSelector).children('li').length).to.equal(3, 'should have 3 list items');
    });

    it('should not have empty list items', () => {
      Cypress.$(listSelector).find('li')
        .each((i, listItemEl) => {
          expect(listItemEl.textContent, `The list item at position ${i + 1} may not be empty`).to.not.be.empty;
        });
    });
  });

  describe('Ordered list', () => {
    const listSelector = 'body section:nth-of-type(2) > ol';

    it('should have an ordered list inside of the second section', () => {
      expect(Cypress.$('body section:nth-of-type(2)').children().length).to.equal(1, 'should have a child element');
      expect(Cypress.$('body section:nth-of-type(2)').children()[0].nodeName).to.equal('OL', 'should have an ordered list as child');
    });

    it('should have 4 list items', () => {
      expect(Cypress.$(listSelector).children().length).to.equal(4, 'should have 4 children');
      expect(Cypress.$(listSelector).children('li').length).to.equal(4, 'should have 4 list items');
    });

    it('should not have empty list items', () => {
      Cypress.$(listSelector).find('li')
        .each((i, listItemEl) => {
          expect(listItemEl.textContent, `The list item at position ${i + 1} may not be empty`).to.not.be.empty;
        });
    });
  });

  describe('Description list', () => {
    const listSelector = 'body section:nth-of-type(3) > dl';

    it('should have a description list inside of the third section', () => {
      expect(Cypress.$('body section:nth-of-type(3)').children().length).to.equal(1, 'should have a child element');
      expect(Cypress.$('body section:nth-of-type(3)').children()[0].nodeName).to.equal('DL', 'should have a description list as child');
    });

    it('should have 2 list items', () => {
      expect(Cypress.$(listSelector).children().length).to.equal(4, 'should have 4 children');
      expect(Cypress.$(listSelector).children('dt').length).to.equal(2, 'should have 2 list items');
    });

    it('should have 2 descriptions', () => {
      expect(Cypress.$(listSelector).children().length).to.equal(4, 'should have 4 children');
      expect(Cypress.$(listSelector).children('dd').length).to.equal(2, 'should have 2 descriptions');
    });

    it('should not have empty list items', () => {
      Cypress.$(listSelector).find('dt')
        .each((i, listItemEl) => {
          expect(listItemEl.textContent, `The list item at position ${i + 1} may not be empty`).to.not.be.empty;
        });
    });

    it('should not have empty descriptions', () => {
      Cypress.$(listSelector).find('dd')
        .each((i, listItemEl) => {
          expect(listItemEl.textContent, `The description at position ${i + 1} may not be empty`).to.not.be.empty;
        });
    });

    it('each <dt> should be followed by a <dd> tag', () => {
      expect(Cypress.$(`${listSelector} dt`).next().is('dd')).to.be.true;
    });

    it('each <dd> should be preceded by a <dt> tag', () => {
      expect(Cypress.$(`${listSelector} dd`).prev().is('dt')).to.be.true;
    });
  });

  describe('Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
