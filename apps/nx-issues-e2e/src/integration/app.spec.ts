import { getGreeting } from '../support/app.po';

describe('nx-issues', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-issues!');
  });
});
