/* eslint-disable no-undef */
describe('Desplays articls', () => {
  
    beforeEach(() => {
    
      cy.visit('http://localhost:3000')
      cy.server();
      
      cy.intercept( 'https://api-news.prd.shows.itv.com/discovery/national/top-stories',{fixture: 'top-stories.json'});
       
      cy.log("All the stub should be loaded");
     
    });
    
    it('displays stories', () => {
        cy.get(':nth-child(1) > .tile_tile__wrapper__2IzNA > .tile_tile__heading-container__xJDiI > .tile_tile__heading-link__DnkVU');
        cy.contains('Cricket bosses meet in wake of Rafiq testimony on institutional racism') ;
        cy.get(':nth-child(2) > .tile_tile__wrapper__2IzNA > .tile_tile__heading-container__xJDiI > .tile_tile__heading-link__DnkVU');
        cy.contains('England cricketer Alex Hales sorry for \'reckless\' blackface')
        cy.get(':nth-child(3) > .tile_tile__wrapper__2IzNA > .tile_tile__heading-container__xJDiI > .tile_tile__heading-link__DnkVU');
        cy.contains('I\'ve let them down\': Australia cricket captain quits over sexting scandal');
       
    });
  
    
  
   
  
  });
 