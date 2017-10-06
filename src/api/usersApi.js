class UsersApi {

  static getAllCats() {

 return fetch('/rest/users/Ajay', {
   //mode: 'no-cors',
   method: 'GET',
   headers: {
     Accept: 'application/json',
   },
 },
 ).then(response => response.json())
    .then(json => {
      return json;
    })

}
}
export default UsersApi;