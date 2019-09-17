// Add your code here
configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Rover",
        dogBreed: "Westy",
    }),
}
fetch("http://localhost:3000/dogs", configurationObject)
    .then(response => response.json())
    .then(object => console.log(object))
    .catch(error => {
        alert("Bad things")
        console.log(error.message)
    })

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        })
    })
        .then(resp => resp.json())
        .then(obj => {
            return document.querySelector('body').innerHTML = obj.id
        })
        .catch(error => {
            const body = document.querySelector('body')
            const p = document.createElement('p')
            p.innerHTML = 'Unauthorized Access'
            return body.appendChild(p)
        })
}