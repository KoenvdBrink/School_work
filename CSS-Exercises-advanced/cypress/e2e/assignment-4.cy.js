/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-4/index.html';

describe('Assignment 4', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  const getCssStyleRule = async (selector) => {
    const doc = await cy.document();
    const rules = [...doc.styleSheets[0].cssRules].filter((r) => r.selectorText.includes(selector));
    expect(rules.length).to.equal(1, `should have ${selector} rule`);
    return rules[0];
  };

  describe('1. Hover width', () => {
    it('expect width to be 300px on hover', async () => {
      const hover = await getCssStyleRule('.transition:hover');
      expect(hover.style.width).to.equal('300px', 'should be 300px');
    });
  });

  describe('2. Width transition', () => {
    it('expect 1s transition on width', () => {
      expect(Cypress.$('.transition').css('transition')).to.include(
        'width 1s',
        'should include width 1s',
      );
    });
  });

  describe('3. Linear transition', () => {
    it('expect width transition to be linear', () => {
      expect(Cypress.$('.transition').css('transition')).to.include(
        'width 1s linear',
        'should be linear',
      );
    });
  });

  describe('5. Hover background color', () => {
    it('expect background color to be salmon on hover', async () => {
      const hover = await getCssStyleRule('.transition:hover');
      expect(hover.style.backgroundColor).to.equal(
        'salmon',
        'should be salmon',
      );
    });
  });

  describe('6. Background color transition', () => {
    it('expect 0.5s transition on background color', () => {
      expect(Cypress.$('.transition').css('transition')).to.include(
        'background-color 0.5s',
        'should include background-color 0.5s',
      );
    });
  });

  describe('7. Hover top margin', () => {
    it('expect top margin to be 50px on hover', async () => {
      const hover = await getCssStyleRule('.transition:hover');
      expect(hover.style.marginTop).to.equal('50px', 'should be 50px');
    });
  });

  describe('8. Margin transition', () => {
    it('expect 1s transition on margin', () => {
      expect(Cypress.$('.transition').css('transition')).to.include(
        'margin 1s',
        'should include margin 1s',
      );
    });
  });

  describe('11. Margin transition delay', () => {
    it('expect 0.5s delay on margin transition', () => {
      expect(Cypress.$('.transition').css('transition')).to.match(
        /margin 1s [a-z-]+ 0\.5s/,
        'should include margin 1s <timing-function> 0.5s',
      );
    });
  });

  describe('12. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
