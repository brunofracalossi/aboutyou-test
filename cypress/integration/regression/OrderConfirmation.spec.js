import ProductPage from '../../pageObjects/productPage'
import LoginPage from '../../pageObjects/loginPage'

const productPage = new ProductPage()
const loginPage = new LoginPage()

describe('order confirmation page test scenarios', () => {
  beforeEach(() => {
    loginPage.visit()
    cy.fixture("userData").then((user) => {
      loginPage.loginWithTestUser(user.email, user.password)
    })
    productPage.visit()
    productPage.getAddOneSizeFitsAllButton().click()
    productPage.getCheckoutButton().click()
  })

  it('can increase product amount', () => {
    productPage.getProductQuantityInput().clear()
    productPage.getProductQuantityInput().type('2').type('{enter}')
    productPage.getProductQuantityInput().should('have.attr', 'value').and('eq', '2')
  })
})
