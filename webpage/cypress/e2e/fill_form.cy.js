describe('FillForm.cy.js', () => {
    it('fills form', () => {
        cy.visit('http://localhost:3000')
        cy.wait(3000) // wait for 3 seconds
        cy.get('#order-id').find('option').eq(1).then(element => cy.get('#order-id').select(element.val()))
        cy.wait(3000) // wait for 3 seconds
        cy.get('#order-status').select('Shipping')
        cy.wait(3000) // wait for 3 seconds
        cy.get('.submit-button').click()
    })
})
