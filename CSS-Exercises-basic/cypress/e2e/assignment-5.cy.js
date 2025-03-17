/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-5/index.html';

describe('Assignment 5', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  describe('1. Shortening', () => {
    it('expect no regressions in div1 styling', () => {
      const div1 = Cypress.$('.div1');
      expect(div1.css('width')).to.equal('200px', 'should have same width');
      expect(div1.css('height')).to.equal('200px', 'should have same height');
      expect(div1.css('border')).to.equal(
        '3px dashed rgb(255, 0, 0)',
        'should have same border',
      );
      expect(div1.css('margin')).to.equal('25px', 'should have same margin');
    });

    it('expect no regressions in div2 styling', () => {
      const div2 = Cypress.$('.div2');
      expect(div2.css('width')).to.equal('500px', 'should have same width');
      expect(div2.css('height')).to.equal('280px', 'should have same height');
      expect(div2.css('background-color')).to.equal(
        'rgb(255, 192, 203)',
        'should have same background-color',
      );
      expect(div2.css('background-image')).to.equal(
        'url("https://images2.minutemediacdn.com/image/upload/c_crop,'
          + 'h_843,w_1500,x_0,y_0/f_auto,q_auto,w_1100/v1555172619/shape/mentalfloss/iStock-177369626_0.jpg")',
        'should have same background-image',
      );
      expect(div2.css('background-repeat')).to.equal(
        'no-repeat',
        'should have same background-repeat',
      );
      expect(div2.css('background-position')).to.equal(
        '50% 50%',
        'should have same background-position',
      );
      expect(div2.css('background-size')).to.equal(
        '400px',
        'should have same background-size',
      );
      expect(div2.css('margin')).to.equal(
        '50px 25px 50px 75px',
        'should have same margin',
      );
    });

    it('expect no regressions in banner styling', () => {
      const banner = Cypress.$('#banner');
      expect(banner.css('margin-top')).to.equal(
        '0px',
        'should have same margin',
      );
      expect(banner.css('margin-right')).to.equal(
        banner.css('margin-left'),
        'should have same margin',
      );
      expect(banner.css('margin-bottom')).to.equal(
        '0px',
        'should have same margin',
      );
      expect(banner.css('background-color')).to.equal(
        'rgb(255, 165, 0)',
        'should have same background-color',
      );
      expect(banner.css('text-align')).to.equal(
        'center',
        'should have same text-align',
      );
      expect(banner.css('border')).to.equal(
        '1px solid rgb(0, 0, 0)',
        'should have same border',
      );
      expect(banner.css('font')).to.equal(
        'italic 700 24px / 40px Arial, sans-serif',
        'should have same font',
      );
    });

    const getCssPart = async (i) => {
      const cssText = await (
        await fetch('../../../public/pages/assignment-5/styles.css')
      ).text();
      return cssText.split('}')[i].split('{')[1].trim();
    };

    it('expect div1 styling to be as short as possible', async () => {
      const cssPart = await getCssPart(0);
      console.log(cssPart);
      expect(cssPart).not.to.include('border-', 'should not contain border-');
      expect(cssPart).not.to.include('margin-', 'should not contain margin-');
    });

    it('expect div2 styling to be as short as possible', async () => {
      const cssPart = await getCssPart(1);
      expect(cssPart).not.to.include(
        'background-',
        'should not contain background-',
      );
      expect(cssPart).not.to.include('margin-', 'should not contain margin-');
    });

    it('expect banner styling to be as short as possible', async () => {
      const cssPart = await getCssPart(2);
      expect(cssPart).not.to.include('margin-', 'should not contain margin-');
      expect(cssPart).not.to.include('border-', 'should not contain border-');
      expect(cssPart).not.to.include('font-', 'should not contain font-');
      expect(cssPart).not.to.include(
        'line-height',
        'should not contain line-height',
      );
    });
  });

  describe('2. Calculated width', () => {
    it('expect banner to be half as wide as its parent minus 50 pixels', () => {
      const bannerWidth = Number(
        Cypress.$('#banner').css('width').slice(0, -2),
      );
      const bodyWidth = Number(Cypress.$('body').css('width').slice(0, -2));
      expect(bannerWidth).to.equal(
        bodyWidth / 2 - 50,
        'should have half width of parent minus 50 pixels',
      );
    });
  });

  describe('3. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
