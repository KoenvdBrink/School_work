/// <reference types="Cypress" />
import * as utils from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-04.html';

describe('Assignment 4', () => {
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
    expect(valid, message).to.be.equal(true);
  });

  describe('1. Header', () => {
    it('expect header element to be first child of body', () => {
      expect(Cypress.$('body > *:first-child').is('header'), 'should be first child of body').to.be.equal(true);
    });
  });

  describe('2. Navigation', () => {
    it('expect nav element to be first child of header', () => {
      expect(Cypress.$('header > *:first-child').is('nav'), 'should be first child of header').to.be.equal(true);
    });

    it('expect nav element to contain at least three links', () => {
      const numLinks = Cypress.$('header > nav a').length;
      expect(numLinks).to.be.at.least(3, 'should contain at least three links');
      expect(Cypress.$('header > nav a[href]').length).to.equal(numLinks, 'should have href attribute');
    });
  });

  describe('3. Unordered list', () => {
    it('expect ul element in nav', () => {
      expect(Cypress.$('header > nav ul').is('ul'), 'should be present in nav').to.be.equal(true);
    });

    it('expect one li element in ul for every link', () => {
      const numLinks = Cypress.$('header > nav a').length;
      expect(Cypress.$('header > nav ul > li').length).to.equal(numLinks, 'should equal number of links');
    });
  });

  describe('4. Footer', () => {
    it('expect footer element to be last child of body', () => {
      expect(Cypress.$('body > *:last-child').is('footer'), 'should be last child of body').to.be.equal(true);
    });

    it('expect footer to contain one paragraph of text', () => {
      expect(Cypress.$('footer > p').length).to.equal(1, 'should contain one p element');
      expect(Cypress.$('footer > p').text(), 'should contain text').not.to.be.empty;
    });
  });

  describe('5. Sections', () => {
    it('expect two sections between header and footer', () => {
      // No need to check that sections are between header and footer, because header is first-child and footer is last-child.
      expect(Cypress.$('body > section').length).to.equal(2, 'should contain two section elements');
    });
  });

  describe('6. First section', () => {
    it('expect main element in first section', () => {
      expect(Cypress.$('body > section:first-of-type > main').is('main'), 'should contain main element').to.be.true;
    });

    it('expect aside element in first section', () => {
      expect(Cypress.$('body > section:first-of-type > aside').is('aside'), 'should contain aside element').to.be.true;
    });
  });

  describe('7. Main content', () => {
    it('expect heading to be first child of main', () => {
      expect(Cypress.$('main > *:first-child').is('h1, h2, h3, h4, h5, h6'), 'should contain heading').to.be.true;
    });

    it('expect p element in main', () => {
      expect(Cypress.$('main > p').is('p'), 'should contain p element').to.be.true;
      expect(Cypress.$('main > p').text(), 'should contain text').not.to.be.empty;
    });
  });

  describe('8. Aside content', () => {
    it('expect blockquote element in aside', () => {
      expect(Cypress.$('aside > blockquote').is('blockquote'), 'should contain blockquote element').to.be.true;
      expect(Cypress.$('aside > blockquote').text(), 'should contain text').not.to.be.empty;
    });
  });

  describe('9. Second section', () => {
    it('expect heading to be first child of second section', () => {
      expect(Cypress.$('body > section:nth-of-type(2) > *:first-child').is('h1, h2, h3, h4, h5, h6'), 'should contain heading').to.be.true;
    });

    it('expect img element in second section', () => {
      expect(Cypress.$('body > section:nth-of-type(2) img').is('img'), 'should contain img element').to.be.true;
    });

    it('expect img element to have src attribute', () => {
      expect(Cypress.$('body > section:nth-of-type(2) img').attr('src'), 'should have required src attribute').not.to.be.empty;
    });
  });

  describe('10. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
