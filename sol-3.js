//solution 3 To calculate an individual's net salary based on their basic salary'
//Gross Salary:(Gross Salary = Basic Salary+Benefits)
//PAYE (Tax):We will  need to use the appropriate rates based on the gross salary to calculate the PAYE.
//Net Salary=(Gross Salary−PAYE−NHIF Deductions−NSSF Deductions-payee)
/*Ill be using PAYE rates in effect from 1 January 2021 up to 30 June 2023*/

//Monthly Taxable Pay (Ksh)	Annual Taxable Pay (Ksh)	Rate of Tax (%)
//Up to 24,000	Up to 288,000	10.0
//24,001 - 32,333	288,001 - 388,000	25.0
//32,334 - 500,000	388,001 - 6,000,000	30.0
//500,001 - 800,000	6,000,001 - 9,600,000	32.5
//Above 800,000	Above 9,600,000	35.0

const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits:"));
function salary(basicSalary){
    if (isNaN(basicSalary > 10000000|| basicSalary < 0)) {
        console.log("Error. Please enter a value between 0 to 10000000");
        return;
    }
}
function bn(benefits){
    if (benefits > 10000000|| benefits <0){
        console.log("Error. Please enter a value between 0 to 10000000")
    }
}
const grossPay = basicSalary + benefits;

function calculatePAYE(grossPay) {
    if (grossPay <= 24000) {
        return grossPay * 0.10; 
    } else if (grossPay <= 32333) {
        return 2400 + (grossPay - 24000) * 0.25; 
    } else {
        return 4708.25 + (grossPay - 32333) * 0.30; 
    }
}

const paye = calculatePAYE(grossPay);
console.log("PAYE: Ksh", paye.toFixed(2)); 

function calculateNHIFDeduction(grossPay) {
    if (grossPay <= 5999) {
        return 150;
    } else if (grossPay <= 7999) {
        return 300;
    } else if (grossPay <= 11999) {
        return 400;
    } else if (grossPay <= 14999) {
        return 500;
    } else if (grossPay <= 19999) {
        return 600;
    } else if (grossPay <= 24999) {
        return 750;
    } else if (grossPay <= 29999) {
        return 850;
    } else if (grossPay <= 34999) {
        return 900;
    } else if (grossPay <= 39999) {
        return 950;
    } else if (grossPay <= 44999) {
        return 1000;
    } else if (grossPay <= 49999) {
        return 1100;
    } else if (grossPay <= 59999) {
        return 1200;
    } else if (grossPay <= 69999) {
        return 1300;
    } else if (grossPay <= 79999) {
        return 1400;
    } else if (grossPay <= 89999) {
        return 1500;
    } else if (grossPay <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

const nhifDeduction = calculateNHIFDeduction(grossPay);
console.log("NHIF Deduction: Ksh", nhifDeduction); 

function calculateNSSFDeduction(grossPay){
    return grossPay*0.06;
}
const nssfDeduction = calculateNSSFDeduction(grossPay);

console.log("NSSF Deduction: Ksh", nssfDeduction.toFixed(2));
const netSalary = grossPay - paye - nhifDeduction - nssfDeduction;

console.log("Net Salary: Ksh", netSalary.toFixed(2));