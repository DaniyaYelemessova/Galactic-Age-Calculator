import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/styles.css';
import AgeCalculator from "./js/age";


function handleForm(e){
  e.preventDefault();
  const inputAge = parseInt(document.getElementById("age").value);
  const passedAge = parseInt(document.getElementById("passedAge").value);
  const mercuryAge = document.getElementById("mercuryAge");
  const mercuryYearsPassed = document.getElementById("mercuryYearsPassed");
  const newAge = new AgeCalculator(inputAge);
  mercuryAge.textContent = `Mercury age: ${newAge.mercuryAgeCalculation()}`;
  mercuryYearsPassed.textContent = `Years passed: ${newAge.yearsPassedSinceBirthdayOnMercury(passedAge)} years have passed`;
}

document.getElementById("form").addEventListener("submit", handleForm);
