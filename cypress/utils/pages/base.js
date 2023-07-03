//selectors
const selectors ={
    logo: '#logo'
}

//expexted result
const expected ={
   blueColor: 'rgb(0, 123, 255)',
   loginBtnText: 'Login',
   altLogo: 'Logo',
   emailPlaceholder: 'Email *',
   maxInputLength: 100,
   emailFieldType: 'email',
   emailAreaDescribed:  'emailHelp',
   passPlaceholder: 'Password *',
   passFieldType: 'password',

}


//functions

export default {
    ...selectors,
    expected,
}