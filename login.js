const username = document.getElementById('username');
const password = document.getElementById('password');
const res = document.getElementById('response');
const loginButton = document.getElementById('loginButton');
let url = 'http://localhost:8080/user/loginUser';

// Clears the response message after a delay
function resclear() {
    res.innerHTML = '';
}

// Sets  error messages
function setError(id, error) {
    let element = document.getElementById(id + "Error");
    if (element) {
        element.innerHTML = error;
    }
}

// Clears all validation error messages
function clearErrors() {
    setError("username", "");
    setError("password", "");
    
}

// Validates form fields
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
    
    return returnval;
}

// Integration with backend starts from here
async function loginUser(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    if (!validateForm()) return;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            })
        });

        if (response.ok) {
            const data=await response.json();
            console.log(data);
            sessionStorage.setItem('userRole',data.role)
            sessionStorage.setItem('sessionId', data.sessionId)
            sessionStorage.setItem('userId',data.id)

            res.innerHTML = 'LOGIN SUCCESSFUL... Welcome to the Course Registration!';
            res.style.color='white'
            setTimeout(resclear, 2000);
            window.location.href = 'Homepage.html';
        } else {
            const errorData = await response.json();
            res.innerHTML = `Login failed: ${errorData.message || 'Invalid Password or Username'}`;
            res.style.color = 'red';
        }
    } catch (error) {
        res.innerHTML = 'Error connecting to server';
        res.style.color = 'red';
    }
}


loginButton.addEventListener('click', loginUser);
