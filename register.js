const registerButton = document.getElementById('register');

registerButton.addEventListener('click', printValues)

//window.addEventListener(event, printValues);

window.addEventListener('load', getUsers);

function getUsers() {
    const headers = new Headers({'Content-Type': 'application/json'})
    return fetch('http://localhost:3000/users', {
    method: 'GET',
    headers : headers
    }).then(response => {
       return response.json();
    }).then(res => console.log(res));
}

async function getAsyncUsers() {
    const headers = new Headers ({'Content-Type': 'application/json'})
    const APIcall = await fetch('http://localhost:3000/users',{
        method: 'GET',
        headers : headers});
        const parseJSON = await APIcall.json();
        const data = await parseJSON;
        console.log(data);
}

function printValues (event) {
    event.preventDefault(); //para que no carge otra pagina.
    //console.log(event.target.value);

    const data = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    console.log(data);

}