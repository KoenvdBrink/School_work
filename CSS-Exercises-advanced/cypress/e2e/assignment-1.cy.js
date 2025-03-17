/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-1/index.html';

describe('Assignment 1', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Columns', () => {
    it('expect first group of divs to have 3 columns', () => {
      expect(Cypress.$('.responsive--multicol').css('column-count')).to.equal(
        '3',
        'should have 3 columns',
      );
    });
  });

  describe('2. Column children', () => {
    it('expect first group of divs to have 5 children', () => {
      expect(
        Cypress.$('.responsive--multicol').children('div').length,
      ).to.equal(5, 'should have 5 children');
    });
  });

  describe('3. Flexbox', () => {
    it('expect second group of divs to be a flexbox', () => {
      expect(Cypress.$('.responsive--flexbox').css('display')).to.equal(
        'flex',
        'should be flex',
      );
    });
  });

  describe('4. Flex grow', () => {
    it('expect divs in second group to flex grow', () => {
      Cypress.$('.responsive--flexbox *').each((index, element) => {
        expect(Cypress.$(element).css('flex-grow')).to.equal(
          '1',
          'should have flex grow 1',
        );
      });
    });
  });

  describe('5. Flexbox children', () => {
    it('expect second group of divs to have 5 children', () => {
      expect(Cypress.$('.responsive--flexbox').children('div').length).to.equal(
        5,
        'should have 5 children',
      );
    });
  });

  describe('6. Grid', () => {
    it('expect third group of divs to be a grid', () => {
      expect(Cypress.$('.responsive--grid').css('display')).to.equal(
        'grid',
        'should be grid',
      );
    });
  });

  describe('7. Grid template columns', () => {
    it('expect third group of divs to be divided equally', () => {
      expect(
        Cypress.$('.responsive--grid').css('grid-template-columns'),
      ).to.match(/^(\d+px ?){3}$/, 'should be divided equally');
    });
  });

  describe('8. Grid children', () => {
    it('expect third group of divs to have 5 children', () => {
      expect(Cypress.$('.responsive--grid').children('div').length).to.equal(
        5,
        'should have 5 children',
      );
    });
  });

  describe('9. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
