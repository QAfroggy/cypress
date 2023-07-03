import Header from '../../utils/elements/header.js';
import Forgot from '../../utils/pages/forgot.js';
import Login from '../../utils/pages/login.js';
import Rating from '../../utils/pages/rating.js';
import Public from '../../utils/pages/publicGame.js';

describe('Elements', () => {

    before(() => {
      Login.openPage();
    });
    it('Header is displayed', () => {
    
      cy.get(Header.header).should('be.visible');
    })
    it('Rating button is displayed', () => {
    
      cy.get(Header.buttonAll).should('be.visible');
    })

    it('Public Game button is displayed', () => {
    
      cy.get(Header.buttonGame).should('be.visible');
    })

    it(' Back to Login button is NOT displayed in Header on Login/Landing page', () => {
    
      cy.get(Header.buttonBackToLogin).should('not.exist');
    })
  });


    describe ('Functionality', () =>{
      it('Clicking Rating button redirects to `https://maf-place-qa-fe.azurewebsites.net/users`', () => {

        cy.get(Header.buttonAll).click()
        cy.url().should('eq', Rating.expected.usersUrl);
      });


      it('Rating page is displayed after the redirect', () => {

        cy.get(Header.buttonAll).should('be.visible');
        cy.get(Header.ratings).should('be.visible');
      });

      it(' Clicking Public Game redirects to `https://maf-place-qa-fe.azurewebsites.net/public-game', () => {

        cy.get(Header.buttonGame).click();
        cy.url().should('eq', Public.expected.url);
       
      });

      it(' Public game page is displayed after the redirect', () => {

        cy.get(Header.buttonGame).click();
        cy.url().should('eq', Public.expected.url);
        
      });

      it('If navigate to `https://maf-place-qa-fe.azurewebsites.net/forgot`, Back to Login button is displayed in Header.', () => {

       Forgot.openPage();
       cy.get(Header.buttonBackToLogin).should('be.visible')
        
      });

      it('Clicking Back to Login button redirects to `https://maf-place-qa-fe.azurewebsites.net', () => {

        cy.get(Header.buttonBackToLogin).click();
        cy.url().should('eq', Login.expected.url());
        cy.get(Login.page).should('be.visible');
         
       });


});