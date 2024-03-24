
// Calculating the grade of a student based on thier grade//
function studentGrade() {
    const mark = parseFloat(prompt("Enter student mark: "));
    
    if (isNaN(mark) || mark < 0 || mark > 100) {  //check if its a number 
        console.log("Error. Please enter a value between 0 to 100");
        return; // Exit function
    }
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) { 
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

console.log(studentGrade()); 


//console.log(()); 

//const mark = parseFloat(prompt("mark;"));

//const mark = parseFloat(prompt("Enter student mark: "));