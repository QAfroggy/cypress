import axios from 'axios';

let gameId
let response

describe('Create game', () => {
 
    
     before(async() => {
       response = await axios.post(' https://maf-place-qa-srv.azurewebsites.net/mafia-games/')
       
     })
     
    
     it('status is 201', async ()=> {
      
      expect(response.status).to.equal(201)
     });
     it('Game has an ID', async ()=> {
     
      expect(response.data.game._id).to.a('string')
      gameId = response.data.game._id
      expect(response.data.game._id).to.equal(gameId)
     });
     it('Message Game saved to /mafia-games', async ()=> {
      expect(response.data.message).to.equal('Game saved to /mafia-games')
     });
});

describe('Check that game exists', () => {
 //let response
  before(async() => {
    
   response = await axios.get(`https://maf-place-qa-srv.azurewebsites.net/mafia-games/${gameId}`)
   
  });
  it('Status ---200', async ()=> {
    
    expect(response.status).to.equal(200)
    
    
   });
   it('Response is an object', async ()=> {
    expect(response).to.be.an('object')
   });

   it('Find the game by ID', async ()=> {
   
    expect(response.data._id).to.exist
  });
});

describe('Delete the game', () => {

  before(async() => {
    
     response  =  await axios.delete(`https://maf-place-qa-srv.azurewebsites.net/mafia-games/${gameId}`)
   
    
    });
    it('Delete the game', async ()=> {
      console.log(response)
         expect(response.data.result).to.equal(1)
  })
});
  describe('Game is not exist', () => {
    //let response
     before(async() => {
       
      response = await axios.get('https://maf-place-qa-srv.azurewebsites.net/mafia-games/')
      
     });
     it('Game is not exist', async ()=> {
      
      expect(response.data._id).to.not.exist
  })
  
});
