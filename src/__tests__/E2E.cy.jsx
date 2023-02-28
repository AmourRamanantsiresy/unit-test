import React from "react"
import {mount} from 'cypress/react18'
import App from '../App'
import { Input } from "../Input"


describe("This", ()=> {
    it('should be an e2e test', ()=> {
        cy.viewport('macbook-16')

        const app = mount(<App/>)
        
        cy.get('#add-todo').type("this is a new todo{enter}").clear().blur();

        cy.get('.App > :nth-child(1)').contains('this is a new todo')
        
        cy.get('[data-testid="test-this is a new todo-0"]').click();

        cy.get('.App > :nth-child(2)').contains('this is a new todo')
    })
})