import {APP_API} from './../../src/app/config/app-api.config'
describe('My Cv Test', () => {
  it('Visit Cv list page', () => {
    cy.intercept(APP_API.cv, {fixture:'cvs'})
    cy.visit('/cv');
    cy.contains('AXYUS');
    cy.get("[data-cy='cvCard']").should('not.exist');
    cy.get("[data-cy='cvsList']").children().first().click();
    cy.get("[data-cy='cvCard']");
       cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get("[data-cy='cvCardDetailBtn']").click({ force: true });
  });
});
