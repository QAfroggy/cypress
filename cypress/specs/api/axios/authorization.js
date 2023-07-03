import axios from 'axios';


describe('Authorization positive', () => {
let response 
 before(async() => {
   response = await axios.get(`https://maf-place-qa-srv.azurewebsites.net/mafia-users/${Cypress.env().USER_ID}?pass=${Cypress.env().PASS_PLAYER}`)
 })


    it('status is 200', async ()=> {
      console.log(response)
expect(response.status).to.equal(200)

    });
    it('Message is "autorized" ', async ()=> {
      expect(response.data.message).to.equal('authorized')
    });
    it('Token is valid string ', async ()=> {  
      expect(response.data.token).to.be.a('string')
      expect(response.data.token.length > 0).to.eq(true)
    });
    it('ID is valid', async ()=> {  
      expect(response.data.user._id).to.be.a('string')
      expect(response.data.user._id).to.eq(Cypress.env().USER_ID)
    });
    it('Email is valid', async ()=> { 
       
      expect(response.data.user.email).to.eq(Cypress.env().EMAIL_PLAYER)
      //expect(response.data.user._id).to.eq(id)
    });
    it('Response is an object', async ()=> {   
      expect(response).to.be.an('object')
    });
    it('Moderator false', async ()=> {  
      console.log(response) 
      expect(response.data.user.moderator).to.eq(false)
    });
    it('Administratoris  false', async ()=> {  
      expect(response.data.user.admin).to.eq(false)
    });
    it('First name is a string', async ()=> {  
      expect(response.data.user.firstName).to.be.a('string')
    });
    it('Last name is a string', async ()=> {  
      expect(response.data.user.lastName).to.be.a('string')
    });
    it('Loses is a number', async ()=> {  
      expect(response.data.user.loses).to.be.a('number')
    });
    it('Rating is a number', async ()=> {  
      expect(response.data.user.rating).to.be.a('number')
    });
    it('Visits is a number', async ()=> {  
      expect(response.data.user.visits).to.be.a('number')
    });
    it('Wins is a number', async ()=> {  
      expect(response.data.user.wins).to.be.a('number')
    });
    it('NickName is a string', async ()=> {  
      expect(response.data.user.nickName).to.be.a('string')
    });
      
      
      
      
  });
  describe('Authorization Nagative', () => {
    
    it('ID is incorrect', async ()=> {  
      try {
        await axios.get(`https://maf-place-qa-srv.azurewebsites.net/mafia-users/123?pass=${Cypress.env().PASS_PLAYER}`)
      }catch(error){
        expect(error.response.status).to.equal(404)
        expect(error.response.data.message).to.equal('no user with specified id')
        expect(error.response.data.token).to.not.exist
      }
      
    });
    it('Password  is incorrect', async ()=> {  
      try {
        await axios.get(`https://maf-place-qa-srv.azurewebsites.net/mafia-users/${Cypress.env().USER_ID}?pass=123`)
      }catch(error){
        
         expect(error.response.status).to.equal(401)
         expect(error.response.data.error).to.equal('unauthorized')
         expect(error.response.data.token).to.not.exist
      }
      
    });
    });








