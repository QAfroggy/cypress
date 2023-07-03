

//selectors
const selectors = {
    searchBar: '#search',
    tableHeader: '#rating-table-head',
    tableBody: '#rating-table-body',
    pageNavigation:'#page-navigation',
    page:'.page-item hover-item',
    url:'https://maf-place-qa-fe.azurewebsites.net/users',
    
    
}


//expec
const expected = {
    usersUrl :'https://maf-place-qa-fe.azurewebsites.net/users',
    placeHolder: 'Search by name or nickname',
    admin: 'Admin',
    player2: 'kryakina',
    player3: 'Rgaubqc',
    player4: 'Khumvcz',
    player5: 'Fbswlfg',
    player6: 'Jzkycrp',
    player7: 'Jzkkycrp',
    player8: 'Bburftw',
    player9: 'Dngiavs',
    player10: 'Bejxydn'
}


//functions
const openPage = () => cy.visit('/users');
 const checkPage = () => cy.url(selectors.url).should(expected.usersUrl);

export default {
    ...selectors,
    expected,
    openPage,
    checkPage,
}