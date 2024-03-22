describe("automationexercise test cases",()=>{
it("Register User",()=>{
    cy.visit("https://automationexercise.com/")
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should("have.text","New User Signup!")
    cy.get('[data-qa="signup-name"]').type("khato")
    cy.get('[data-qa="signup-email"]').type("x.dzidzaria85@gmail.com002")
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(1) > b').should("have.text","Enter Account Information")
    cy.get('.clearfix > :nth-child(1)').should("have.text","Title")
    cy.get('#id_gender1').should("have.value","Mr")
    cy.get('#id_gender2').should("have.value","Mrs")
    cy.get('form > :nth-child(3) > label').should("have.text","Name *")
    cy.get('form > :nth-child(4) > label').should("have.text","Email *")
    cy.get(':nth-child(5) > label').should("have.text","Password *")
    cy.get('[data-qa="password"]').type(123456)
    cy.get(':nth-child(6) > label').should("have.text","Date of Birth")
    cy.get('#newsletter').type("checkbox",'Sign up for our newsletter!', 
    'Receive special offers from our partners!')
    cy.get(':nth-child(11) > label').should("have.text","First name *")
    cy.get(':nth-child(12) > label').should("have.text","Last name *")
    cy.get('[data-qa="first_name"]').type("khatuna")
    cy.get('[data-qa="last_name"]').type("DZIDZARIA")
    cy.get(':nth-child(13) > label').should("have.text","Company")
    cy.get('[data-qa="company"]').type("ltd.engurhesi")
    cy.get(':nth-child(14) > label').should("have.text","Address * (Street address, P.O. Box, Company name, etc.)")
    cy.get(':nth-child(15) > label').should("have.text","Address 2")
    cy.get(':nth-child(16) > label').should("have.text","Country * ")
    cy.get('[data-qa="address"]').type("walenjixa,jvari,chichinadze2")
    cy.get('[data-qa="address2"]').type("zugdidi")
    cy.get('[data-qa="country"]').type("ზუგდიდი")
    cy.get('[data-qa="state"]').type("სამეგრელო")
    cy.get('[data-qa="city"]').type("წალენჯიხა")
    cy.get('[data-qa="zipcode"]').type(2100)
    cy.get('[data-qa="mobile_number"]').type(595302273)
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()
    /*cy.get(':nth-child(10) > a').should("have.text","Logged in as khato") */
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should("have.text"," Delete Account").click()
    cy.get('b').should("have.text","Account Deleted!")
    cy.get('[data-qa="continue-button"]').click()
})
})






