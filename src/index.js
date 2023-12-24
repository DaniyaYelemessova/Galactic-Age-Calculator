import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/styles.css';
import AgeCalculator from "./js/age";

function reset(){
  document.getElementById("form").reset();
}


function handleForm(e){
  e.preventDefault();
  const inputAge = parseInt(document.getElementById("age").value);
  const passedAge = parseInt(document.getElementById("passedAge").value);
  const futureAge = parseInt(document.getElementById("futureAge").value);
  const newAge = new AgeCalculator(inputAge);
  const mercuryAge = document.getElementById("mercuryAge");
  mercuryAge.textContent = `AGE: ${newAge.mercuryAgeCalculation()}`;
  const mercuryYearsPassed = document.getElementById("mercuryPassed");
  mercuryYearsPassed.textContent = `Years have passed since the birthday: ${newAge.yearsPassedSinceBirthdayOnMercury(passedAge)}`;
  document.getElementById("mercuryFuture").textContent = `Years until your future birthday: ${newAge.yearsPassToFutureBirthdayOnMercury(futureAge)}`;
  document.getElementById("earthPassed").textContent = `Years have passed since the birthday: ${newAge. yearsPassedSinceBirthdayOnEarth(passedAge)}`;
  document.getElementById("earthFuture").textContent = `Years until your future birthday: ${newAge. yearsPassToFutureBirthdayOnEarth(futureAge)}`;
  document.getElementById("venusAge").textContent = `Age: ${newAge.venusAgeCalculation()}`;
  document.getElementById("venusPassed").textContent = `Years have passed since the birthday: ${newAge.yearsPassedSinceBirthdayOnVenus(passedAge)}`;
  document.getElementById("venusFuture").textContent = `Years until your future birthday: ${newAge.yearsPassToFutureBirthdayOnVenus(futureAge)}`;

  reset();
}


document.getElementById("form").addEventListener("submit", handleForm);


