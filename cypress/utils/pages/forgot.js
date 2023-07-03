

//selectors
const selectors ={
    page: '#forgot-page',
    email: '#email',
    logo: '#logo',
    remindBtn: '#btn-remind',
    pass:'#pass',
    errorText: '#error-text',
    spinner: '#spinner'
    
    

}
//expected resultat
const expected ={
    blueColor: 'rgb(0, 123, 255)',
    maxInputLength: 100,
    altLogo: 'Logo',
    emailPlaceholder: 'Email *',
    maxInputLength: 100,
    emailFieldType: 'email',
    emailAreaDescribed:  'emailHelp',
    passPlaceholder: 'Password *',
    passFieldType: 'password',
    remindPasswordText : 'Remind password',
    errorMessage: 'User with this email does not exist',
    redirectUrl:'https://maf-place-qa-fe.azurewebsites.net/',
    url: () => {
          if(Cypress.env().ENV ==='DEV'){
             return  "https://maf-place-dev-fe.azurewebsites.net/forgot"
          }
          if(Cypress.env().ENV ==='PROD'){
            return "https://maf.place/forgot"
          }
          return 'https://maf-place-qa-fe.azurewebsites.net/forgot'
    },
     
    buttonColor: "rgb(255, 255, 255)",
    successText:'Password reminder sent',
 }

//functions
 
function typeInEmailField(value){
    cy.get(selectors.email).type(value)
}
function enterEmail(value){
    cy.get(selectors.email).clear()
    cy.get(selectors.email).type(value)
}



const openPage = () => cy.visit('/forgot')


export default{
    ...selectors,
    expected,
    openPage,
    typeInEmailField,
    enterEmail
}