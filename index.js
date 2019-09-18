// Add your code here


function submitData(name, email) {
    console.log("submitted")
    let formData = {
        name: name,
        email: email
    };    
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify(formData)
    }).then(function(response) {
        //retrieves new id value
        //appends it to the dom
        return response.json();
    }).then(data => {
        // const h1 = document.createElement("h1")
        // h1.innerHTML = data.id;
        // document.body.appendChild(h1)
        document.body.innerHTML = data.id
    })
    // .then(function(object){
    //     document.body.innerHTML =`${object.id}`
    // })
    .catch(function(error) {
        //appends error message to the dom
        document.body.innerHTML = error.message
    })
}