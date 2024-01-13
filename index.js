// Add your code her

     "Steve",
    "steve@steve.com"


function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers: {
        contentType: "application/json",
        accept: 'application/json' 
    },
    body: JSON.stringify(name, email)   
    }
    
    )
    .then (resp=>resp.json())
    .then (data=>{
        document.body.innerHTML += data.id})
    .catch(error => {
        document.body.innerHTML += error.message;
  });      
}
submitData("Steve","steve@steve.com")
submitData("Sam", "sam@sam.com")
// let name = "Sam";
// let email = "sam@sam.com"; 
// submitData(data);
//   const newElement = document.createElement('div');
//   newElement.id = rando.toString();
//   document.body.appendChild(newElement);
  
// // const data1= {
//     name1: "Sam",
//     email1: "sam@sam.com", 
// } 
// function submitData1 (data1) {
//     return fetch("http://localhost:3000/users", {
//         method:"POST",
//         headers: {
//         contentType: "application/json",
//         accept: 'application/json' 
//     },
//     body: JSON.stringify(data1)   
//     }
    
//     )
//     .then (resp=>resp.json())
//     .then (data=>{
//         document.body.innerHTML += data.id})
//     .catch(error => {
//         document.body.innerHTML += error.message;
//   });      
// }
// submitData1(),