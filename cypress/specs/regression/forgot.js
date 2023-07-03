import Forgot from '../../utils/pages/forgot.js';
import Login from '../../utils/pages/login.js';

describe("Elements", () => {
  before(() => {
    Forgot.openPage();
  });

  it("Forgot Page is displayed", () => {
    cy.get(Forgot.page).should("be.visible");
  });

  it("Email field is displayed ", () => {
    cy.get(Forgot.email).should("be.visible");
  });

  it("Remind button is displayed ", () => {
    cy.get(Forgot.remindBtn).should("be.visible");
  });

  describe("Values", () => {
    it('Image has alt="Logo"', () => {
      cy.get(Forgot.logo).should("have.attr", "alt", Forgot.expected.altLogo);
    });



    it("Max length email field is 100 symbols  ", () => {
      cy.expect(100).to.equal(Forgot.expected.maxInputLength);
    });
    it("Button Remind Password", () => {
      //cy.get(Forgot.remindBtn).should("have.text", Forgot.expected.remindPasswordText);
      cy.get(Forgot.remindBtn).should(
        "have.css",
        "background-color",
        Forgot.expected.blueColor)
      
      cy.get(Forgot.remindBtn).should("have.css", "color", Forgot.expected.buttonColor);
    });

  });

    describe ('Functionality', () =>{
      it('Username field accepts no more than 100 symbols', () => {

        const text = 's'.repeat(101);  
        cy.get(Forgot.email).type(text);
        cy.get(Forgot.email).invoke('val').should('have.length', Forgot.expected.maxInputLength)
      });

      it('Error message appears if only Email field is empty and click Remind Password: Please specify email', () => {

        cy.get(Forgot.email).clear();
        cy.get(Forgot.remindBtn).click();
       // cy.get(Forgot.errorText).should('be.visible');
      });

      it('Error message disappears on input in Email field', () => {
         Forgot.typeInEmailField('kinolub84@gmail.com')
        //cy.get(Forgot.email).type('kinolub84@gmail.com');
        cy.get(Forgot.errorText).should('not.exist');
      });

      it(' Error message appears if Email is incorrect: User with this email does not exist', () => {
        Forgot.enterEmail('fddfk@fggjk.ig');
       // cy.get(Forgot.email).clear();
        //cy.get(Forgot.email).type('kinolub84gmail.com');
        cy.get(Forgot.remindBtn).click();
        cy.get(Forgot.errorText).should('be.visible');
        //cy.get(Forgot.errorText).should('have.text', Forgot.expected.errorMessage);
      });

      it(' Success message appears if Email is correct (use mafplaceqauser@gmail.com): Password reminder sent', () => {
        cy.get(Forgot.email).clear();
        cy.get(Forgot.email).type('mafplaceqauser@gmail.com');
        cy.get(Forgot.remindBtn).click();
        cy.get(Forgot.spinner).should('be.visible');
       
      });
      it(' User is redirected to `https://maf-place-qa-fe.azurewebsites.net/` in 4 sec after the password reminder was sent.', () => {
        cy.wait(4000)
        cy.url().should('eq', Login.expected.url());
       
       
      });
    });
  });


