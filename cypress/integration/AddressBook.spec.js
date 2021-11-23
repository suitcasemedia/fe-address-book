
import dotenv from 'dotenv'
dotenv.config()
/* eslint-disable no-undef */
describe('Desplays articls', () => {
  
    beforeEach(() => {
    
      cy.visit('http://localhost:3000')
      cy.server();
      
      cy.intercept( `https://api.getaddress.io/find//sw24hp?api-key=E36XImKGt06KY_rJYrlJPw33467`,{fixture: 'addresses.json'});
       
      cy.log("All the stub should be loaded");
     
    });
    
    it('allows you to find and save addresses', () => {
      cy.get('.sc-bdvvtL').click();
      cy.get('#asynchronous-demo').click().type('sw24hp');
    
       
       
    });
  
    
  
   
  
  });
 