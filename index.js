// Add your code here
function submitData(username, useremail){
    let bodyTag = document.querySelector("body");

    let formData = {
        name: username,
        email: useremail
      };
       
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          bodyTag.innerHTML = object.id;
        })
        .catch(function(error) {
          alert("Unauthorized Access");
          console.log(error.message);
          bodyTag.innerHTML = "Unauthorized Access"
        });
}