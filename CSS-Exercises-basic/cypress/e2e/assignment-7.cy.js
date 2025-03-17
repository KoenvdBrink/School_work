/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-7/index.html';

describe('Assignment 7', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Block width', () => {
    it('expect block to have default width on 480px screen', async () => {
      await cy.viewport(480, 600);
      expect(Cypress.$('.block').css('width')).to.equal(
        '250px',
        'should be default width on 480px screen',
      );
    });

    it('expect block to have 100% width on 479px screen', async () => {
      await cy.viewport(479, 600);
      expect(Cypress.$('.block').css('width')).to.equal(
        '479px',
        'should be 100% width on 479px screen',
      );
    });
  });

  describe('2. Block font size', () => {
    it('expect block to have default font size on 480px screen', async () => {
      await cy.viewport(480, 600);
      expect(Cypress.$('.block').css('font-size')).to.equal(
        '16px',
        'should be default font size on 480px screen',
      );
    });

    it('expect block to have larger font size on 479px screen', async () => {
      await cy.viewport(479, 600);
      expect(
        Number(Cypress.$('.block').css('font-size').slice(0, -2)),
      ).to.be.greaterThan(16, 'should be larger font size on 479px screen');
    });
  });

  describe('3. Paragraph hidden on small screens', () => {
    it('expect paragraph to be displayed on 480px screen', async () => {
      await cy.viewport(480, 600);
      expect(Cypress.$('p').css('display')).not.to.equal(
        'none',
        'should be displayed on 480px screen',
      );
    });

    it('expect paragraph not to be displayed on 479px screen', async () => {
      await cy.viewport(479, 600);
      expect(Cypress.$('p').css('display')).to.equal(
        'none',
        'should not be displayed on 479px screen',
      );
    });
  });

  describe('4. Paragraph hidden on large screens', () => {
    it('expect paragraph to be displayed on 799px screen', async () => {
      await cy.viewport(799, 600);
      expect(Cypress.$('p').css('display')).not.to.equal(
        'none',
        'should be displayed on 799px screen',
      );
    });

    it('expect paragraph not to be displayed on 800px screen', async () => {
      await cy.viewport(800, 600);
      expect(Cypress.$('p').css('display')).to.equal(
        'none',
        'should not be displayed on 800px screen',
      );
    });
  });

  describe('5. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
