const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
 const response = await fetch(API_URL)
 const data = await response.json()
 //console.log(response)
 //console.log(data)
 //data.forEach((obj) => {
 	//console.log(obj)
  // ou const userEmails = data.map(({email}) => {})
  // return {
    // email
  //}
  const userEmails = data.map((obj) => {
  	return {
    	email: obj.email
    }
  })
  console.log(userEmails)
 
}

getUsers()