describe('to do app', () => {

    const S = {
        title: '[data-cy="title"]',
        menuLink: 'p-menuitem-link',
        todoItem: '[data-cy="todo-item"]',
        inputField: '[data-cy="todo-text"]',
        addButton: '[data-cy="add-btn"]',
        postPageLabel: '[data-automationid="posts-page"]',
        todoListLabel: '[data-automationid="todo-page"]',
        galleryLabel:'[data-automationid="gallery-page"]',
        aboutLabel: '[data-automationid="about-page"]',
        deleteItemButton: '[data-cy="delete-btn"]',
        editButton: '[data-cy="edit-btn"]',
        editTextField: '[data-cy="edit-text"]',
        saveButton : '[data-cy="save-btn"]',
        itemLabel : '[data-cy="label"]'
        }; 

    
//3. Edit an Item in todo list and check the text
    it.only('Delete the item from the list', () => {
    cy.visit('http://localhost:4200/todo')

    cy.get(S.inputField).type('Option1')
    cy.get(S.addButton).click()

    // cy.get(S.inputField).type('Option2')
    // cy.get(S.addButton).click()

    cy.get(S.editButton).click()
    cy.get(S.editTextField).clear()

    cy.get(S.editTextField).type('new year')
    cy.get(S.saveButton).click()
    cy.get(S.itemLabel).should('have.text','new year')

    
});
});
