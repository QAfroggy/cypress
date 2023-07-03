

describe('Authorization positive', () => {
let response 
 before(async() => {
   response = await cy.request(`https://maf-place-qa-srv.azurewebsites.net/mafia-users/${Cypress.env().USER_ID}?pass=${Cypress.env().PASS_PLAYER}`)
 console.log(response)
})


    it('status is 200',  ()=> {
expect(response.status).to.equal(200)

      
    });
    it('Message is "autorized" ',  ()=> {
      expect(response.body.message).to.equal('authorized')
    });
    it('Token is valid string ',  ()=> {  
      expect(response.body.token).to.be.a('string')
      expect(response.body.token.length > 0).to.eq(true)
    });
    it('ID is valid',  ()=> {  
      expect(response.body.user._id).to.be.a('string')
      expect(response.body.user._id).to.eq(Cypress.env().USER_ID)
    });
    it('Email is valid',  ()=> { 
       
      expect(response.body.user.email).to.eq(Cypress.env().EMAIL_PLAYER)
      //expect(response.data.user._id).to.eq(id)
    });
    it('Response is an object',  ()=> {   
      expect(response).to.be.an('object')
    });
    it('Moderator false',  ()=> {  
      console.log(response) 
      expect(response.body.user.moderator).to.eq(false)
    });
    it('Administratoris  false',  ()=> {  
      expect(response.body.user.admin).to.eq(false)
    });
    it('First name is a string',  ()=> {  
      expect(response.body.user.firstName).to.be.a('string')
    });
    it('Last name is a string',  ()=> {  
      expect(response.body.user.lastName).to.be.a('string')
    });
    it('Loses is a number',  ()=> {  
      expect(response.body.user.loses).to.be.a('number')
    });
    it('Rating is a number',  ()=> {  
      expect(response.body.user.rating).to.be.a('number')
    });
    it('Visits is a number',  ()=> {  
      expect(response.body.user.visits).to.be.a('number')
    });
    it('Wins is a number',  ()=> {  
      expect(response.body.user.wins).to.be.a('number')
    });
    it('NickName is a string',  ()=> {  
      expect(response.body.user.nickName).to.be.a('string')
    });
      
      
      
      
  });
  describe('Authorization Nagative', () => {
    
    it('ID is incorrect', async ()=> {  
      
        const response = await cy.request({

        url: `https://maf-place-qa-srv.azurewebsites.net/mafia-users/123?pass=${Cypress.env().PASS_PLAYER}`, 
            failOnStatusCode: false
        })
      
        expect(response.status).to.equal(404)
        expect(response.body.message).to.equal('no user with specified id')
        expect(response.body.token).to.not.exist
      
      
    });
    it('Password  is incorrect', async ()=> {  
      
        const response = await cy.request({

        url:`https://maf-place-qa-srv.azurewebsites.net/mafia-users/${Cypress.env().USER_ID}?pass=123`, 
            failOnStatusCode: false
        })
      
        
         expect(response.status).to.equal(401)
         expect(response.body.error).to.equal('unauthorized')
         expect(response.body.token).to.not.exist
      
      
    });
    });









