//solution-2:speed detector (Toy problem)//
function speedDetector() {
    const speedLimit = 70;
    const demerits = 5;
    let demeritPoints = 0; // demerit points are initially zero (0)

    const speed = parseFloat(prompt("Enter the speed of the vehicle:"));
    if (isNaN(speed)) { // check if input is a valid number
        console.log("Invalid input. Please enter a valid number.");
        return; 
    }   
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const overSpeed = speed - speedLimit;
        demeritPoints = overSpeed / demerits;
        console.log("Points: " + demeritPoints);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
speedDetector();
