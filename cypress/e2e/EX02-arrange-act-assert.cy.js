describe('Login Feature Testing', () => {


	it('Verify login pass with valid user', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()

		cy.get('#txt-username').type('John Doe')
		cy.get('#txt-password').type('ThisIsNotAPassword')

		cy.get('#btn-login').click()

		cy.url().should('include', '#appointment')
	})


	it('Verify login fail with invalid password', () => {
     
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()

		cy.get('#txt-username').type('John Doe')
		cy.get('#txt-password').type('ThisIsAPassword')

		cy.get('#btn-login').click()

		cy.get('p.lead.text-danger').should(
			'have.text',
			'Login failed! Please ensure the username and password are valid.'
		)
	})

	it('Verify login fail with invalid username', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
      cy.get('#btn-make-appointment').click()

      cy.get('#txt-username').type('John')
      cy.get('#txt-password').type('ThisIsNotAPassword')

      cy.get('#btn-login').click()

      cy.get('p.lead.text-danger').should(
      'have.text',
      'Login failed! Please ensure the username and password are valid.'
      )

   })
})
