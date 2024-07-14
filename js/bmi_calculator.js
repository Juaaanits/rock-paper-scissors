const prompt = require('prompt-sync')();

function askUserHeight() {
   const height = prompt("Enter height in meter(m): ");
   return height;
   
}

function askUserWeight() {
    const weight = prompt("Enter weight in kg: ");
    return weight;
}

function computeBMI(height, weight) {
    const bmi = height / weight**2;
    return bmi;
}

function determineTheBMI(bmi) {
    

    if (bmi <= 18.5) {
        console.log("You are underweight");
    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("You are in a normal weight");
    }

    else if (bmi >= 25 && bmi  <= 29.9){
        console.log("You are overweight");
    }

    else {
        console.log ("You are obese");
    }
}

function runTheProgram() {
    const userHeight = askUserHeight();
    const userWeight = askUserWeight();
    const userBMI = computeBMI(userHeight, userWeight);
    determineTheBMI(userBMI);

    console.log(userHeight);
    console.log(userWeight);
    console.log(userBMI);

}

runTheProgram();



