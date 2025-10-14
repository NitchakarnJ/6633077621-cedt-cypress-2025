it('interacting with element', () => {
   cy.visit('https://katalon-demo-cura.herokuapp.com/')

   cy.get('btn-make-appointment').click()

   cy.url().should('include', 'profile.php#login')

   cy.get('#txt-username').type('John doe')
   cy.get('#txt-password').type('ThisIsNotAPassword')

   cy.get('#btn-login').login()

   cy.url().should('include', '#appointment')

   cy.get('#combo_facility').select('Seoul CURA Healthcare Center')

   
});