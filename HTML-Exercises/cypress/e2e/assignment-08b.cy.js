/// <reference types="Cypress" />

import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-08b.html';

describe('Assignment 8b', () => {
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

  describe('Navigation links', () => {
    const el = () => Cypress.$('a:contains("Link 1")');

    it('expect links to be in separate li elements', () => {
      expect(el().parent().is('li'), 'link 1 should be in li element').to.be.true;
      expect(el().next().is('a'), 'link 1 and 2 should not be in same li element').to.be.false;
      expect(Cypress.$('a:contains("Link 2")').parent().is('li'), 'link 2 should be in li element').to.be.true;
      expect(
        Cypress.$('a:contains("Link 2")').next().is('a'),
        'link 2 and 3 should not be in same li element',
      ).to.be.false;
      expect(Cypress.$('a:contains("Link 3")').parent().is('li'), 'link 3 should be in li element').to.be.true;
    });

    it('expect li elements to be in single ul element', () => {
      expect(el().parent().parent().is('ul'), 'should be in ul element').to.be.true;
      expect(el().parent().parent().children('li').length).to.equal(3, 'should be in single ul element');
    });

    it('expect ul element to be in nav element', () => {
      expect(el().parent().parent().parent()
        .is('nav'), 'should be in nav element').to.be.true;
    });

    it('expect nav element to be in header element', () => {
      expect(Cypress.$('nav').parent().is('header'), 'should be in header element').to.be.true;
    });
  });

  describe('Page title', () => {
    it('expect page title to be in header element', () => {
      expect(Cypress.$('h1').parent().is('header'), 'should be in header element').to.be.true;
    });
  });

  describe('Product title', () => {
    it('expect product title to be in main element', () => {
      expect(Cypress.$('main h2:contains("Product title")').is('h2'), 'should be in main element').to.be.true;
    });
  });

  describe('Product description', () => {
    it('expect product description to be in main element', () => {
      expect(Cypress.$('main p:contains("Product description")').is('p'), 'should be in main element').to.be.true;
    });
  });

  describe('Product image', () => {
    it('expect product image to be in main or aside element', () => {
      expect(
        Cypress.$('main img').is('img') || Cypress.$('aside img').is('img'),
        'should be in main or aside element',
      ).to.be.true;
    });
  });

  describe('Product specifications', () => {
    const el = () => Cypress.$('p:contains("Product specifications")');

    it('expect product specifications to be in section or aside element', () => {
      expect(
        el().parent().is('section') || el().parent().is('aside'),
        'should be in main section or aside element',
      ).to.be.true;
    });

    it('expect product specifications not to be in same element as product image', () => {
      expect(el().prev().is('img'), 'should not be in same element as product image').to.be.false;
    });
  });

  describe('Advertisement', () => {
    const el = () => Cypress.$('p:contains("ADVERTISEMENT")');

    it('expect advertisement to be in aside element', () => {
      expect(el().parent().is('aside'), 'should be in aside element').to.be.true;
    });

    it('expect advertisement not to be in same element as product specifications', () => {
      expect(el().prev().is('ul'), 'should not be in same element as product specifications').to.be.false;
    });
  });

  describe('Reviews', () => {
    const el = () => Cypress.$('h2:contains("Reviews")');

    it('expect reviews to be in section or aside element', () => {
      expect(
        el().parent().is('section') || el().parent().is('aside'),
        'should be in section or aside element',
      ).to.be.true;
    });

    it('expect reviews not to be in same element as advertisement', () => {
      expect(el().prev().is('p'), 'should not be in same element as advertisement').to.be.false;
    });

    it('expect reviews to be divided into three article elements', () => {
      expect(el().parent().children('article').length).to.equal(3, 'should contain three article elements');
    });
  });

  describe('Copyright information', () => {
    it('expect copyright information to be in footer element', () => {
      expect(Cypress.$('p:contains("©")').parent().is('footer'), 'should be in footer element').to.be.true;
    });
  });

  describe('General checks', () => {
    it('expect aside elements not to be nested', () => {
      expect(Cypress.$('aside').parent().is('aside'), 'aside should not be nested').to.be.false;
    });

    it('expect aside elements not to be in main', () => {
      expect(Cypress.$('aside').parent().is('main'), 'aside should not be in main').to.be.false;
    });

    it('expect all prescribed elements to have been used', () => {
      // All other prescribed elements are checked by the previous tests.
      expect(Cypress.$('section').is('section'), 'section should have been used').to.be.true;
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
