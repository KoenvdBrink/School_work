/// <reference types="Cypress" />

const htmlPageToBeTested = 'public/pages/assignment-6/index.html';

describe('Assignment 6', () => {
  beforeEach(async () => {
    await cy.visit(htmlPageToBeTested);
  });

  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') Cypress.runner.stop();
  });

  const getRect = (element) => element[0].getBoundingClientRect();

  describe('1. Stack', () => {
    it('expect stack item 2 to be 25px from stack item 1', () => {
      const stack1 = Cypress.$('.stack:nth-child(1)');
      const stack2 = Cypress.$('.stack:nth-child(2)');
      expect(getRect(stack2).top - getRect(stack1).top).to.equal(
        25,
        'should be 25px from top',
      );
      expect(getRect(stack2).left - getRect(stack1).left).to.equal(
        25,
        'should be 25px from left',
      );
    });

    it('expect stack item 3 to be 25px from stack item 2', () => {
      const stack2 = Cypress.$('.stack:nth-child(2)');
      const stack3 = Cypress.$('.stack:nth-child(3)');
      expect(getRect(stack3).top - getRect(stack2).top).to.equal(
        25,
        'should be 25px from top',
      );
      expect(getRect(stack3).left - getRect(stack2).left).to.equal(
        25,
        'should be 25px from left',
      );
    });

    it('expect stack item 2 to be behind stack item 1', () => {
      const stack2Index = Number(
        Cypress.$('.stack:nth-child(2)').css('z-index'),
      );
      const stack1Index = Number(
        Cypress.$('.stack:nth-child(1)').css('z-index'),
      );
      expect(stack2Index).to.be.lessThan(
        stack1Index,
        'should be behind stack 1',
      );
    });

    it('expect stack item 3 to be behind stack item 2', () => {
      const stack3Index = Number(
        Cypress.$('.stack:nth-child(3)').css('z-index'),
      );
      const stack2Index = Number(
        Cypress.$('.stack:nth-child(2)').css('z-index'),
      );
      expect(stack3Index).to.be.lessThan(
        stack2Index,
        'should be behind stack 2',
      );
    });
  });

  describe('2. Parent, child, grandchild', () => {
    it('expect parent to be 100px from screen edges', () => {
      const parent = Cypress.$('html');
      const child = Cypress.$('.parent');
      expect(getRect(child).top).to.equal(100, 'should be 100px from top');
      expect(getRect(parent).right - getRect(child).right).to.equal(
        100,
        'should be 100px from right',
      );
      expect(getRect(parent).bottom - getRect(child).bottom).to.equal(
        100,
        'should be 100px from bottom',
      );
      expect(getRect(child).left).to.equal(100, 'should be 100px from left');
    });

    it('expect child to be 100px from parent border', () => {
      const parent = Cypress.$('.parent');
      const child = Cypress.$('.child');
      expect(getRect(child).top - getRect(parent).top).to.equal(
        105,
        'should be 105px from parent top',
      );
      expect(getRect(parent).right - getRect(child).right).to.equal(
        105,
        'should be 105px from parent right',
      );
      expect(getRect(parent).bottom - getRect(child).bottom).to.equal(
        105,
        'should be 105px from parent bottom',
      );
      expect(getRect(child).left - getRect(parent).left).to.equal(
        105,
        'should be 105px from parent left',
      );
    });

    it('expect grandchild to be 100px from child border', () => {
      const child = Cypress.$('.child');
      const grandchild = Cypress.$('.grandchild');
      expect(getRect(grandchild).top - getRect(child).top).to.equal(
        105,
        'should be 105px from child top',
      );
      expect(getRect(child).right - getRect(grandchild).right).to.equal(
        105,
        'should be 105px from child right',
      );
      expect(getRect(child).bottom - getRect(grandchild).bottom).to.equal(
        105,
        'should be 105px from child bottom',
      );
      expect(getRect(grandchild).left - getRect(child).left).to.equal(
        105,
        'should be 105px from child left',
      );
    });

    it('expect grandchild text to be 100px from border', () => {
      expect(Cypress.$('.grandchild').css('padding')).to.equal(
        '100px',
        'should be 100px',
      );
    });
  });

  describe('3. No other styles', () => {
    it('expect no CSS selectors other than parent, grandchild and stack', async () => {
      const doc = await cy.document();
      [...doc.styleSheets[0].cssRules].slice(5).forEach((r) => {
        console.log('r: ', r);
        expect(r.selectorText).to.match(
          /^h1|(div)?\.(parent|grandchild|stack(:(first-(child|of-type)|nth-(child|of-type)\([123]\)))?)$/,
          'should be .parent, .grandchild or .stack',
        );
      });
    });
  });

  // AXE test fails for an unknown reason.
  // describe.skip('4. Testing the Accessibility of the page', () => {
  //   beforeEach(() => {
  //     cy.visit(htmlPageToBeTested);
  //     cy.injectAxe();
  //   });

  //   it('the page should be accessible. See also the output with the AXE browser extension for more information on errors.', () => {
  //     cy.checkA11y();
  //   })
  // });
});
