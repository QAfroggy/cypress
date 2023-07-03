import VoteResult from "../../utils/pages/voteResult.js";
import PublicGame from "../../utils/pages/publicGame.js";
describe("Game creation", () => {
  let id = "";
  before(() => {
    PublicGame.openPage();
  });

  //PRECONDITIONS
  // ADD PLAYERS
  it("Add new players", () => {
    PublicGame.addPlayers();
    cy.get(PublicGame.randomSeating).click();
    cy.get(PublicGame.createGameBtn).click();
    cy.get(PublicGame.idValue)
      .invoke("text")
      .then(($el) => (id = $el));
    cy.get(PublicGame.startGameBtn).click();
    cy.get(VoteResult.nextButton).click();
  });

  // CHOOSE ROLES
  it("Choose a role", () => {
    VoteResult.chooseRole();
  });

  // TC 1 - page is displayed if nobody was nominated
  it("Vote page is displayed if nobody was nominated during the Day", () => {
    cy.get(VoteResult.nextButton).click();
    cy.url().should("eq", VoteResult.expected.url);
  });

  //TC 2 - Nobody was nominated!
  it("Appeared message ---Nobody was nominated----", () => {
    cy.get('.card-body').contains('Nobody was nominated!'); 
  });

  // TC 3 - A single player was nominated on Day 1 and stays in the game
  // Message-Since no voting is conducted after Day #1 with a single player nominated, player number 2 remains at the table.
  it("A single player was nominated on Day 1 and stays in the game  + message - Since.....", () => {
    cy.get(VoteResult.backBtn).click();
    cy.get(VoteResult.vote2).click();
    cy.get(VoteResult.nextButton).click();
    cy.get('.card-body').contains('Since no voting is conducted after Day #1 with a single player nominated, player number 2 remains at the table.');
  });

  //TC -4  A single player was nominated on Day 2+ and leaves the game automatically 
  // Message- Player number 2, since you are the only player nominated, you automatically leave the table. Your last minute
  it(" A single player was nominated on Day 2+ and leaves the game automatically.+ message Player number 2...", () => {
    cy.get(VoteResult.nextButton).click();
    cy.get(VoteResult.nextButton).click();
    cy.get(VoteResult.vote2).click();
    cy.get(VoteResult.nextButton).click();
    cy.get('.card-body').contains('Player number 2, since you are the only player nominated, you automatically leave the table. Your last minute')
    
  });
  // TC -5 Counter is visible
  it("Counter is visible", () => {
    cy.get(VoteResult.playBtn).should('be.visible');
    
  });
  // TC -6 Someone was disqualified from the game
  it("Someone was disqualified from the game:", () => {
    cy.get(VoteResult.backBtn).click();
    cy.get(VoteResult.backBtn).click();
    cy.get(VoteResult.backBtn).click();
    cy.get(VoteResult.backBtn).click();
    cy.get(VoteResult.vote2).click();
    cy.get('img[title="Ban this player"]').first().click();
    cy.get(VoteResult.nextButton).click();
    cy.get('.card-body').contains('The voting is cancelled due to a disqualified player since the last voting.')
   
    
  });
});
//TC -7 Back and Next buttoms
describe("Elements", () => {
  it("Next button", () => {
    cy.get(VoteResult.nextButton).should(
      "have.css",
      "color",
      VoteResult.expected.btnFontColor
    );
    cy.get(VoteResult.nextButton).should(
      "have.css",
      "background-color",
      VoteResult.expected.btnBackGround
    );
  });
  it("Back button", () => {
    cy.get(VoteResult.backBtn).should(
      "have.css",
      "color",
      VoteResult.expected.btnFontColor
    );
    cy.get(VoteResult.backBtn).should(
      "have.css",
      "background-color",
      VoteResult.expected.btnBackGround
    );
  });
    //comment field
  //   it("Comment field has a placeholder", () => {
  //     cy.get('#add_comment_text').should('be.visible');
  //     cy.get('#add_comment_text').should('have.attr','placeholder','Comment')
       

  // });
  // TC -8  Start button getting replaced by Stop button once the countdown is active
  it("Start button getting replaced by Stop button once the countdown is active.", () => {
    cy.get(VoteResult.backBtn).click();
    cy.get(VoteResult.playBtn).click();
    cy.get(VoteResult.playBtn).should('be.visible', VoteResult.expected.stopSing);
    cy.wait(4000);
    cy.get(VoteResult.playBtn).click();
    cy.get(VoteResult.playBtn).should('be.visible', VoteResult.expected.playSing);
  });
  //comment field
    it("Comment field has a placeholder", () => {
      cy.get('#add_comment_text').should('be.visible');
      cy.get('#add_comment_text').should('have.attr','placeholder','Comment')
       

  });
});
//});


describe("During voting until we get a final result:", () => {
  it("Message--The voting is cancelled. Player number N leaves the game immediately!", () => {
    //cy.get('img[title="Return this player"]').first().click();
    //cy.wait(1000);
    VoteResult.voting2()
   cy.get(VoteResult.nextButton).click();
  // cy.get('.card-body').contains('The voting is cancelled due to a disqualified player since the last voting.')
   
});
//TC - 9 All players stay after a shootout - message--All nominated players stay at the table!
it(" All players stay after a shootout - message--All nominated players stay at the table!", () => {
  VoteResult.vot3();
  cy.get(VoteResult.resBtn).click();
  VoteResult.vot3();
  cy.get(VoteResult.resBtn).click();
  VoteResult.votRaund3();
  cy.get(VoteResult.resBtn).click();
  cy.get('.card-body').contains('All nominated players stay at the table!')
  
});
});
