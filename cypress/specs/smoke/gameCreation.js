import PublicGame from "../../utils/pages/publicGame.js";

describe("Creation of a Public game", () => {
  let id = "";
  before(() => {
    PublicGame.openPage();
  });

  it("Add new players", () => {
    PublicGame.addPlayers();
    // cy.get(PublicGame.addPlayer).type("Player" + 1);
    // cy.get(PublicGame.addPlayerBtn).click();
    // cy.get("#players-table-row-1").should("be.visible");
    // cy.get("#add_player_field").type("Bbbb");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-2").should("be.visible");
    // cy.get("#add_player_field").type("Cccc");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-3").should("be.visible");
    // cy.get("#add_player_field").type("Dddd");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-4").should("be.visible");
    // cy.get("#add_player_field").type("Eeee");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-5").should("be.visible");
    // cy.get("#add_player_field").type("Ffff");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-6").should("be.visible");
    // cy.get("#add_player_field").type("Gggg");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-7").should("be.visible");
    // cy.get("#add_player_field").type("Hhhh");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-8").should("be.visible");
    // cy.get("#add_player_field").type("Iiii");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-9").should("be.visible");
    // cy.get("#add_player_field").type("Jjjj");
    // cy.get("#add_player_button").click();
    // cy.get("#players-table-row-10").should("be.visible");
    cy.get(PublicGame.randomSeating).click();
    cy.get(PublicGame.createGameBtn).click();
    cy.get(PublicGame.idValue)
      .invoke("text")
      .then(($el) => (id = $el));
    cy.get(PublicGame.startGameBtn).click();
    cy.get(PublicGame.initialPage).should("be.visible");
  });

     it('Game not fouded', () => {
        PublicGame.openPage();
        cy.get(PublicGame.searchTab).click();
         cy.get(PublicGame.searchGameField).type(PublicGame.expected.wrongId);
         cy.get(PublicGame.searchGameBtn).click();
         cy.get(PublicGame.errorMessage).should('have.text', PublicGame.expected.errorMassage);

   })

  it("Verification is game is saved", () => {
   
    cy.get(PublicGame.searchGameField).clear().type(id);
    cy.get(PublicGame.searchGameBtn).click();
    cy.get(PublicGame.continueGameBtn).click();
    cy.get(PublicGame.initialPage).should("be.visible");
   
  });
});
