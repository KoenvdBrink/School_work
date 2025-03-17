/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-2/index.html';

describe('Assignment 2', () => {
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

  describe('1. Heading 1', () => {
    it('expect h1 to be red', () => {
      expect(Cypress.$('h1').css('color')).to.equal(
        'rgb(255, 0, 0)',
        'should be red',
      );
    });
  });

  describe('2. Paragraph with class', () => {
    it('expect p with class to be green', () => {
      expect(Cypress.$('p.my-class').css('color')).to.equal(
        'rgb(0, 128, 0)',
        'should be green',
      );
    });
  });

  describe('3. Paragraph with id', () => {
    it('expect p with id to be purple', () => {
      expect(Cypress.$('p#my-id').css('color')).to.equal(
        'rgb(128, 0, 128)',
        'should be purple',
      );
    });
  });

  describe('4. Paragraph with title', () => {
    it('expect p with title to be orange', () => {
      expect(Cypress.$('p[title]').css('color')).to.equal(
        'rgb(255, 165, 0)',
        'should be orange',
      );
    });
  });

  describe('5. All texts', () => {
    it('expect all texts to be italic', () => {
      Cypress.$('h1, h2, h3, h4, h5, h6, p, span').each((index, element) => {
        expect(Cypress.$(element).css('font-style')).to.equal(
          'italic',
          'should be italic',
        );
      });
    });
  });

  describe('6. All headings', () => {
    it('expect all headings to be underlined', () => {
      Cypress.$('h1, h2, h3, h4, h5, h6').each((index, element) => {
        expect(Cypress.$(element).css('text-decoration-line')).to.equal(
          'underline',
          'should be underline',
        );
      });
    });
  });

  describe('7. First sibling', () => {
    it('expect first sibling of h2 to be struck through', () => {
      expect(Cypress.$('h2 + span').css('text-decoration-line')).to.equal(
        'line-through',
        'should be line-through',
      );
    });
  });

  describe('8. All siblings', () => {
    it('expect all siblings of h4 to be bold', () => {
      Cypress.$('h4 ~ span').each((index, element) => {
        expect(Cypress.$(element).css('font-weight')).to.equal(
          '700',
          'should be bold',
        );
      });
    });
  });

  describe('9. Child paragraph', () => {
    it('expect child paragraph to be yellow', () => {
      expect(Cypress.$('section > span').css('color')).to.equal(
        'rgb(255, 255, 0)',
        'should be yellow',
      );
    });

    it('expect deeper paragraphs not to be yellow', () => {
      Cypress.$('section > * > span').each((index, element) => {
        expect(Cypress.$(element).css('color')).to.equal(
          'rgb(0, 0, 0)',
          'should be black',
        );
      });
    });
  });

  describe('10. Nested paragraphs', () => {
    it('expect nested paragraphs to have grey background', () => {
      Cypress.$('section span').each((index, element) => {
        expect(Cypress.$(element).css('background-color')).to.equal(
          'rgb(128, 128, 128)',
          'should be grey',
        );
      });
    });
  });

  describe('11. Hover', () => {
    // Cypress can't trigger hover events for CSS (only JS), so we need to inspect the stylesheet
    // to test this step.
    it('expect h5 to be cyan on hover', async () => {
      const rule = await getCssStyleRule('h5:hover');
      expect(rule.style.color).to.equal('cyan', 'should be cyan');
    });
  });

  describe('12. First letter', () => {
    // jQuery cannot access CSS of first letter, so we need to inspect the stylesheet to test this
    // step.
    it('expect first letter of h6 to be light blue', async () => {
      const rule = await getCssStyleRule('h6::first-letter');
      expect(rule.style.color).to.equal('lightblue', 'should be lightblue');
    });
  });

  describe('13. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
