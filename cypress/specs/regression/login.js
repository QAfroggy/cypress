import Login from '../../utils/pages/login.js';
import Forgot from '../../utils/pages/forgot.js';

describe('Elements', () => {

  before(() => {
    Login.openPage();
  });
  
  it('Page is displayed', () => {
    
    cy.get(Login.page).should('be.visible');
  })

  it('Email field is displayed ', () => {
    cy.get(Login.email).should('be.visible');
   
  });

  it('Password field is pisplayed', () => {
    cy.get(Login.pass).should('be.visible');
    
  });

  it('Login button is displayed', () => {
    cy.get(Login.loginBtn).should('be.visible');
    
});

it('Link Remind Passord displayed', () => {
  cy.get(Login.forgotBtn).should('be.visible');
 
});

});

describe('Values', () => {
it('Image has alt="Logo"', () => {
    cy.get(Login.logo).should('have.attr', 'alt',Login.expected.altLogo);
  });


  it('Email input field has a placeholder ', () => {
    cy.get(Login.email).should('have.attr', 'placeholder',);
   
  });
 

  it('Email field has a placeholder -- Email * ', () => {
  
    //cy.get(Login.email).should('have.attr', 'placeholder', Login.expected.emailPlaceholder);
   
  });

  it('Max length email field is 100 symbols  ', () => {
    cy.expect(100).to.equal(Login.expected.maxInputLength);
   
  });

  it('Email input field has type email ', () => {
    cy.get(Login.email).should('have.attr', 'type', Login.expected.emailFieldType);
   
  });

  it('Email input field has aria-describedby=emailHelp ', () => {
    cy.get(Login.email).should('have.attr', 'aria-describedby', Login.expected.emailAreaDescribed);
   
  });

  it('Password field has a placeholder Password *', () => {
    //cy.get(Login.pass).should('have.attr', 'placeholder', Login.expected.passPlaceholder);
  });

 it('Max length Password field is 100 symbols  ', () => {
    cy.expect(100).to.equal(Login.expected.maxInputLength);
  });

  it('when user type something replace value by bullets (has type= password ', () => {
    cy.get(Login.pass).should('have.attr', 'type', Login.expected.passFieldType);
   
  });
  it('Remind password is a link ', () => {
    cy.get('#login-form a').should('have.attr', 'href', '/forgot');
   
  });




    it('Button Login', () => {
      //cy.get(Login.loginBtn).should('have.text', Login.expected.loginBtnText);
      cy.get(Login.loginBtn).should('have.css', 'background-color', Login.expected.blueColor);
      cy.get(Login.loginBtn).should('have.css', 'color', Login.expected.buttonColor);
  });

 

  it('Link Remind Password ', () => {
   // cy.get(Login.forgotBtn).should('have.text', 'Remind Password');
    cy.get(Login.forgotBtn).should('have.css', 'color', Login.expected.blueColor);
    // cy.get(Login.forgotBtn).click();
});
})

describe('functionality', () => {
  it('Error message appearsif both field are empty', () => {
      cy.get(Login.loginBtn).click();
      cy.get(Login.errorText).should('be.visible');

    });
    it('Check if the message disap upon typing', () => {
      cy.get(Login.email).type('test');
      cy.get(Login.errorText).should('not.exist');

    });

    it('Error message appears if only Password field is empty ', () => {
      cy.get(Login.loginBtn).click();
      cy.get(Login.errorText).should('be.visible');
    });

    it('Error message disappears on input in Password field ', () => {
      cy.get(Login.pass).type('test');
      cy.get(Login.errorText).should('not.exist');

    });

    it('Error message appears if only Email field is empty ', () => {
      cy.get(Login.email).clear();
      cy.get(Login.loginBtn).click();
      //cy.get(Login.errorText).should('be.visible');

    });

    it('Error message appears if Email is incorrect', () => {
      cy.get(Login.email).type('vino888@gmail');
      cy.get(Login.loginBtn).click();
      cy.get(Login.errorText).should('be.visible');
      //cy.get(Login.errorText).should('have.text', Login.expected.errorText);
    });

    it('Error message appears if Email is incorrect', () => {
      Login.typeInEmailField();
      //cy.get(Login.email).type('vino888@gmail');
      cy.get(Login.loginBtn).click();
      cy.get(Login.errorText).should('be.visible');
      //cy.get(Login.errorText).should('have.text', Login.expected.errorText);
    });

    it('Error message appears if Email is correct', () => {
      cy.get(Login.email).clear();
      cy.get(Login.pass).clear();
      cy.get(Login.email).type(Cypress.env().EMAIL_PLAYER)
      //cy.get(Login.email).type('mafplaceqauser@gmail.com');   Cypress.env().EMAIL_PLAYER
      cy.get(Login.pass).type('hhffhjk76666');
      cy.get(Login.loginBtn).click();
      cy.get(Login.errorText).should('be.visible');
      cy.get(Login.errorText).should('have.text', Login.expected.passwordErrorText);
    });

    it('Remind Password link redirects to Remind passwor page`', () => {
      cy.get(Login.email).clear();
      cy.get(Login.pass).clear();
      cy.get(Login.forgotBtn).click();
      cy.url().should('be.eq', Forgot.expected.url())
    });

    it('Remind Password page is displayed after the redirect', () => {
      cy.get('#btn-remind').should('be.visible');
      
    });


   
      })
  
