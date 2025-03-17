/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-2.html';

describe('Assignment 2', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') Cypress.runner.stop();
  });

  const testUniqueValues = (inputs) => {
    const values = new Set();
    inputs.each((index, element) => {
      const value = Cypress.$(element).attr('value');
      expect(value, 'should have value attribute').not.to.be.undefined;
      values.add(value);
    });
    expect(values.size).to.equal(inputs.length, 'should have unique values');
  };

  describe('1. Submit and reset', () => {
    it('expect first button in last field set to be of type submit', () => {
      expect(
        Cypress.$('form > fieldset:last-of-type > input:first-of-type').attr(
          'type',
        ),
        'should have type attribute',
      ).not.to.be.undefined;
      expect(
        Cypress.$('form > fieldset:last-of-type > input:first-of-type').attr(
          'type',
        ),
      ).to.equal('submit', 'should have type submit');
    });

    it('expect second button in last field set to be of type reset', () => {
      expect(
        Cypress.$('form > fieldset:last-of-type > input:last-of-type').attr(
          'type',
        ),
        'should have type attribute',
      ).not.to.be.undefined;
      expect(
        Cypress.$('form > fieldset:last-of-type > input:last-of-type').attr(
          'type',
        ),
      ).to.equal('reset', 'should have type reset');
    });
  });

  describe('2. Gender', () => {
    const gender = () => Cypress.$('legend:contains("Gender")').parent();

    it('2a. expect gender selection to consist of at least two radio buttons', () => {
      expect(gender().find('input[type="radio"]').length).to.be.at.least(
        2,
        'should contain at least two radio buttons',
      );
    });

    it('2b. expect each radio button to have a label', () => {
      const fieldset = gender();
      fieldset.find('input[type="radio"]').each((index, element) => {
        const label = fieldset.children('label').eq(index);
        expect(label.is('label'), 'should be present in field set').to.be.true;
        const input = Cypress.$(element);

        expect(
          label.attr('for') || input.parent().is(label),
          'should have for attribute or nested input',
        ).to.be.ok;
        if (label.attr('for')) {
          expect(label.attr('for')).to.equal(
            input.attr('id'),
            'should refer to input id',
          );
        }
      });
    });

    it('2c. expect each radio button to have same name attribute', () => {
      const names = new Set();
      gender()
        .find('input[type="radio"]')
        .each((index, element) => {
          const name = Cypress.$(element).attr('name');
          expect(name, 'should have name attribute').not.to.be.undefined;
          names.add(name);
        });
      expect(names.size).to.equal(1, 'should have one unique name');
    });

    it('2d. expect each radio button to have a different value', () => {
      testUniqueValues(gender().find('input[type="radio"]'));
    });
  });

  describe('3. Animal', () => {
    const animal = () => Cypress.$('label[for="animal"]').next();

    it('3a. expect animal selection to consist of select with at least two options', () => {
      const input = animal();
      expect(input.is('select'), 'should be select element').to.be.true;
      expect(input.children('option').length).to.be.at.least(
        2,
        'should have at least two options',
      );
    });

    it('3b. expect select to have same name as previous input element', () => {
      const name = animal().attr('name');
      expect(name, 'should have name attribute').not.to.be.undefined;
      expect(name).to.equal('animal', 'should have name animal');
    });

    it('3c. expect each option to have a different value', () => {
      testUniqueValues(animal().children('option'));
    });

    it('3d. expect "--Please choose an option--" as first option', () => {
      const options = animal().children('option');
      expect(options.first().attr('value')).to.equal(
        '',
        'first option should have empty value',
      );
      expect(options.first().text()).to.equal(
        '--Please choose an option--',
        'first option should have correct text',
      );
      expect(options.length).to.be.at.least(
        3,
        'should have at least three options',
      );
    });

    it('3e. expect select id to match label', () => {
      const id = animal().attr('id');
      expect(id, 'should have id attribute').not.to.be.undefined;
      expect(id).to.equal('animal', 'should have id animal');
    });
  });

  describe('4. Pizza', () => {
    const pizza = () => Cypress.$('legend:contains("Favorite pizza toppings?")').parent();

    it('4a. expect pizza toppings selection to consist of at least two checkboxes', () => {
      expect(pizza().find('input[type="checkbox"]').length).to.be.at.least(
        2,
        'should contain at least two checkboxes',
      );
    });

    it('4b. expect each checkbox to have the name pizza', () => {
      pizza()
        .find('input[type="checkbox"]')
        .each((index, element) => {
          const name = Cypress.$(element).attr('name');
          expect(name, 'should have name attribute').not.to.be.undefined;
          expect(name).to.equal('pizza', 'should have name pizza');
        });
    });

    it('4c. expect each checkbox to have a different value', () => {
      testUniqueValues(pizza().find('input[type="checkbox"]'));
    });
  });

  describe('4. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
