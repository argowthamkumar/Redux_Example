class UsersApi {

  static getAllCats() {

 return fetch('http://localhost:8091/rest/users/Ajay', {
   mode: 'no-cors',
   method: 'GET',
   headers: {
     Accept: 'application/json',
   },
 },
 ).then(response => response.json())
    .then(json => {
      console.log('parsed json', json) // access json.body here
    })

}
}
export default UsersApi;