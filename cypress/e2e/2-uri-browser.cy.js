it('URL AND BROWSER COMMAND', () => {
   cy.visit('https://katalon-demo-cura.herokuapp.com/')

   cy.url().should('include','katalon-demo-cura')

   cy.title().should('equal','CURA Healthcare Service')

   cy.viewport('iphone-x')



});