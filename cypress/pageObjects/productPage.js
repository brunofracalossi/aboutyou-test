class ProductPage {
    visit() {
      cy.visit('/p/herschel/backpack-settlement-2027223')
    }

    getAddOneSizeFitsAllButton() { return cy.get('button[data-test-id=A2BButton_OneSize]') }
    getCheckoutButton() { return cy.get('button[data-test-id=CheckoutButton]') }
    getProductQuantityInput() { return cy.get('[class=quantity] input') }
  }
  
  export default ProductPage
  