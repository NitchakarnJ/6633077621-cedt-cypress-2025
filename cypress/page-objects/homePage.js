class HomePage {
  static menuTabShouldVisible() {

    cy.location('pathname', { timeout: 10000 })
      .should('match', /(\/index\.html|\/bank\/account-summary\.html)$/)


    cy.get('#settingsBox .dropdown-toggle', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'username')


    cy.get('ul.nav-tabs', { timeout: 10000 })
      .should('be.visible')
      .and(($ul) => {
        const t = $ul.text()
        expect(t).to.match(/Account Summary|Account Activity|Transfer Funds|Pay Bills|My Money Map|Online Statements/i)
      })
  }
}

module.exports = { HomePage }