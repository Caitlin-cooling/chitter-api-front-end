describe("Peeps", function() {
  it("shows the peeps on the page", function() {
    cy.visit("http://localhost:8080/chitter.html")
    cy.contains("View Peeps").click()
    cy.contains("test")
  });
});
