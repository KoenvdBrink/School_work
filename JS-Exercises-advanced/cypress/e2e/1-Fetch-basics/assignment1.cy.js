/// <reference types="cypress" />

const pageToTest = '/pages/assignment-1.html';

describe('Assignment 1', () => {
  beforeEach(() => {
    cy.intercept('https://dog.ceo/api/breeds/image/random').as('getDogImage');
    cy.visit(pageToTest);
    cy.wait('@getDogImage').its('response.statusCode').should('be.oneOf', [200, 304]);
  });

  describe('Image content', () => {
    it('should have a value for the image src', () => {
      cy.get('img').should('have.attr', 'src').should('not.be.empty');
    });
    it('should not show the smiley image', () => {
      cy.get('img').should('have.attr', 'src').should('not.be.equal', '../images/Smiley.svg.png');
    });

    it('should show an image', () => {
      cy.get('img').should(([img]) => {
        expect(img.complete).to.be.true;
      })
      .then(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0);
        expect(img.naturalHeight).to.be.greaterThan(0);
      });
    });
  });
} );