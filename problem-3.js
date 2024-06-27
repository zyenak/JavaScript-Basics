const students = [
    { name: "Alice", grades: [85, 92, 78] },
    { name: "Bob", grades: [89, 76, 95] },
    { name: "Charlie", grades: [100, 100, 100] },
    { name: "David", grades: [65, 70, 75] }
];

// Calculate the Average Grade for Each Student
// Create a function that uses map to iterate over the array of students and return a new array of objects with each student's name and their average grade.
getAverageGrades = () => {
    const studentAverages = students.map(student => {
        const sum = student.grades.reduce((acc, grade) => acc + grade);
        return { name: student.name, avgGrade: sum / student.grades.length };
    });
    return studentAverages;      
}

const studentsAvg = getAverageGrades();
console.log("Student list with averages: ", studentsAvg);


// Find Students with Grades Above a Certain Threshold
// Create a function that takes a grade threshold as a parameter and uses filter to return an array of students who have any grades above that threshold.
getStudentsByGradeThreshold = (threshold) => {
    const studentsInThreshold = students.filter((student => student.grades.some(grade => grade > threshold)))
    return studentsInThreshold.map(student => ({ name: student.name }));
}
const studentsInThreshold = getStudentsByGradeThreshold(90);
console.log("Students with Grades Above a Certain Threshold (90): ", studentsInThreshold);


// Find the Highest Grade in the Class
// Create a function that uses reduce to find and return the highest grade from the entire class.
getHighestGrade = () => {
    return students.reduce((highestGrade, student) => {
        const highestGradeOfStudent = Math.max(...student.grades);
        return Math.max(highestGrade, highestGradeOfStudent)
    }, -Infinity);
}
console.log("Highest Grade in the Class: ", getHighestGrade());

// Check If Any Student Has a Perfect Score
// Create a function that uses some to check if any student has a grade of 100 and return a boolean value.
findPerfectScore = () => {
    const perfectScoreStudents = students.filter((student => student.grades.some(grade => grade === 100)))
    if (perfectScoreStudents) {
        return true;
    }
    return false;
}

console.log("Are there students with Perfect Score? ", findPerfectScore());

// Find a Student by Name
// Create a function that takes a student's name as a parameter and uses find to return the details of that student
findStudentByName = (name) => {
    const studentWithNames = students.find(student => {
        return student.name === name
    });

    if(studentWithNames) {
        return studentWithNames;
    } 
    return "No students found.";
    
    
}

console.log("Find Student named Bob: ", findStudentByName("Bob"));


// Print All Students' Names and Their Average Grades
// Create a function that uses forEach to iterate over the array of students and print each student's name and their average grade.
getStudentsAndAverages = () => {
    studentsAvg.forEach((student) => {
        console.log("Name: " + student.name + ", Average Grade: " + student.avgGrade); 
    });
}

getStudentsAndAverages();