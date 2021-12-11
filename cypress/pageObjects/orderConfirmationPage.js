class OrderConfirmationPage {

    getAddOneSizeFitsAllButton() { return cy.get('button[data-test-id=A2BButton_OneSize]') }
    getCheckoutButton() { return cy.get('button[data-test-id=CheckoutButton]') }
    getOrderAndPayNowButton() { return cy.get('#sticky-button button span[class=confirm]') }
  }
  
  export default OrderConfirmationPage
  