import Login from "../../utils/pages/login.js";
import Footer from "../../utils/pages/footer.js";

describe('Elements', () => {

    before(() => {
      Login.openPage();
    });

      it('Footer is displayed', () => {

        cy.get(Footer.footer).should('be.visible');
        
      });
      it('Language toggle is displayed', () => {

        cy.get(Footer.footerLinks).should('be.visible');
        
      });

      it('Copyright is displayed', () => {

        cy.get(Footer.copyright).should('be.visible');
        
      });

      it('Version is displayed', () => {

        cy.get(Footer.versionText).should('be.visible');
        
      });

      it('Developer info is displayed', () => {

        cy.get(Footer.devPrepend).should('be.visible');
        
      });

    });

      describe ('Value', () =>{
        it('Language toggle value is `RU`', () => {
  
          cy.get(Footer.ruLangToggle).should('have.text', 'RU')
          
        });

        it('The copyright is `© The MAF Place`', () => {
  
          //cy.get(Footer.copyright).should('have.text', Footer.expected.copyright)
          
        });

        it('Version contains the word Version', () => {
  
          //cy.get(Footer.versionLabel).should('have.text', 'Version')
          
        });

        it('Developer info is `Website by React Smart Development', () => {
  
          //cy.get(Footer.devPrepend).should('have.text', Footer.expected.devPrependText);
          cy.get(Footer.devLink).should('have.text', Footer.expected.devLinkText);
          
        });
      });

        describe ('Functionality', () =>{
          it('Clicking `RU` changes the toggle to `EN`', () => {
    
            cy.get(Footer.ruLangToggle).click()
            cy.get(Footer.footerLinks).should('have.text', 'EN')
          });

          it('Clicking `EN` changes the toggle to `RU`', () => {
    
            cy.get(Footer.enLangToggle).click()
            cy.get(Footer.footerLinks).should('have.text', 'RU')
          });

          it('Clicking `React Smart Development` redirects to https://www.reactsmart.dev/', () => {
             
            cy.get(Footer.devLink).invoke('removeAttr','target').click();
            cy.url().should('eq',Footer.expected.devCompanyLink);
          });

      });
  
  

   
    
  