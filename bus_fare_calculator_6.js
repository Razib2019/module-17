/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 10;
const isStudent = true;
const seniorCitizenAge = 60;
let regularPrice = 800;

if (age < 10 || isStudent || seniorCitizenAge >= 60) {
  if (age < 10) {
    console.log("Children is: Free");
  } else if (isStudent) {
    const discountPrice = regularPrice * (50 / 100);
    const studentPay = regularPrice - discountPrice;
    console.log("Student Pay:", studentPay);
  } else if (seniorCitizenAge >= 60) {
    const discountPrice = regularPrice * (15 / 100);
    const seniorCitizenPay = regularPrice - discountPrice;
    console.log("Senior Citizen Pay:", seniorCitizenPay);
  }
} else {
  console.log("Regular ticket fare: 800tk");
}
