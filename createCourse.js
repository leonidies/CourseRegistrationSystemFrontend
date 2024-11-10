document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('createCourseForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevents page reload on form submission

        // Collect data
        const courseData = {
            courseId: document.getElementById('id').value,
            courseName: document.getElementById('name').value,
            description: document.getElementById('description').value,
            courseInstructor: document.getElementById('instructor').value,
            courseDuration: document.getElementById('duration').value,
            prerequisites: document.getElementById('prerequisites').value
        };

        try {
            const response = await fetch('http://localhost:8080/courses/creatingCourse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData), // Convert data to JSON
            });

            if (response.ok) {
                alert('Course created successfully!');
                form.reset(); 
            } else {
                
                const errorData = await response.json();
                alert(`Failed to create course: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            
            console.error('Error:', error);
            alert('An error occurred while creating the course. Please try again.');
        }
    });
});
