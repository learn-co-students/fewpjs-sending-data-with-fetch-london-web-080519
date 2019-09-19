// // Add your code here
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };

// let configOb = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   },
//   body: JSON.stringify(formData)
// };
// fetch("http://localhost:3000/dogs", configOb)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object)
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!")
//     console.log(error.message)
//   })

function submitData(userName, userEmail) {
  const bodyTag = document.querySelector("body");
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      // console.log(object.id);
      bodyTag.innerHTML = object.id;
    })
    .catch(function(error) {
      bodyTag.innerHTML = error.message
    });
}
