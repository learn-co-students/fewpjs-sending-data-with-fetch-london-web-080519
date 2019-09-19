// // Add your code here
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
