const { LoginPage } = require('../page-objects/loginPage')
const { HomePage }  = require('../page-objects/homePage')
describe('Assignment 4', () => {

  it('Login with valid user', () => {
    LoginPage.visit()
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.clickSubmit()

    HomePage.menuTabShouldVisible()
  })

  it('Login with invalid user', () => {
    LoginPage.visit()
    LoginPage.fillUsername('wronguser')
    LoginPage.fillPassword('wrongpass')
    LoginPage.clickSubmit()

    LoginPage.verifyErrorMessage()
  })

})