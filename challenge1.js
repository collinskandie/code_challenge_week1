const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateStudentGrade() {
  rl.question("Enter student marks (between 0 and 100): ", function(input) {
    // Convert input to a number
    let marks = parseFloat(input);

    // Check the mark and assign grade
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    // Display the grade
    console.log(`Student grade for marks ${marks}: ${grade}`);

    // Close the readline interface
    rl.close();
  });
}

// Call the function to start
generateStudentGrade();
