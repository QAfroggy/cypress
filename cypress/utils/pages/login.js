import base from "./base"

//selectors
const selectors ={
    page: '#login-page',
    email: '#username',
    logo: '#logo',
    loginBtn: '#btn-login',
    pass:'#pass',
    forgotBtn:'#btn-forgot',
    errorText: '#error-text',
    
    

}

//expected resultat
const expected ={
    ...base.expected,
   blueColor: 'rgb(0, 123, 255)',
   loginBtnText: 'Login',
   altLogo: 'Logo',
   emailPlaceholder: 'Email *',
   maxInputLength: 100,
   emailFieldType: 'email',
   emailAreaDescribed:  'emailHelp',
   passPlaceholder: 'Password *',
   passFieldType: 'password',
   buttonColor: 'rgb(255, 255, 255)',
   errorText: 'User with this email does not exist',
   passwordErrorText: 'Password is incorrect',
   url: () => {
    if(Cypress.env().ENV ==='DEV'){
       return  "https://maf-place-dev-fe.azurewebsites.net/"
    }
    if(Cypress.env().ENV ==='PROD'){
      return "https://maf.place/"
    }
    return 'https://maf-place-qa-fe.azurewebsites.net/'
},
   
}

//functions
function typeInEmailField(){
    cy.get(selectors.email).type('vino888@gmail')
}


function enterEmail(value){
    cy.get(selectors.email).clear()
    cy.get(selectors.email).type(value)
}

const openPage = () => cy.visit('/')

function logIn (){
    cy.get(selectors.email).type(Cypress.env().EMAIL_PLAYER);
    cy.get(selectors.pass).type(Cypress.env().PASS_PLAYER);
     cy.get(selectors.loginBtn).click();
}


export default{
    ...base.expected, //should be first written
    ...selectors,
    expected,
    openPage,
    typeInEmailField,
    enterEmail,
    logIn
}