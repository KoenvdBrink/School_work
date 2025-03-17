/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-5/index.html';

describe('Assignment 5', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  const getCssKeyframesRule = async (selector) => {
    const name = Cypress.$(selector).css('animation-name');
    expect(name, `should have animation-name for ${selector}`).not.to.be.empty;
    const doc = await cy.document();
    const rules = [...doc.styleSheets[0].cssRules].filter(
      (r) => r.name === name,
    );
    expect(rules.length).to.equal(
      1,
      `should have keyframes with name "${name}"`,
    );
    return rules[0];
  };

  const getCssStyleRule = async (selector) => {
    const doc = await cy.document();
    const rules = [...doc.styleSheets[0].cssRules].filter(
      (r) => r.selectorText && r.selectorText.includes(selector),
    );
    expect(rules.length).to.equal(1, `should have ${selector} rule`);
    return rules[0];
  };

  describe('1. Keyframes', () => {
    // Split into two tests to make sure it doesn't break when implementing step 3.
    it('expect keyframes rule with keyframe at 50%', async () => {
      const keyframes = await getCssKeyframesRule('.animation');
      expect(
        [...keyframes.cssRules].filter((r) => r.keyText === '50%').length,
      ).to.equal(1, 'should have keyframe at 50%');
    });

    it('expect first keyframe to move div 200px to the right', async () => {
      const keyframes = await getCssKeyframesRule('.animation');
      expect(keyframes.cssRules[0].style.transform).to.equal(
        'translate(200px, 0px)',
        'should move to top right',
      );
    });
  });

  describe('2. Iteration count, duration', () => {
    it('expect animation to run infinitely', () => {
      expect(Cypress.$('.animation').css('animation-iteration-count')).to.equal(
        'infinite',
        'should be infinite',
      );
    });

    it('expect animation duration to be 4s', () => {
      expect(Cypress.$('.animation').css('animation-duration')).to.equal(
        '4s',
        'should be 4s',
      );
    });
  });

  describe('3. More keyframes', () => {
    it('expect keyframes to describe expected animation', async () => {
      const keyframes = await getCssKeyframesRule('.animation');
      expect(keyframes.cssRules.length).to.equal(3, 'should have 3 keyframes');
      expect(keyframes.cssRules[0].keyText).to.equal(
        '25%',
        'should have keyframe at 25%',
      );
      expect(keyframes.cssRules[1].keyText).to.equal(
        '50%',
        'should have keyframe at 50%',
      );
      expect(keyframes.cssRules[1].style.transform).to.equal(
        'translate(200px, 200px)',
        'should move to bottom right',
      );
      expect(keyframes.cssRules[2].keyText).to.equal(
        '75%',
        'should have keyframe at 75%',
      );
      expect(keyframes.cssRules[2].style.transform).to.equal(
        'translate(0px, 200px)',
        'should move to bottom left',
      );
    });
  });

  describe('4. Second animation div', () => {
    it('expect two divs with class animation', () => {
      expect(Cypress.$('.animation').length).to.equal(
        2,
        'should have two divs with class animation',
      );
    });
  });

  describe('5. Animation delay', () => {
    it('expect first div not to have animation delay', () => {
      expect(Cypress.$('.animation').eq(0).css('animation-delay')).to.equal(
        '0s',
        'should not have delay',
      );
    });

    it('expect second div to have 2s animation delay', () => {
      expect(Cypress.$('.animation').eq(1).css('animation-delay')).to.equal(
        '2s',
        'should have 2s delay',
      );
    });
  });

  describe('6. Clock keyframes', () => {
    it('expect keyframes to describe 360-degree rotation', async () => {
      const keyframes = await getCssKeyframesRule('.clock__needle');
      expect(keyframes.cssRules.length).to.equal(1, 'should have 1 keyframe');
      expect(keyframes.cssRules[0].keyText).to.equal(
        '100%',
        'should have keyframe at 100%',
      );
      expect(keyframes.cssRules[0].style.transform).to.equal(
        'rotate(360deg)',
        'should rotate 360 degrees',
      );
    });
  });

  describe('7. Clock iteration count, timing function', () => {
    it('expect animation to run infinitely', () => {
      expect(
        Cypress.$('.clock__needle').css('animation-iteration-count'),
      ).to.equal('infinite', 'should be infinite');
    });

    it('expect animation to have linear timing function', () => {
      expect(
        Cypress.$('.clock__needle').css('animation-timing-function'),
      ).to.equal('linear', 'should be linear');
    });
  });

  describe('8. Pause on hover', () => {
    it('expect animation to be paused on hover', async () => {
      const hover = await getCssStyleRule('.clock:hover');
      expect(hover.style.animationPlayState).to.equal(
        'paused',
        'should be paused',
      );
    });
  });

  describe('9. Testing the Accessibility of the page', () => {
    beforeEach(() => {
      cy.visit(htmlPageToBeTested);
      cy.injectAxe();
    });

    it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
      cy.checkA11y();
    })
  });
});
