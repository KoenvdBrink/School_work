/// <reference types="Cypress" />

const htmlFileToBeTested = 'public/pages/assignment-03.html';

describe('Assignment 3', () => {

  beforeEach(() => {
    cy.visit(`/${htmlFileToBeTested}`);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Testing for comments',() => {
    it('should have a comment within the <body> tag', () => {
      // Any comment below will be in the <body> tag
      cy.document().then((doc) => {
        const comments = [...doc.body.childNodes]
          .filter((node) => node.nodeName === '#comment')
          .map((commentNode) => commentNode.data);
        expect(comments.length > 0, 'There should be at least one comment').to.be.equal(true);
      });
    });
  });

  describe('2. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlFileToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
