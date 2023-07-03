//selectors
const selectors = {
   
   gameDayUrl: 'https://maf-place-qa-fe.azurewebsites.net/game/day',
   nextButton :'#next-btn',
   player1:'#player-nickname-1',
   player2:'#player-nickname-2',
   player3:'#player-nickname-3',
   player4:'#player-nickname-4',
   player5:'#player-nickname-5',
   player6:'#player-nickname-6',
   player7:'#player-nickname-7',
   player8:'#player-nickname-8',
   player9:'#player-nickname-9',
   player10:'#player-nickname-10',
   shefir:"#sheriff-role-for-1",
   citizenRole2 :"#citizen-role-for-2",
   citizenRole3 :"#citizen-role-for-3",
   citizenRole4 :"#citizen-role-for-4",
   citizenRole5 :"#citizen-role-for-5",
   citizenRole6 :"#citizen-role-for-6",
   citizenRole7 :"#citizen-role-for-7",
   don:'#don-role-for-10',
   mafia8: '#mafia-role-for-8',
   mafia9: '#mafia-role-for-9',
   cardBody : '.card-body p-1 text-sm',
   backBtn: '#back-btn',
   vote1: '#vote-1',
   vote2: '#vote-2',
   vote3: '#vote-3',
   vote4: '#vote-4',
   vote5: '#vote-5',
   vote6: '#vote-6',
   vote7: '#vote-7',
   vote8: '#vote-8',
   vote9: '#vote-9',
   vote10: '#vote-10',
   voteZero: '#vote-zero', 
   playBtn : '#play-stop-btn',
   banImg:'https://maf-place-qa-fe.azurewebsites.net/static/m…/remove-user.7f36dbebc886bed9cf197f2cf6208015.svg',
   resBtn: '#results-btn',
   
}


//expected
const expected = {
    url: 'https://maf-place-qa-fe.azurewebsites.net/game/vote',
    gameDayUrl: 'https://maf-place-qa-fe.azurewebsites.net/game/day',
    btnFontColor: 'rgb(33, 37, 41)',
    btnBackGround: 'rgb(255, 193, 7)',
    playSing:'https://maf-place-qa-fe.azurewebsites.net/static/media/play.fb2c449812236c2f713ffee14cbd2595.svg',
    stopSing: 'https://maf-place-qa-fe.azurewebsites.net/static/media/stop.ae3d6e4b0e2638028d1b9137982856c5.svg',
    addFoul: 'https://maf-place-qa-fe.azurewebsites.net/static/media/warning.59dc143f897e3240fc61554cb49fecd5.svg',


}



//functions

const openPage = () => cy.visit('/game/vote');
const openDayPage = () => cy.visit('/game/day');
const chooseRole = () => {
    cy.get(selectors.shefir).click();
    cy.get(selectors.citizenRole2).click();
    cy.get(selectors.citizenRole3).click();
    cy.get(selectors.citizenRole4).click();
    cy.get(selectors.citizenRole5).click();
    cy.get(selectors.citizenRole6).click();
    cy.get(selectors.citizenRole7).click();
    cy.get(selectors.don).click();
    cy.get(selectors.mafia8).click();
    cy.get(selectors.mafia9).click();
    cy.get(selectors.nextButton).click();
    cy.get(selectors.nextButton).click();
};
const voting = () =>{
    
cy.get(selectors.vote1).click()
cy.get(selectors.vote2).click()
cy.get(selectors.vote3).click()
cy.get(selectors.vote4).click()
cy.get(selectors.vote5).click()
cy.get(selectors.vote6).click()
cy.get(selectors.vote7).click()
cy.get(selectors.vote8).click()
cy.get(selectors.vote9).click()
cy.get(selectors.vote10).click()

}
const vot3 = () => {
    cy.get("#vote-1-1").click()
    cy.get("#vote-1-2").click() 
    cy.get("#vote-1-3").click() 
    cy.get("#vote-1-4").click() 
    cy.get("#vote-1-5").click() 
    cy.get("#vote-2-6").click() 
    cy.get("#vote-2-7").click()
    cy.get("#vote-2-8").click()
    cy.get("#vote-2-9").click()
    cy.get("#vote-2-10").click() 
}
const votRaund3 =() => {
    cy.get("#vote-all-1").click()
    cy.get("#vote-all-2").click() 
    cy.get("#vote-all-3").click() 
    cy.get("#vote-all-4").click() 
    cy.get("#vote-all-5").click() 
    cy.get("#vote-none-6").click() 
    cy.get("#vote-none-7").click()
    cy.get("#vote-none-8").click()
    cy.get("#vote-none-9").click()
    cy.get("#vote-none-10").click()  
}

const voting2 = () =>{
    cy.get(".vote-button").click({multiple: true})
}
export default {
    ...selectors,
    expected,
    openPage,
    openDayPage,
    chooseRole,
    voting,
    voting2,
    vot3,
    votRaund3,
}