/// <reference types="cypress" />

import { getHtmlText } from '../support/utils';

const htmlFileToBeTested = 'public/pages/assignment-01.html';

describe('Assignment-01', () => {

  describe('1. Valid HTML structure', () => {

    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
    })

    it('expect there to be a valid doctype', () => {
      cy.document().then(doc => {
        expect(doc.doctype !== undefined).to.eq(true);
        expect(doc.doctype?.name).to.eq('html');
      });
    });

    it('expect to have a html tag', async () => {
      const html = await getHtmlText(htmlFileToBeTested);

      // expect(regExpPattern.test(html), 'there should be a valid html open tag').to.be.true;
      const regExpPattern = /<html[^<>]*>/i;
      expect(regExpPattern.test(html)).to.be.equal(true);
      expect(html.toLowerCase(), 'the html tag should be closed').to.contain('</html>');
      expect(html.toLowerCase().endsWith('</html>'), 'the html tag should be closed on the last line').to.be.equal(true);
    });

    it('expect top level html tags to be present', async () => {
      let html = await getHtmlText(htmlFileToBeTested);
      expect(html.toLowerCase(), 'should contain a head open tag').to.contain('<head>');
      expect(html.toLowerCase(), 'should contain a head close tag').to.contain('</head>');

      const regExpPattern = /<body[^<>]*>/i;
      expect(regExpPattern.test(html), 'should contain a body open tag').to.be.equal(true);
      expect(html.toLowerCase(), 'should contain a body close tag').to.contain('</body>');

      expect(html.toLowerCase().indexOf('<head>') < html.toLowerCase().indexOf('</head>'), 'should have a correct head open tag and head close tag order').to.be.equal(true);
      expect(html.toLowerCase().indexOf('<body') < html.toLowerCase().indexOf('</body>'), 'should have a correct body open tag and body close tag order').to.be.equal(true);
      expect(html.toLowerCase().indexOf('<head>') < html.toLowerCase().indexOf('<body'), 'should have a correct head and body tag order').to.be.equal(true);

      html = html
        .replace(/<head>[\W\w]*<\/head>/g, '')
        .replace(/<body[\W\w]*<\/body>/g, '');

      expect(html.match(/<html[^<>]*>([\W\w]*)<\/html>/i)[1].trim(), 'there should be no other top level tags than head and body within the html tag').to.equal('');
    });

    it('expect a valid head and body tags as well as a correct nesting', async () => {
      let html = await getHtmlText(htmlFileToBeTested);
      html = html.toLowerCase();
      const htmlOpenTagIndex = html.indexOf('<html');
      const htmlCloseTagIndex = html.indexOf('</html>');
      const headOpenTagIndex = html.indexOf('<head>');
      const headCloseTagIndex = html.indexOf('</head>');
      const bodyOpenTagIndex = html.indexOf('<body');
      const bodyCloseTagIndex = html.indexOf('</body>');

      expect(htmlOpenTagIndex, 'There should be a HTML-tag').not.to.be.equal(-1);
      expect(htmlCloseTagIndex, 'There should be a closing HTML-tag').not.to.be.equal(-1);
      expect(headOpenTagIndex, 'There should be a HEAD-tag').not.to.be.equal(-1);
      expect(headCloseTagIndex, 'There should be a closing HEAD-tag').not.to.be.equal(-1);
      expect(bodyOpenTagIndex, 'There should be a BODY-tag').not.to.be.equal(-1);
      expect(headCloseTagIndex, 'There should be a closing BODY-tag').not.to.be.equal(-1);

      expect(htmlOpenTagIndex < headOpenTagIndex, 'The HTML-tag should be defined before the HEAD-tag').to.be.equal(true);
      expect(headCloseTagIndex < bodyOpenTagIndex, 'The HEAD-tag should be close before opening the BODY Tag').to.be.equal(true);
      expect(bodyCloseTagIndex < htmlCloseTagIndex, 'The BODY-tag should be closed before the closing of the HTML-tag').to.be.equal(true);
    });

    it('expect a valid html tag', () => {
      cy.htmlvalidate();
    });
  });

  describe('2. Valid HTML5 encoding', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
    });

    it('expect there to be a meta tag with the character set of the document', () => {
      cy.get('head')
        .find('meta').should('have.attr', 'charset')
        .and('match', /UTF-(8|16|32)|ASCII|ANSI|ISO-8859-(1|15)|Windows-1252|Shift_JIS/i);
    });
  });

  describe('3. Expected Content is still there', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
    });

    it('expect there to be a "Hello HTML!" text on the page', () => {
      cy.get('body').contains('Hello HTML!');
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