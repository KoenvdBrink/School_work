/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-1/index.html';

describe('Assignment 1', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('2. Link to CSS file', () => {
    it('expect link to CSS file', () => {
      expect(Cypress.$('head > link').attr('rel'), 'should have rel attribute')
        .not.to.be.undefined;
      expect(Cypress.$('head > link').attr('rel')).to.equal(
        'stylesheet',
        'should have rel stylesheet',
      );
      expect(
        Cypress.$('head > link').attr('href'),
        'should have href attribute',
      ).not.to.be.undefined;
    });
  });

  describe('3. Text color', () => {
    it('expect first paragraph to be red', () => {
      expect(Cypress.$('body p:first-of-type').css('color')).to.equal(
        'rgb(255, 0, 0)',
        'should be red',
      );
    });
  });

  describe('4. Background color', () => {
    it('expect first paragraph to have black background', () => {
      expect(
        Cypress.$('body p:first-of-type').css('background-color'),
      ).to.equal('rgb(0, 0, 0)', 'should be black');
    });
  });

  describe('5. Second paragraph', () => {
    it('expect body to contain two paragraphs', () => {
      expect(Cypress.$('body p').length).to.equal(
        2,
        'should have two paragraphs',
      );
    });
  });

  describe('6. Same styles', () => {
    it('expect second paragraph to be red', () => {
      expect(Cypress.$('body p:nth-of-type(2)').css('color')).to.equal(
        'rgb(255, 0, 0)',
        'should be red',
      );
    });

    it('expect second paragraph to have black background', () => {
      expect(
        Cypress.$('body p:nth-of-type(2)').css('background-color'),
      ).to.equal('rgb(0, 0, 0)', 'should be black');
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
