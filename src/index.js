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
  const newAge = new AgeCalculator(inputAge);
  document.getElementById("earthYearsPassed").textContent = `Years passed on Earth: ${newAge.yearsPassedSinceBirthdayOnEarth(passedAge)}`;
  const mercuryAge = document.getElementById("mercuryAge");
  const mercuryYearsPassed = document.getElementById("mercuryYearsPassed");
  mercuryAge.textContent = `Mercury age: ${newAge.mercuryAgeCalculation()}`;
  mercuryYearsPassed.textContent = `Years passed on Mercury: ${newAge.yearsPassedSinceBirthdayOnMercury(passedAge)} years have passed.`;
  reset();
}

document.getElementById("form").addEventListener("submit", handleForm);
