describe("Portfolio Navigation E2E Test", () => {
  it("Navigates through pages using navbar buttons", () => {
    cy.visit("http://localhost:5173");

    // Home
    cy.contains("Home").click();
    cy.contains("Welcome to My Portfolio").should("exist");

    // About
    cy.contains("About").click();
    cy.contains("About Me").should("exist");

    // Projects
    cy.contains("Projects").click();
    cy.contains("My Projects").should("exist");

    // Education
    cy.contains("Education").click();
    cy.contains("Education").should("exist");

    // Services
    cy.contains("Services").click();
    cy.contains("Services").should("exist");

    // Contact
    cy.contains("Contact").click();
    cy.contains("Contact Me").should("exist");
  });
});

it('portfolio', function() {
    cy.visit('http://localhost:5173/')
    cy.get('#root li:nth-child(2) button.nav-link').click();
    cy.get('#root li:nth-child(3) button.nav-link').click();
    cy.get('#root li:nth-child(4) button.nav-link').click();
    cy.get('#root li:nth-child(5) button.nav-link').click();
    cy.get('#root li:nth-child(6) button.nav-link').click();
    cy.get('#root li:nth-child(7) button.nav-link').click();
    cy.get('#root li:nth-child(8) button.nav-link').click();
    cy.get('#root li:nth-child(1) button.nav-link').click();
    cy.get('#root li:nth-child(2) button.nav-link').click();
    cy.get('#root img[alt="Logo"]').click();
    cy.get('#root img[alt="Nick Li"]').click();
    cy.get('#root li:nth-child(3) button.nav-link').click();
    cy.get('#root li:nth-child(4) button.nav-link').click();
    cy.get('#root li:nth-child(5) button.nav-link').click();
    cy.get('#root li:nth-child(6) button.nav-link').click();
    cy.get('[name="firstName"]').click();
    cy.get('[name="firstName"]').type('John');
    cy.get('[name="lastName"]').click();
    cy.get('[name="lastName"]').type('Doe');
    cy.get('[name="contactNumber"]').click();
    cy.get('[name="contactNumber"]').click();
    cy.get('[name="contactNumber"]').type('1123 456');
    cy.get('[name="contactNumber"]').click();
    cy.get('[name="contactNumber"]').clear();
    cy.get('[name="contactNumber"]').type('123 456');
    cy.get('[name="contactNumber"]').type(' 7890');
    cy.get('[name="email"]').click();
    cy.get('[name="email"]').type('john@gmail.com');
    cy.get('[name="message"]').click();
    cy.get('[name="message"]').type('hello');
    cy.get('#root button.primary').click();
    cy.get('#root li:nth-child(7) button.nav-link').click();
    cy.get('#root input[type="email"]').click();
    cy.get('#root input[type="email"]').type('john@gmail.com');
    cy.get('#root form.auth-form div:nth-child(2)').click();
    cy.get('#root input[type="password"]').click();
    cy.get('#root input[type="password"]').type('john123');
    cy.get('#root form.auth-form div:nth-child(1)').click();
    cy.get('#root li:nth-child(8) button.nav-link').click();
    cy.get('#root [name="name"]').click();
    cy.get('#root [name="name"]').type('john@gmail.com');
    cy.get('#root [name="email"]').click();
    cy.get('#root [name="email"]').type('john@gmail.com');
    cy.get('#root [name="name"]').click();
    cy.get('#root [name="name"]').clear();
    cy.get('#root [name="name"]').type('john');
    cy.get('#root [name="password"]').click();
    cy.get('#root [name="password"]').type('john');
    cy.get('#root button.primary').click();
    cy.get('#root li:nth-child(7) button.nav-link').click();
    cy.get('#root input[type="email"]').click();
    cy.get('#root input[type="password"]').click();
    cy.get('#root input[type="password"]').type('john');
    cy.get('#root button.primary').click();
});
