describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Visit the homepage before each test
  });

  it("should load the homepage correctly", () => {
    // Verify the presence of the main heading
    cy.contains("Your guided path to programming enlightnment").should("be.visible");
    // Check if the logo image is loaded correctly
    cy.get("img").should("have.attr", "src").and("include", "logo");
  });

  it("should have a visible navigation bar", () => {
    // Verify the presence of the navigation bar
    cy.get("nav").should("be.visible");
  });

  it("should have a working quiz generation button", () => {
    // Verify the presence and functionality of the sign-up button
    cy.contains("Quiz Generation").should("be.visible").click();
    // Check if the sign-up form is displayed
    cy.url().should("include", "/quiz-gen");
  });

  it("should display the footer correctly", () => {
    // Verify the presence of the footer
    cy.get("footer").should("be.visible");
    // Check if the footer contains the expected text
    cy.get("footer").contains("© 2024 Copyright Text").should("be.visible");
  });
});