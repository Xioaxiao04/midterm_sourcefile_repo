// Student Class
class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    // Calculate the student's average score
    getAverage() {
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }

        return total / this.scores.length;
    }

    // Determine the letter grade
    getLetterGrade() {
        const average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}


// Test Data
const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];


// Analyze the class
function analyzeClass(students) {

    let classTotal = 0;
    let topStudent = "";
    let highestAverage = 0;

    console.log("------ STUDENT REPORT ------");

    for (let i = 0; i < students.length; i++) {

        const average = students[i].getAverage();
        const grade = students[i].getLetterGrade();

        // Display student information
        console.log(
            `${students[i].name} - Average: ${average.toFixed(1)} | Grade: ${grade}`
        );

        // Add average to class total
        classTotal += average;

        // Find the top-performing student
        if (average > highestAverage) {
            highestAverage = average;
            topStudent = students[i].name;
        }
    }

    // Calculate class average
    const classAverage = classTotal / students.length;

    // Final summary
    console.log("--------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(
        `Top Student: ${topStudent} with ${highestAverage.toFixed(1)}`
    );
}


// Convert the test data into Student objects
const students = [];

for (let i = 0; i < studentData.length; i++) {
    const student = new Student(
        studentData[i].name,
        studentData[i].scores
    );

    students.push(student);
}


// Run the program
analyzeClass(students);