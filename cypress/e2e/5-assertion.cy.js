it('assertion', () => {
	cy.visit('https://katalon-demo-cura.herokuapp.com/')
	cy.get('#btn-make-appointment').click()

	//Assert URL
	cy.url().should('include', 'profile.php#login')

	//Assert title
	cy.title().should('eq', 'CURA Healthcare Service')

	// Assert element visible
	cy.get('ul.list-unstyled > li:nth-child(2) > a')
		.should('be.visible')
		.should('have.text', 'info@katalon.com')

	cy.get('#btn-make-appointment').click()
	cy.get('#btn-login').should('be.enabled')

	// Assertion property
	cy.get('#txt-username').should('have.attr', 'placeholder', 'Username')
	cy.get('#txt-username').should('have.attr', 'class', 'form-control')

	// Assertion length
	cy.get('input').should('have.length', 4)

	// Login
	cy.get('#txt-username').type('John Doe').should('have.value', 'John Doe')
	cy.get('#txt-password').type('ThisIsNotAPassword')
	cy.get('#btn-login').click()

	// Verify login success
	cy.url().should('include', '#appointment')

	cy.get('#combo_facility')
		.select('Seoul CURA Healthcare Center')
		.should('have.value', 'Seoul CURA Healthcare Center')

	// Interact with checkbox
	cy.get('#chk_hospotal_readmission').check().should('be.checked')
})
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
// npx cypress open
