/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-1a.html';

describe('Assignment 1a', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Form', () => {
    it('expect form to be present in body', () => {
      expect(Cypress.$('body form').is('form'), 'should be present in body').to.be.true;
    });
  });

  describe('2. Field sets', () => {
    it('expect form to contain two field sets', () => {
      expect(Cypress.$('form > fieldset').length).to.equal(
        2,
        'should contain two field sets',
      );
    });
  });

  describe('3. Legends', () => {
    it('expect first field set to start with legend', () => {
      expect(
        Cypress.$('form > fieldset:first-of-type > *:first-child').is('legend'),
        'should start with legend',
      ).to.be.true;
    });

    it('expect second field set to start with legend', () => {
      expect(
        Cypress.$('form > fieldset:last-of-type > *:first-child').is('legend'),
        'should start with legend',
      ).to.be.true;
    });
  });

  describe('4. Input fields', () => {
    it('expect first field set to contain two input fields', () => {
      expect(Cypress.$('form > fieldset:first-of-type input').length).to.equal(
        2,
        'should contain two input fields',
      );
    });

    it('expect second field set to contain two input fields', () => {
      expect(Cypress.$('form > fieldset:last-of-type input').length).to.equal(
        2,
        'should contain two input fields',
      );
    });
  });

  describe('5. Labels', () => {
    const test = (fieldsetIndex, fieldIndex) => {
      const fieldset = Cypress.$('form > fieldset').eq(fieldsetIndex);
      const label = fieldset.children('label').eq(fieldIndex);
      expect(label.is('label'), 'should be present in field set').to.be.true;
      const input = fieldset.find('input').eq(fieldIndex);

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
    };

    it('expect first input field in first field set to have a referring label', () => {
      test(0, 0);
    });

    it('expect second input field in first field set to have a referring label', () => {
      test(0, 1);
    });

    it('expect first input field in second field set to have a referring label', () => {
      test(1, 0);
    });

    it('expect second input field in second field set to have a referring label', () => {
      test(1, 1);
    });
  });

  describe('6. Disabled field set', () => {
    it('expect first field set to be disabled', () => {
      expect(
        Cypress.$('form > fieldset:first-of-type').attr('disabled'),
        'should be disabled',
      ).not.to.be.undefined;
    });
  });

  describe('7. Text area', () => {
    it('expect second field set to contain text area', () => {
      expect(
        Cypress.$('form > fieldset:last-of-type textarea').is('textarea'),
        'should contain text area',
      ).to.be.true;
    });

    it('expect text area to have four rows', () => {
      expect(
        Cypress.$('form > fieldset:last-of-type textarea').attr('rows'),
        'should have rows attribute',
      ).not.to.be.undefined;
      expect(
        Cypress.$('form > fieldset:last-of-type textarea').attr('rows'),
      ).to.equal('4', 'should have four rows');
    });
  });

  describe('8. Name attributes', () => {
    const names = new Set();

    const test = (element) => {
      const name = element.attr('name');
      expect(name, 'should have name attribute').not.to.be.undefined;
      names.add(name);
    };

    it('expect first input field to have name attribute', () => {
      test(Cypress.$('form input').eq(0));
    });

    it('expect second input field to have name attribute', () => {
      test(Cypress.$('form input').eq(1));
    });

    it('expect third input field to have name attribute', () => {
      test(Cypress.$('form input').eq(2));
    });

    it('expect fourth input field to have name attribute', () => {
      test(Cypress.$('form input').eq(3));
    });

    it('expect text area to have name attribute', () => {
      test(Cypress.$('form textarea'));
    });

    it('expect all names to be unique', () => {
      expect(names.size).to.equal(5, 'should have five unique names');
    });
  });

  describe('9. Text area label', () => {
    it('expect text area to have a referring label', () => {
      const fieldset = Cypress.$('form > fieldset').eq(1);
      const label = fieldset.children('label').eq(2);
      expect(label.is('label'), 'should be present in field set').to.be.true;
      const textarea = fieldset.find('textarea');

      expect(
        label.attr('for') || textarea.parent().is(label),
        'should have for attribute or nested textarea',
      ).to.be.ok;
      if (label.attr('for')) {
        expect(label.attr('for')).to.equal(
          textarea.attr('id'),
          'should refer to textarea id',
        );
      }
    });
  });

  describe('10. Buttons', () => {
    it('expect three buttons after second field set', () => {
      const button1 = Cypress.$('form > fieldset:last-of-type').next();
      expect(
        button1.is('button'),
        'first button should be after second field set',
      ).to.be.true;
      expect(button1.next().is('button'), 'second button should be after first')
        .to.be.true;
      expect(
        button1.next().next().is('button'),
        'third button should be after second',
      ).to.be.true;
    });
  });

  describe('11. Button types', () => {
    it('expect buttons to have types button, submit and reset', () => {
      expect(Cypress.$('form > button[type="button"]').length).to.equal(
        1,
        'should have one button of type button',
      );
      expect(Cypress.$('form > button[type="submit"]').length).to.equal(
        1,
        'should have one button of type submit',
      );
      expect(Cypress.$('form > button[type="reset"]').length).to.equal(
        1,
        'should have one button of type reset',
      );
    });
  });

  describe('13a. Form action', () => {
    it('expect form action to refer to google.nl', () => {
      expect(Cypress.$('form').attr('action'), 'should have action attribute')
        .not.to.be.undefined;
      expect(Cypress.$('form').attr('action')).to.equal(
        'https://google.nl',
        'should refer to google.nl',
      );
    });
  });

  describe('14. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
