describe('Login Feature Testing', () => {
  const facilities = [
      'Tokyo CURA Healthcare Center',
      'Hongkong CURA Healthcare Center',
      'Seoul CURA Healthcare Center',
    ];
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.get('#btn-make-appointment').click();

    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');

    cy.get('#btn-login').click();

    cy.url().should('include', '#appointment');
  });

  it('Verify h2 contains "Make Appointment"', () => {
    cy.get('h2').should('have.text', 'Make Appointment');
  });

  it('Verify can select all facility combo boxes', () => {
    facilities.forEach((facility) => {
      cy.get('#combo_facility')
        .select(facility)
        .should('have.value', facility);
    });
  });

  it('Verify that can select apply for hospital readmission checkbox', () => {

   cy.get('#radio_program_medicare')
      .check()
      .should('be.checked');

   cy.get('#radio_program_medicaid')
      .check()
      .should('be.checked');

   cy.get('#radio_program_none')
      .check()
      .should('be.checked');
   });
   it('Verify that can input current date on Visit Date', () => {
   const today = new Date().toLocaleDateString('en-GB');

   cy.get('#txt_visit_date')
      .clear()           
      .type(today)
      .should('have.value', today); 
   });


   it('Verify that can input comment', () => {
   const comment = 'test comment';
   
   cy.get('#txt_comment')
      .clear() 
      .type(comment)
      .should('have.value', comment);
   });

    it.only('Fill form completely and submit appointment', () => {
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');

    cy.get('#chk_hospotal_readmission').check().should('be.checked');

    cy.get('#radio_program_medicare').check().should('be.checked');

    const comment = 'test comment';
    cy.get('#txt_comment')
      .clear() 
      .type(comment)
      .should('have.value', comment);
   const today = new Date().toLocaleDateString('en-GB'); 
    cy.get('#txt_visit_date')          
      .type(today)
      .should('have.value', today); 
      
    cy.get('#btn-book-appointment')
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    cy.url().should('include', 'appointment.php#summary');
    cy.get('h2').should('contain', 'Appointment Confirmation');
   });

    
});


