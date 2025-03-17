/// <reference types="cypress" />

const pageToTest = '/pages/assignment-2.html';

describe('Assignment 2', () => {
  beforeEach(() => {
    cy.intercept('https://dog.ceo/api/breeds/list/all').as('getDogBreeds');
    cy.visit(pageToTest);
    cy.wait('@getDogBreeds').its('response.statusCode').should('be.oneOf', [200, 304]);
  });

  describe('Section', () => {
    it('should fetch the API', () => {
      cy.get('section').should('be.visible');
    });
    it('should show a list of Terriers', () => {
      cy.get('#breeds').contains('["american","australian","bedlington","border","cairn","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","welsh","westhighland","wheaten","yorkshire"]');
    });
  });
} );