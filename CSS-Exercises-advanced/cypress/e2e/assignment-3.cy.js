/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-3/index.html';

describe('Assignment 3', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  const getTransformRule = async () => {
    const doc = await cy.document();
    const rules = [...doc.styleSheets[0].cssRules]
      .map((r) => r.style.transform)
      .filter((r) => r);
    expect(rules.length).to.equal(1, 'should have one transform rule');
    return rules[0];
  };

  describe('1. Translate, rotate', () => {
    it('expect div to be translated and rotated', async () => {
      const transform = await getTransformRule();
      expect(
        transform.startsWith('translate(100px, -25px) rotate(45deg)'),
        'should start with translate(100px, -25px) rotate(45deg)',
      ).to.be.true;
    });
  });

  describe('3. Transform origin', () => {
    it('expected transform origin to be top left', () => {
      expect(Cypress.$('.transform').css('transform-origin')).to.equal(
        '0px 0px',
        'should be top left',
      );
    });
  });

  describe('4. Scale', () => {
    it('expect div to be scaled', async () => {
      const transform = await getTransformRule();
      expect(transform.endsWith('scale(2)'), 'should end with scale(2)').to.be
        .true;
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
