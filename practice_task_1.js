// School, High School Or Collage Grading System Calculator
let bangla = 50;
let english = 56;
let physics = 44;
let chemistry = 85;
let biology = 81;
let higherMatheMatics = 74;
let religiousStudies = 45;
let geography = 54;

let totalSubject = 8;

let totalMarks =
  bangla +
  english +
  physics +
  chemistry +
  biology +
  higherMatheMatics +
  religiousStudies +
  geography;

let averageMarks = totalMarks / totalSubject;

if (averageMarks >= 80) {
  console.log("A+");
} else if (averageMarks >= 70) {
  console.log("A");
} else if (averageMarks >= 60) {
  console.log("A-");
} else if (averageMarks >= 50) {
  console.log("B");
} else if (averageMarks >= 40) {
  console.log("C");
} else if (averageMarks >= 33) {
  console.log("D");
} else {
  console.log("F");
}
