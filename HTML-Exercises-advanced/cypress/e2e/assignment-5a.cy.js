/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-5a.html';

describe('Assignment 5a', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('2. Required fields', () => {
    it('expect non-checkbox and input type="color" fields to be required', () => {
      expect(Cypress.$('input:not([type="checkbox"])').attr('required'), 'should have required attribute')
        .not.to.be.undefined;
    });

    it('expect checkbox fields not to be required', () => {
      expect(Cypress.$('input[type="checkbox"]').attr('required'), 'should not have required attribute')
        .to.be.undefined;
    });

    it('expect input type="color" fields not to be required', () => {
      expect(Cypress.$('input[type="checkbox"]').attr('required'), 'should not have required attribute')
        .to.be.undefined;
    });
  });

  describe('3. Min/max length', () => {
    it('expect name field to have minimum length of 2', () => {
      expect(Cypress.$('input#name').attr('minlength'), 'should have minlength attribute').not.to.be.undefined;
      expect(Cypress.$('input#name').attr('minlength')).to.equal('2', 'should have minlength 2');
    });

    it('expect name field to have maximum length of 255', () => {
      expect(Cypress.$('input#name').attr('maxlength'), 'should have maxlength attribute').not.to.be.undefined;
      expect(Cypress.$('input#name').attr('maxlength')).to.equal('255', 'should have maxlength 255');
    });

    it('expect email field to have minimum length of 2', () => {
      expect(Cypress.$('input#email').attr('minlength'), 'should have minlength attribute').not.to.be.undefined;
      expect(Cypress.$('input#email').attr('minlength')).to.equal('2', 'should have minlength 2');
    });

    it('expect email field to have maximum length of 255', () => {
      expect(Cypress.$('input#email').attr('maxlength'), 'should have maxlength attribute').not.to.be.undefined;
      expect(Cypress.$('input#email').attr('maxlength')).to.equal('255', 'should have maxlength 255');
    });
  });

  describe('4. Min/max value', () => {
    it('expect age field to have minimum value of 0', () => {
      expect(Cypress.$('input#age').attr('min'), 'should have min attribute').not.to.be.undefined;
      expect(Cypress.$('input#age').attr('min')).to.equal('0', 'should have min 0');
    });

    it('expect age field to have maximum value of 0', () => {
      expect(Cypress.$('input#age').attr('max'), 'should have max attribute').not.to.be.undefined;
      expect(Cypress.$('input#age').attr('max')).to.equal('150', 'should have max 150');
    });
  });

  describe('5. Pattern', () => {
    it('expect phone number field to have pattern [0-9]{3}-[0-9]{3}-[0-9]{4}', () => {
      expect(Cypress.$('input#phone').attr('pattern'), 'should have pattern attribute').not.to.be.undefined;
      expect(['[0-9]{3}-[0-9]{3}-[0-9]{4}', '\\d{3}-\\d{3}-\\d{4}']).to.include(Cypress.$('input#phone').attr('pattern'), 'should have pattern [0-9]{3}-[0-9]{3}-[0-9]{4}');
    });
  });

  describe('6. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
