/// <reference types="cypress" />

describe('Assignment 3ab', () => {
  beforeEach(() => {
    const pageToTest = '/pages/assignment-3ab.html';
    cy.visit(pageToTest);
  });

  describe('Assignment 3a', () => {
    describe('List of cats', () => {
      it('should show a list of cats', () => {
        cy.get('ul').children().should('have.length.above', 3); 
      });

      it('should show a list of cats with the correct names', () => {
        cy.get('ul').children().should('contain', 'Abyssinian');
        cy.get('ul').children().should('contain', 'Aegean');
        cy.get('ul').children().should('contain', 'American Bobtail');
      });

      it('should have a correct link for the first cat', () => {
        cy.get('ul').children().first().find('a').should('have.attr', 'href').should('be.equal', './assignment-3c.html?cat=Abyssinian');
      });
    });
    describe('Assignment 3b', () => {
      describe('Number of cats', () => {
        it('should show the correct number of cats', () => {
          cy.get('p').should('contain', 'There are 20 cats in the list.');
        });
      });
    });
  });
});

describe('Assignment 3c', () => {
  beforeEach(() => {
    const pageToTest = '/pages/assignment-3c.html?cat=Abyssinian';
    cy.intercept('https://api.api-ninjas.com/v1/cats?name=Abyssinian').as('getCats');
    cy.visit(pageToTest);
    cy.wait('@getCats').its('response.statusCode').should('be.oneOf', [200, 304]);
  });

  describe('Cat details', () => {
    it('should show an image', () => {
      cy.get('img').should(([img]) => {
        expect(img.complete).to.be.true;
      })
      .then(([img]) => {
        expect(img.naturalWidth).to.be.greaterThan(0);
        expect(img.naturalHeight).to.be.greaterThan(0);
      });
    });

    it('should show the correct name', () => {
      cy.get('figcaption').should('contain', 'Abyssinian');
    });

    it('should show the correct description', () => {
      cy.get('p').should('contain', 'Kat afkomstig uit Southeast Asia');
    });
  });
});
