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
        editTextField: '[data-cy="edit-text"]'
        }; 

    // beforeEach(() => {
    
    //   cy.visit('http://localhost:4200')
    // });

    it('test welcome page', () => {
        cy.visit('http://localhost:4200')
    cy.get(S.title).should('have.text','welcome!')
    cy.url().should('include', 'home') // => true
    });  
    
    
    it.skip('should check navigation labels', () => {
        cy.visit('http://localhost:4200')
        cy.get(S.menuLink).should('have.text', ['Home']);
      // .should('have.attr', 'href').and('include', 'contact')
      });


    it('Verify todoItems', () => {
        cy.visit('http://localhost:4200/todo')

        cy.get(S.inputField).type('Option1')
        cy.get(S.addButton).click()

        cy.get(S.inputField).type('Option2')
        cy.get(S.addButton).click()

        cy.get(S.todoItem).should('have.length',2)


    }); 


    // Homework 
    // 1. check Title on all pages 

    it('test title Todo list page', () => {
        cy.visit('http://localhost:4200')
        cy.get(S.todoListLabel).click()
    cy.get(S.title).should('have.text','Todo list')
    cy.url().should('include', 'todo') // => true
    }); 

    it('test title Posts page', () => {
        cy.visit('http://localhost:4200')
        cy.get(S.postPageLabel).click()
        cy.get(S.title).should('have.text','Posts')
        cy.url().should('include', 'posts') // => true

    });

    it('test title Gallery page', () => {
        cy.visit('http://localhost:4200')
        cy.get(S.galleryLabel).click()
        cy.get(S.title).should('have.text','Gallery')
        cy.url().should('include', 'gallery') // => true

    });

    it('test title About page', () => {
        cy.visit('http://localhost:4200')
        cy.get(S.aboutLabel).click()
        cy.get(S.title).should('have.text','About')
        cy.url().should('include', 'about') // => true

    });

    //2. Delete an Item from the list and check the lenght of items in the list

    it('Delete the item from the list', () => {
        cy.visit('http://localhost:4200/todo')

        cy.get(S.inputField).type('Option1')
        cy.get(S.addButton).click()

        cy.get(S.inputField).type('Option2')
        cy.get(S.addButton).click()

        cy.get(S.deleteItemButton).eq(0).click()
        cy.get(S.todoItem).should('have.length',1)
});

//3. Edit an Item in todo list and check the text
    it.only('Delete the item from the list', () => {
    cy.visit('http://localhost:4200/todo')

    cy.get(S.inputField).type('Option1')
    cy.get(S.addButton).click()

    cy.get(S.inputField).type('Option2')
    cy.get(S.addButton).click()

    cy.get(S.editButton).eq(0).click()
    cy.get(S.editTextField).clear()

    cy.get(S.editTextField).type('new year')
    cy.get(S.editButton).eq(0).click()
    cy.get(S.inputField).eq(0).should('have.text','new year')

    
});
});
