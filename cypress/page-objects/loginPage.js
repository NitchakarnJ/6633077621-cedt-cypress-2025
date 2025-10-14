class LoginPage {

  static usernameInput = '#user_login'
  static passwordInput = '#user_password'
  static submitButton  = 'input[name="submit"]'
  static errorAlert    = '.alert-error'

  static visit() {
    cy.visit('http://zero.webappsecurity.com/login.html')
  }

  static fillUsername(username) {
    cy.get(this.usernameInput).clear().type(username)
  }

  static fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password)
  }

  static clickSubmit() {
    cy.get(this.submitButton).click()
  }

  static verifyErrorMessage() {
    cy.get(this.errorAlert)
      .should('be.visible')
      .and('contain.text', 'Login and/or password are wrong')
  }
}

module.exports = { LoginPage }