function calculateGrade() {
    // Prompt user for input
    let marks = prompt("Enter the student's marks (between 0 and 100):");
    
    // Convert input to a number
    marks = parseFloat(marks);
    
    // Validate if marks is a number and within range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return;
    }
    
    // Determine grade based on marks
    let grade;
    if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Output the grade
    alert(`For ${marks} marks, the grade is ${grade}`);
}

// Call the function to calculate and display grade
calculateGrade();
