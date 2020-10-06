let massMark = 78;
let massJohn = 96;
let heightMark = 1.76;
let heightJohn = 1.86;
// Calculate BMI of John and Mark
// BMI = mass / height2 = mass / (height * height). (mass in kg and height in meter).
let BMIJohn = massJohn / (heightJohn * heightJohn);
let BMIMark = massMark / (heightMark * heightMark);

console.log("Marks BMI is " + BMIMark);
console.log("Johns BMI is " + BMIJohn);
//givin methods to BMI
BMIJohn = BMIJohn.toFixed(3);
BMIMark = BMIMark.toFixed(3);

const higherBMI = BMIJohn > BMIMark; //this give "true"

console.log(
  `Is Mark's BMI is higher than John's? Answer is “${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`
);
