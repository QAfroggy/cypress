

// selectors
const selectors = {
  page:'#public-game',
  randomSeating: '#random-seating',
  createGameBtn: '#create-game-button',
  idValue: '#id-value',
  startGameBtn: '#start-game-button',
  initialPage: '#initial-page',
  searchGameField: '#search_game_field',
  searchGameBtn: '#search_game_button',
  continueGameBtn: '#continue-game-button',
  searchTab: "#search-tab",
  errorMessage: '#no-game-message',
  addPlayer: '#add_player_field',
  addPlayerBtn: '#add_player_button',
  

}

//expec
const expected = {
url: 'https://maf-place-qa-fe.azurewebsites.net/public-game',
wrongId: '6364e65eecf0c44850c20749',
errorMassage: 'No game with this ID or it was ended',
}


//functions
const openPage = () =>{
  cy.visit('/public-game')
}

const addPlayers = () => {
  for(let i = 1; i <=10; i++){
    cy.get(selectors.addPlayer).type("Player" + i);
    cy.get(selectors.addPlayerBtn).click();
  }
}

export default {
    ...selectors,
    expected,
    openPage,
    addPlayers,
}