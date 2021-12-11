class ProductPage {
    visit() {
      cy.visit('/')
      cy.get('#onetrust-accept-btn-handler').click()
    }

    loginWithTestUser(user, password) {
        this.getProfileIcon().click()
        this.getEmailInput().type(user)
        this.getPasswordInput().type(password)
    }

    getProfileIcon() { return cy.get('[data-test-id=UserAccount]') }
    getEmailInput() { return cy.get('[data-testid=EmailField]') }
    getPasswordInput() { return cy.get('[data-testid=PasswordField]') }
    getLoginButton() { return cy.get('[data-testid=SubmitLogin]') }
  }
  
  export default ProductPage
  