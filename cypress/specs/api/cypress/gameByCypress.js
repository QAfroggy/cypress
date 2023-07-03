

let gameId
let response

describe('Create game', () => {
 
    
     before(async() => {
       response = await cy.request('POST','https://maf-place-qa-srv.azurewebsites.net/mafia-games/')
       
     })
     
    
     it('status is 201', async ()=> {
      
      expect(response.status).to.equal(201)
      console.log(response)
     });
     it('Game has an ID', async ()=> {
     
      expect(response.body.game._id).to.a('string')
      gameId = response.body.game._id
      expect(response.body.game._id).to.equal(gameId)
     });
     it('Message Game saved to /mafia-games', async ()=> {
      expect(response.body.message).to.equal('Game saved to /mafia-games')
     });
});

describe('Check that game exists', () => {
 //let response
  before(async() => {
    
   response = await cy.request('GET','https://maf-place-qa-srv.azurewebsites.net/mafia-games')
  
  });
  it('Game is exist', async ()=> {
    let myGame = response.body.find(element => element._id === gameId)
    expect(myGame).to.exist
   });
   it('Status ---200', async ()=> {
    expect(response.status).to.equal(200)
   });

   it('Response is an object', async ()=> {
    expect(response).to.be.an('object')
   });

  
});

describe('Delete the game', () => {

  before(async() => {
    
     response  =  await cy.request('DELETE',`https://maf-place-qa-srv.azurewebsites.net/mafia-games/${gameId}`)
   
    console.log(response)
    });
    it('Delete the game', async ()=> {
     
      expect(response.status).to.eq(200)
      expect(response.body.result).to.eq(1)
  })
  describe('Game is not exist', () => {
    //let response
     before(async() => {
       
      response = await cy.request('GET','https://maf-place-qa-srv.azurewebsites.net/mafia-games/')
      
     });
     it('Game is not exist', async ()=> {
      let thisGame = response.body.find(element => element._id === gameId)
      expect(thisGame).to.not.exist
  })
  
});
});