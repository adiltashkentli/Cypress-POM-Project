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
        cy.get(locators.search_page.chooseBrandAsusfrFilters).click()

    })

});