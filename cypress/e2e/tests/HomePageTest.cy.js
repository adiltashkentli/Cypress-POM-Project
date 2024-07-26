import locators from "../../support/locators";

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
    it('should display the home page', () => {  
        cy.url().should('include', 'https://www.amazon.ae/')
        cy.title().should('include', 'Amazon.ae: Shop Online in UAE - Low Prices on Electronics, Fashion, Mobiles, Grocery & more')
        
    });
    it.only("Searching a product", () => {
        cy.get(locators.search_page.searchBox).type('asus rog phone 8 pro').type('{enter}')
        cy.contains('Rog Phone 8 PRO AI2401 Edition Dual Sim 24GB RAM 1TB 5G Black - International Version').click()
        cy.get(locators.search_page.addToCardButton).should('be.visible').click()
        cy.get(locators.search_page.goToBasketButton).should('be.visible').click()
        cy.get(locators.search_page.shoppingCartAssertText).should('be.visible', 'Shopping Cart')
    })

});