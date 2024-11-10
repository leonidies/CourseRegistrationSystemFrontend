/*const logoutbutton=document.getElementById(logoutbutton);
const logout=sessionStorage.getItem('userId');
function logout() {
    fetch('http://localhost:8080/user/logoutUser', {
        method: 'POST',
        credentials: 'include'  // Include cookies in the request
    })
    .then(response => {
        if (response.ok) {
            // Clear any client-side session storage, if needed
            sessionStorage.clear();
            localStorage.clear();

            // Redirect to the login page or show a logged-out message
            alert('Loggedout Succesfully');
            window.location.href = 'login.html';
        } else {
            console.error("Logout failed.");
        }
    })
    .catch(error => console.error("Error:", error));
}
logoutbutton.addEventListner('click',logout);*/