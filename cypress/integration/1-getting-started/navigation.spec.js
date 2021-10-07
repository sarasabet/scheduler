
describe("Navigation", () => {
  
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
     cy.get("li").eq(1).click()   
 
  });

  it("should navigate to Tuesday-v2", () => {
    cy.get("li").contains("Tuesday").click();
  })

  it("Should have white background when is selected ", () => {
    cy.contains("[data-testid=day]", "Tuesday")
    .click()
    .should("have.class", "day-list__item--selected");
  
  })


  

});

