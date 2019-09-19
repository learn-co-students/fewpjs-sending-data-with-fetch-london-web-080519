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
            p.innerHTML = '😭'
            return body.appendChild(p)
        })
    }