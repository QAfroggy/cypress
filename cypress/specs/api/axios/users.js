import axios from 'axios';


describe('All users  positive', () => {
    let response 
    
     before(async() => {
       response = await axios.get('https://maf-place-qa-srv.azurewebsites.net/mafia-users/')
       console.log(response)
     })
     it('status is 200', async ()=> {
       
        expect(response.status).to.equal(200)
    });
    it('Response is an object', async ()=> {
        
        expect(response).to.be.an('object')
    });
    it('Data is an array', async ()=> {
        
        expect(response.data).to.be.an('Array')
        let userNumber = response.data.length
        expect(response.data.length).to.eq(userNumber)
    });
    it('Every element is an object', async ()=> {
        
        expect(response.data[0]).to.be.an('object')
        expect(response.data[0]._id).to.be.a('string')
        expect(response.data[0]._id).to.exist
    });
    it('Every user has an id', async ()=> {
        expect(response.data[0]._id).to.exist
    });
    it('Every user has an email', async ()=> {
        expect(response.data[0].email).to.exist
    });
    it('Every user has a nickName', async ()=> {
        expect(response.data[0].nickName).to.exist
    });

    it('Admin is true', async ()=> {
        
        expect(response.data[0].admin).to.eq(false)
        
    });
    it('Password is a string', async ()=> {
        
        expect(response.data[0].pass).to.be.a('string')
        
    });
    it('Rating is a number', async ()=> {
        let ratNumber = response.data[0].rating
        
        expect(response.data[0].rating).to.eq(ratNumber)
        console.log(response)
        
    });
    

    });
    describe('All uesrs Nagative', () => {
    
        it('Link is incorrect', async ()=> {  
          try {
            await axios.get('https://maf-place-qa-srv.azurewebsites.net/mafia-users1')
          }catch(error){
            expect(error.response.status).to.equal(404)
           
          }
          
        });
      

    });