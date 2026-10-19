'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
    [80, 85, 90],
    [70, 72, 74],
    [88, 92, 95],
    [60, 65, 67],
    [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

// PART A: ORIGINAL RECORDS
console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
    console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}

// PART B: ADD NEW STUDENTS
console.log('\nPART B: ADD NEW STUDENTS');

// Add Faith at the end
studentNames.push('Faith');
studentScores.push(88);

// Add Aaron at the beginning
studentNames.unshift('Aaron');
studentScores.unshift(76);

// Display updated arrays
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

// PART C: REMOVE AND REPLACE RECORDS
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove the first student
studentNames.shift();
studentScores.shift();

// Remove the last student
studentNames.pop();
studentScores.pop();

// Find Daniel's index
const danielIndex = studentNames.indexOf('Daniel');

// Remove Daniel and his score
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

// Insert Grace with a score of 82 at index 2
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

// Display resulting arrays
console.log('Names:', studentNames);
console.log('Scores:', studentScores);

// PART D: CLASS STATISTICS
console.log('\nPART D: CLASS STATISTICS');

let total = 0;

// Calculate total
for (let i = 0; i < studentScores.length; i++) {
    total += studentScores[i];
}

// Calculate average
const average = total / studentScores.length;

// Find highest and lowest
let highest = studentScores[0];
let lowest = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
    if (studentScores[i] > highest) {
        highest = studentScores[i];
    }

    if (studentScores[i] < lowest) {
        lowest = studentScores[i];
    }
}

// Display statistics
console.log('Total Score:', total);
console.log('Average Score:', average.toFixed(2));
console.log('Highest Score:', highest);
console.log('Lowest Score:', lowest);

// PART E: PASSING-SCORE ANALYSIS
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

// Get passing scores
const passingScores = studentScores.filter(function(score) {
    return score >= passingScore;
});

// Create Passed or Failed statuses
const statuses = studentScores.map(function(score) {
    if (score >= passingScore) {
        return 'Passed';
    } else {
        return 'Failed';
    }
});

// Check if at least one student failed
const atLeastOneFailed = studentScores.some(function(score) {
    return score < passingScore;
});

// Check if all students passed
const allStudentsPassed = studentScores.every(function(score) {
    return score >= passingScore;
});

// Display results
console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

// PART F: SORT AND SEARCH
console.log('\nPART F: SORT AND SEARCH');

// Create a copy of the scores
const sortedScores = Array.from(studentScores);

// Sort from highest to lowest
sortedScores.sort(function(a, b) {
    return b - a;
});

// Search for 91
const contains91 = studentScores.includes(91);
const indexOf91 = studentScores.indexOf(91);

// Display results
console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);

// PART G: TWO-DIMENSIONAL ARRAY
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {

    let rowTotal = 0;

    // Nested loop to process each activity score
    for (let j = 0; j < activityScores[i].length; j++) {
        console.log(
            originalNames[i] +
            ' Activity ' +
            (j + 1) +
            ': ' +
            activityScores[i][j]
        );

        rowTotal += activityScores[i][j];
    }

    // Calculate average of the row
    const rowAverage = rowTotal / activityScores[i].length;

    // Store the average
    activityAverages.push(rowAverage);

    console.log(
        originalNames[i] +
        "'s activity average: " +
        rowAverage.toFixed(2)
    );
}

// Display activity averages
console.log('Activity Averages:', activityAverages);

// PART H: TEXT SUMMARY
console.log('\nPART H: TEXT SUMMARY');

console.log('Students:', studentNames.join(' | '));