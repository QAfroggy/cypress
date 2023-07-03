import axios from 'axios';


describe(' User', () => {
    let response 
    let id
     
     it('Create a user', async ()=> {
        response = await axios.post('https://maf-place-qa-srv.azurewebsites.net/mafia-users', {
        
            "firstName": "Bob",
            "lastName": "Lob",
            "email": "kkkkkjjjjjjjjjdfjdfjdjgdjuulalala@gmail.com",
            "pass": "123admin",
            "admin": false,
            "nickName": "kkkkkkkkkkkkKKatman1234",
            "moderator": false,
            "sex": "man",
            "lastTimePaid": 0
        
       })
      
        expect(response.data.user._id).to.exist
        id = response.data.user._id 
    });
    it('Get all users', async ()=> {
        response = await axios.get('https://maf-place-qa-srv.azurewebsites.net/mafia-users')
       
       let myUser = response.data.find(element => element._id === id)
       expect(myUser).to.exist
    //     id = response.data.user._id 
    });
    it('Update the user', async ()=> {
        response = await axios.patch(`https://maf-place-qa-srv.azurewebsites.net/mafia-users/${id}`, {
        
            "firstName": "Kob",
            "lastName": "Tob",
           
        
       })
             
      expect(response.status).to.eq(200)

    });
    it('Get user', async ()=> {
        response = await axios.get(`https://maf-place-qa-srv.azurewebsites.net/mafia-users/${id}`)
       
     expect(response.data.firstName).to.eq("Kob")
     expect(response.data.lastName).to.eq("Tob")

});
it('Delete the user', async ()=> {
    response = await axios.delete(`https://maf-place-qa-srv.azurewebsites.net/mafia-users/${id}`)
   
 expect(response.status).to.eq(200)


});
it('Check that user not exist', async ()=> {
    response = await axios.get('https://maf-place-qa-srv.azurewebsites.net/mafia-users')
   
   let myUser = response.data.find(element => element._id === id)
   expect(myUser).to.not.exist
//     id = response.data.user._id 
});
});