import Login from '../../utils/pages/login.js';
import Rating from "../../utils/pages/rating.js";
import Header from '../../utils/elements/header.js';
import Forgot from '../../utils/pages/forgot.js';

describe("Authorization", () => {
    before(() => {
      Login.openPage();
    });

it('Login', () => {
  /*
  add methods to
  - specify email
  - specify password
  - click Login
  - check that Ratings page is displayed
  - check that Header displays Logout and My Account buttons
  */
  
  Login.logIn();
 //Rating.checkPage();
  cy.url(Rating.url).should('eq',Rating.expected.usersUrl)
  cy.get(Header.btnLogout).should('be.visible');
  cy.get(Header.btnUser).should('be.visible');
  
 })

it('Logout', () => {
  /*
  add methods to
  - click Logout
  - check that Login page is displayed
  - check that Header does NOT display Logout and My Account anymore
  */
  cy.get(Header.btnLogout).click();
  Login.openPage();
  cy.url(Login.url).should('eq',Login.expected.url())
  cy.get(Header.btnLogout).should('not.exist');
  cy.get(Header.btnUser).should('not.exist');

})

it('Remind password', () => {
  /*
  add methods to
  - go to the Forgot password page
  - specify email
  - check that success message is displayed
  - check the redirect to Login page in 4 sec
  */
   cy.get(Login.forgotBtn).click()
   Forgot.typeInEmailField('mafplaceqauser@gmail.com')
   cy.get(Forgot.remindBtn).click();
   cy.get(Forgot.spinner).should('be.visible');
   cy.get(Forgot.errorText).should('have.text','Password reminder sent')
   cy.wait(4000)
   //cy.url('https://maf-place-qa-fe.azurewebsites.net/').should('eq', Forgot.expected.redirectUrl);
   cy.url().should('be.eq', Login.expected.url());
});
});
