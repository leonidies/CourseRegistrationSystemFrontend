document.addEventListener("DOMContentLoaded", () => {
    // Get the user role from session storage
    const data = sessionStorage.getItem('userRole');
     
    if (data === 'admin') {
        // Show admin-specific content
        const admin = document.getElementById('course');
        
            admin.classList.remove('hidden'); // Make the admin section visible
        
    } else {
        // Show student-specific content
        const student = document.getElementById('register');
        student.classList.remove('hidden');
    }
});

// logout function
function logout() {
    // Clear session storage or any stored authentication tokens
    sessionStorage.clear();

    // Replace current page with login page without adding it to history
    window.location.replace("login.html");
}

