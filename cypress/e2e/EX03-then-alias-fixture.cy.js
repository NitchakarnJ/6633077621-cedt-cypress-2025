
import '../support/commands'

let data;

describe('Login Feature Testing (Then / Alias / Fixture)', () => {
  
  before(() => {
    cy.fixture('cura').then((d) => { data = d; });
  });

  beforeEach(() => {
    cy.visit(data.baseUrl);
    cy.loginCura(data.user, data.pass);

    
    cy.get('#combo_facility').as('facility');
    cy.get('#chk_hospotal_readmission').as('readmission');
    cy.get('#radio_program_medicare').as('medicare');
    cy.get('#radio_program_medicaid').as('medicaid');
    cy.get('#radio_program_none').as('none');
    cy.get('#txt_visit_date').as('visitDate');
    cy.get('#txt_comment').as('comment');
    cy.get('#btn-book-appointment').as('bookBtn');
  });

  it('Verify h2 contains "Make Appointment"', () => {
    cy.get('h2').should('have.text', 'Make Appointment');
  });

  it('Verify facility options', () => {
    cy.get('@facility').find('option').then(($opts) => {
      const values = $opts.toArray().map((o) => o.value);
      expect(values).to.include.members(data.facilities);
      });

    data.facilities.forEach((f) => {
      cy.get('@facility').select(f).should('have.value', f);
    });
  });

  it('Verify readmission checkbox and health care program', () => {
    cy.get('@readmission').check().should('be.checked');
    cy.get(`#radio_program_${data.program}`).check().should('be.checked');
  });

  it('Verify can input current date on Visit Date (locale from fixture)', () => {
    const today = new Date().toLocaleDateString(data.locale || 'en-GB');
    cy.get('@visitDate').clear().type(today).should('have.value', today);
  });

  it('Verify can input comment from fixture', () => {
    cy.get('@comment').clear().type(data.comment).should('have.value', data.comment);
  });

  it('Fill form completely and submit appointment (Then + Alias)', () => {
    const today = new Date().toLocaleDateString(data.locale || 'en-GB');
    const expectedProgram = data.program.charAt(0).toUpperCase() + data.program.slice(1);

    cy.get('@facility').select(data.facilities[0]).should('have.value', data.facilities[0]);
    cy.get('@readmission').check().should('be.checked');
    cy.get(`#radio_program_${data.program}`).check().should('be.checked');
    cy.get('@comment').clear().type(data.comment);
    cy.get('@visitDate').clear().type(today).should('have.value', today);
    cy.get('@bookBtn').should('be.visible').and('not.be.disabled').click();

    cy.url().should('include', 'appointment.php#summary');
    cy.get('h2').should('contain', 'Appointment Confirmation');

   
    cy.get('#facility').invoke('text').then((t) => expect(t.trim()).to.equal(data.facilities[0]));
    cy.get('#hospital_readmission').invoke('text').then((t) => expect(t.trim()).to.equal('Yes'));
    cy.get('#program').invoke('text').then((t) => expect(t.trim()).to.equal(expectedProgram));
    cy.get('#comment').invoke('text').then((t) => expect(t.trim()).to.equal(data.comment));
    cy.get('#visit_date').invoke('text').then((t) => expect(t.trim()).to.equal(today));
    
  });
});
