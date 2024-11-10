const username = document.getElementById('username');
const password = document.getElementById('password');
const role = document.getElementById('role');
const res = document.getElementById('response');
const submitButton = document.getElementById('button');
let url = 'http://localhost:8080/user/createUser';

function resclear() {
    res.innerHTML = '';
}

function setError(id, error) {
    let element = document.getElementById(id + "Error");
    if (element) {
        element.innerHTML = error;
    }
}

function clearErrors() {
    setError("username", "");
    setError("password", "");
    setError("role", "");
}

function validateForm() {
    let returnval = true;
    clearErrors();

    if (username.value.length < 5) {
        setError("username", "*Length of username is too short");
        returnval = false;
    }
    if (password.value.length < 6) {
        setError("password", "*Password must be at least 6 characters long");
        returnval = false;
    }
    if (role.value.toLowerCase() !== "student" && role.value.toLowerCase() !== "admin") {
        setError("role", "*Role must be either 'student' or 'admin'");
        returnval = false;
    }
    return returnval;
}

//Integration from backend starts from here
async function signUp(event) {
    event.preventDefault();
    if (!validateForm()) return;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            role: role.value
        })
    });

    if (response.ok) {
        res.innerHTML = 'CONGRATULATIONS...Signup Successfully';
        res.style.color='white'
        setTimeout(resclear, 2000);
    } else {
        alert('Oops! Unsuccessful signup');
    }
}

submitButton.addEventListener('click', signUp);
