it('Locate elements', () => {
   cy.visit('https://katalon-demo-cura.herokuapp.com/')

   // Locate by ID
   cy.get('btn-make-appointment').click()

   // Locate by text
   cy.contains('Please login to make appointment.').should('be.visible')

   cy.get('input').eq(2).type('John Doe')
});