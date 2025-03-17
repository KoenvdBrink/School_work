/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-2/index.html';

describe('Assignment 2', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Grids', () => {
    it('expect both groups of divs to be a grid', () => {
      Cypress.$('.responsive-grid').each((index, element) => {
        expect(Cypress.$(element).css('display')).to.equal(
          'grid',
          'should be grid',
        );
      });
    });
  });

  describe('2. Grid 1 template columns', () => {
    it('expect first group of divs to be divided 2-1-1', () => {
      const columns = Cypress.$('.responsive-grid:first-of-type')
        .css('grid-template-columns')
        .split(' ')
        .map((c) => Number(c.slice(0, -2)));
      expect(columns.length).to.equal(3, 'should have 3 columns');
      expect(columns[1]).to.equal(
        columns[0] / 2.0,
        'second column should be half of first column',
      );
      expect(columns[2]).to.equal(
        columns[1],
        'third column should be equal to second column',
      );
    });
  });

  describe('3. Grid 1 gaps', () => {
    it('expect first group of divs to have gaps between elements', () => {
      expect(
        Cypress.$('.responsive-grid:first-of-type').css('grid-gap'),
      ).not.to.include('normal', 'should be set to custom value');
    });
  });

  describe('4. Grid 1 row height', () => {
    it('expect first group of divs to have automatic row height, minimum 100px', () => {
      expect(
        Cypress.$('.responsive-grid:first-of-type').css('grid-auto-rows'),
      ).to.equal(
        'minmax(100px, auto)',
        'should be minimum 100px, maximum automatic',
      );
    });
  });

  // Test is broken, therefore skipping it.
  describe.skip('5. Grid 2 template columns', () => {
    let gap = 0;

    before(async () => {
      await cy.viewport(1000, 1000);
      gap = Number(
        Cypress.$('.responsive-grid:last-of-type')
          .css('grid-column-gap')
          .slice(0, -2),
      );
    });

    it('expect second group of divs to have three columns when 900px is available', async () => {
      await cy.viewport(916 + 2 * gap, 1000);
      const columns = Cypress.$('.responsive-grid:last-of-type').css(
        'grid-template-columns',
      );
      expect(columns).to.equal(
        '300px 300px 300px',
        'should have three columns at 900px',
      );
    });

    it('expect second group of divs to have two columns when 899px is available', async () => {
      await cy.viewport(915 + 2 * gap, 1000); // 1px less than minimum needed for 3 x 300px
      const columns = Cypress.$('.responsive-grid:last-of-type').css(
        'grid-template-columns',
      );
      expect(columns).to.match(
        /^(\d+(\.\d+)?){2}/,
        'should have two columns at 899px',
      );
    });
  });

  describe('6. Grid 2 gaps', () => {
    it('expect second group of divs to have gaps between elements', () => {
      expect(
        Cypress.$('.responsive-grid:last-of-type').css('grid-gap'),
      ).not.to.include('normal', 'should be set to custom value');
    });
  });

  describe('7. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
