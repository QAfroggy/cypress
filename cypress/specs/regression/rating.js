import Rating from "../../utils/pages/rating.js";

describe("Elements", () => {
  before(() => {
    Rating.openPage();
  });

  it("Search bar  is displayed", () => {
    cy.get(Rating.searchBar).should("be.visible");
  });

  it("Table header  is displayed", () => {
    cy.get(Rating.tableHeader).should("be.visible");
  });

  it("Table body  contains 10 rows", () => {
    //cy.get(Rating.tableBody).find("tr");
    //cy.get(Rating.tableBody).children().should('have.length',10)
    cy.get("#rating-table-body tr").should("have.length", 10); //if we have some kids in this case. Space is very important
  });

  it("Each row contains 6 columns", () => {
    cy.get("#player_1 td").should("have.length", 6);
    cy.get("#player_2 td").should("have.length", 6);
    cy.get("#player_3 td").should("have.length", 6);
    cy.get("#player_4 td").should("have.length", 6);
    cy.get("#player_5 td").should("have.length", 6);
    cy.get("#player_6 td").should("have.length", 6);
    cy.get("#player_7 td").should("have.length", 6);
    cy.get("#player_8 td").should("have.length", 6);
    cy.get("#player_9 td").should("have.length", 6);
    cy.get("#player_10 td").should("have.length", 6);
  });

  it("Page navigation is displayed", () => {
    cy.get(Rating.pageNavigation).should("be.visible");
  });
});

  describe("Values", () => {
    it("Search bar has placeholder --Search by name or nickname", () => {
      cy.get(Rating.searchBar).should(
        "have.attr",
        "placeholder",
        Rating.expected.placeHolder
      );
    });
  });

  describe("Functionality", () => {
    it(" Get a random player name from the list", () => {
      cy.get(Rating.searchBar).type(Rating.expected.admin);
      cy.get("#nickname_1").contains('Admin').should('be.visible')
      cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player2);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player3);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player4);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player5);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player6);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player7);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player8);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player9);
      // cy.get(Rating.searchBar).clear();
      // cy.get(Rating.searchBar).type(Rating.expected.player10);
      // cy.get(Rating.searchBar).clear();
    });

    it("click a random nav button and check that the first player number on that page", () => {
      cy.get("#nav-page-btn-2").click();
      cy.get("#no_11").should('have.text','11')
    });

    describe("Navigation", () => {
      let lastNumber;
      beforeEach(() => {
        cy.get(".page-link")
          .last()
          .invoke("text")
          .then((text) => (lastNumber = text));
      });

      // it('by default (on the 1st page) nav bar shows `1-7 buttons, ..., last page', () => {
      //   cy.get('.page-link').first().click();
      //   //cy.get('#page-navigation').should('have.text', '1...9101112131415')
      //   //cy.get('.page-link').contains('1') .should('be.visible')

      //   cy.get('#page-navigation').should('have.text', '1234567...lastNumber')

      // });

      it("by default (on the 1st page) nav bar shows `1-7 buttons, ..., last page", () => {
        cy.get(".page-link").first().click();
        cy.get(".page-link").contains("1").should("be.visible");
        cy.get(".page-link").contains("2").should("be.visible");
        cy.get(".page-link").contains("3").should("be.visible");
        cy.get(".page-link").contains("4").should("be.visible");
        cy.get(".page-link").contains("5").should("be.visible");
        cy.get(".page-link").contains("6").should("be.visible");
        cy.get(".page-link").contains("7").should("be.visible");
        cy.get("#elipsis-1").contains("...").should("be.visible");
        cy.get(".page-link").contains(lastNumber).should("be.visible");
      });
      it(" on the 5th page it shows `1-7 buttons, ..., last page", () => {
        cy.get(".page-link").eq(4).click();
        cy.get(".page-link").contains("1").should("be.visible");
        cy.get(".page-link").contains("2").should("be.visible");
        cy.get(".page-link").contains("3").should("be.visible");
        cy.get(".page-link").contains("4").should("be.visible");
        cy.get(".page-link").contains("5").should("be.visible");
        cy.get(".page-link").contains("6").should("be.visible");
        cy.get(".page-link").contains("7").should("be.visible");
        cy.get("#elipsis-1").contains("...").should("be.visible");
        cy.get(".page-link").contains(lastNumber).should("be.visible");
      });

      it("on the 6th page it shows `1, ..., 4-8, ..., last page", () => {
        cy.get(".page-link").eq(5).click();
        cy.get(".page-link").contains("1").should("be.visible");
        cy.get("#elipsis-1").contains("...").should("be.visible");
        cy.get(".page-link").contains("4").should("be.visible");
        cy.get(".page-link").contains("5").should("be.visible");
        cy.get(".page-link").contains("6").should("be.visible");
        cy.get(".page-link").contains("7").should("be.visible");
        cy.get(".page-link").contains("8").should("be.visible");
        cy.get("#elipsis-2").contains("...").should("be.visible");
        cy.get(".page-link").contains(lastNumber).should("be.visible");
      });

      it("one the last page it shows `1, ..., last 7 pages", () => {
        cy.get(".page-link").last().click();
        cy.get(".page-link").contains("1").should("be.visible");
        cy.get(".page-link").contains(lastNumber).should("be.visible");
        cy.get(".page-link")
          .contains(lastNumber - 1)
          .should("be.visible");
        cy.get(".page-link")
          .contains(lastNumber - 2)
          .should("be.visible");
        cy.get(".page-link")
          .contains(lastNumber - 3)
          .should("be.visible");
        cy.get(".page-link")
          .contains(lastNumber - 4)
          .should("be.visible");
        cy.get(".page-link")
          .contains(lastNumber - 5)
          .should("be.visible");
        cy.get(".page-link")
          .contains(lastNumber - 6)
          .should("be.visible");
        cy.get("#elipsis-1").contains("...").should("be.visible");
        //cy.get('#page-navigation').should('have.text', `1...${lastNumber -6}${lastNumber -5})
      });
    });
  });
  //cy.get(Rating.tableBody).children().should('have.length',10)
  //cy.get('#rating-table-body tr').should('have.length',10) if we have some kids in this case. Space is very important
  //
  //functionality
  //it()
  //describe('Elements', () => {

  // beforeEach(()=>{
  // cy.get('.page-link').last().invoke('text').then(text => lastNumber = text) if I dont know ex what number
  //})

  //  it('Nav bar test last page', () => {

  //cy.get('.page-link').last().click();
  //cy.get('.page-link').contains('1') .should('be.visible")
  // cy.get('.page-link').last().invoke('text).then(text => lastNumber = text) if I dont know ex what number

  //cy.get('.page-link').contains(lastNumber -1) .should('be.visible")
  //cy.get('.page-link').contains(lastNumber -2) .should('be.visible")
  //cy.get('.page-link').contains(lastNumber -3) .should('be.visible")
  //cy.get('.page-link').contains('1') .should('be.visible")

  //cy.get('.page-item').contains('...').should('be.visible')
  /*


         cy.get('#page-navigation').should('have.text', '1...${lastNumber -6}${lastNumber -5}9101112131415')



*/

