/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-e1/index.html';

describe('Assignment E1', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Header and navigation flexbox', () => {
    it('expect header to be a flexbox', () => {
      expect(Cypress.$('header').css('display')).to.equal(
        'flex',
        'should be flex',
      );
    });

    it('expect navigation to be a flexbox', () => {
      expect(Cypress.$('nav').css('display')).to.equal(
        'flex',
        'should be flex',
      );
    });
  });

  describe('2. Header horizontal alignment', () => {
    it('expect space between header items', () => {
      expect(Cypress.$('header').css('justify-content')).to.equal(
        'space-between',
        'content should be justified with space inbetween',
      );
    });
  });

  describe('3. Header vertical alignment', () => {
    it('expect header items to be vertically centered', () => {
      expect(Cypress.$('header').css('align-items')).to.equal(
        'center',
        'should be vertically centered',
      );
    });
  });

  describe('4. Prevent shrinking', () => {
    it('expect navigation not to shrink below original width', () => {
      expect(Cypress.$('nav').css('flex-shrink')).to.equal(
        '0',
        'should not shrink',
      );
    });
  });

  describe('5. About flexbox', () => {
    it('expect about to be a flexbox', () => {
      expect(Cypress.$('#about').css('display')).to.equal(
        'flex',
        'should be flex',
      );
    });
  });

  describe('6. About direction and item ratio', () => {
    it('expect about to have reverse direction', () => {
      expect(Cypress.$('#about').css('flex-direction')).to.equal(
        'row-reverse',
        'should be row-reverse',
      );
    });

    it('expect about paragraph to fill 2/3 of the width', () => {
      expect(Cypress.$('#about p').css('flex-grow')).to.equal(
        '2',
        'should be 2/3',
      );
    });

    it('expect about mockup to fill 1/3 of the width', () => {
      expect(Cypress.$('#aboutmockup').css('flex-grow')).to.equal(
        '1',
        'should be 1/3',
      );
    });
  });

  describe('7. About wrapping', () => {
    it('expect about paragraph to have minimum width of 40%', () => {
      expect(Cypress.$('#about p').css('min-width')).to.equal(
        '40%',
        'should be 40%',
      );
    });

    it('expect about mockup to have minimum width of 300px', () => {
      expect(Cypress.$('#aboutmockup').css('min-width')).to.equal(
        '300px',
        'should be 300px',
      );
    });

    it('expect about to wrap', () => {
      expect(Cypress.$('#about').css('flex-wrap')).to.equal(
        'wrap',
        'should wrap',
      );
    });
  });

  describe('8. Staff flexbox', () => {
    it('expect staff to be a flexbox', () => {
      expect(Cypress.$('#staff').css('display')).to.equal(
        'flex',
        'should be flex',
      );
    });
  });

  describe('9. Staff item ratio and wrapping', () => {
    it('expect staff profile to have flex-grow greater than 0', () => {
      expect(Cypress.$('#staff .staff-profile').css('flex-grow')).not.to.equal(
        '0',
        'should be greater than 0',
      );
    });

    it('expect staff profile to have minimum width of 300px', () => {
      expect(Cypress.$('#staff .staff-profile').css('min-width')).to.equal(
        '300px',
        'should be 300px',
      );
    });

    it('expect staff to wrap', () => {
      expect(Cypress.$('#staff').css('flex-wrap')).to.equal(
        'wrap',
        'shouldwrap',
      );
    });
  });

  describe('10. Staff profiles flexbox', () => {
    it('expect staff profile to be a flexbox', () => {
      expect(Cypress.$('#staff .staff-profile').css('display')).to.equal(
        'flex',
        'should be flex',
      );
    });

    it('expect staff profile to have column layout', () => {
      expect(Cypress.$('#staff .staff-profile').css('flex-direction')).to.equal(
        'column',
        'should be column',
      );
    });
  });

  describe('11. Staff profile horizontal alignment', () => {
    it('expect staff profile contents to be horizontally centered', () => {
      expect(Cypress.$('#staff .staff-profile').css('align-items')).to.equal(
        'center',
        'should be horizontally centered',
      );
    });
  });

  describe('12. Staff profile bio text alignment', () => {
    it('expect staff profile bio text to be centered', () => {
      expect(
        Cypress.$('#staff .staff-profile .staff-bio').css('text-align'),
      ).to.equal('center', 'should be centered');
    });
  });

  describe('13. Staff profile order', () => {
    it('expect C-level staff to be ordered before other staff', () => {
      expect(
        Number(
          Cypress.$('#staff .staff-profile:not(.staff-clevel)').css('order'),
        ),
      ).to.be.greaterThan(
        Number(Cypress.$('#staff .staff-profile.staff-clevel').css('order')),
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
