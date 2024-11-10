async function updateCourse() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');  // Get courseId from URL parameter

    if (!courseId) {
        alert('No Course ID provided');
        return;
    }

    // Collect form data
    const courseData = {
        courseName: document.getElementById('name').value,
        description: document.getElementById('description').value,
        courseInstructor: document.getElementById('instructor').value,
        courseDuration: document.getElementById('duration').value,
        prerequisites: document.getElementById('prerequisites').value
    };

    try {
        const response = await fetch(`http://localhost:8080/courses/editCourseDetail/${courseId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(courseData)
        });

        if (response.ok) {
            alert('Course updated successfully!');
            window.location.href = 'viewAllCourses.html';  // Redirect after update, if needed
        } else {
            alert('Failed to update course');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error updating course');
    }
}
