export default class AgeCalculator{
  constructor(age){
    this.age = age;
  }

  mercuryAgeCalculation(){
    return Math.floor(this.age / 0.24);
  }

  venusAgeCalculation(){
    return Math.floor(this.age / 0.62);
  }

  marsAgeCalculation(){
    return Math.floor(this.age / 1.88);
  }

  jupiterAgeCalculation(){
    return Math.floor(this.age / 11.86);
  }

  yearsPassedSinceBirthdayOnEarth(pastBirthdayAge){
    return this.age - pastBirthdayAge;
  }

  yearsPassedSinceBirthdayOnMercury(pastBirthdayAge){
    const currentAge = this.mercuryAgeCalculation();
    return currentAge - Math.trunc(pastBirthdayAge / 0.24);
  }

  yearsPassedSinceBirthdayOnVenus(pastBirthdayAge){
    const currentAge = this.venusAgeCalculation();
    return currentAge - Math.trunc(pastBirthdayAge / 0.62);
  }

  yearsPassToFutureBirthdayOnMercury(futureBirthdayAge){
    const currentAge = this.mercuryAgeCalculation();
    return Math.trunc(futureBirthdayAge / 0.24) - currentAge;
  }

  yearsPassedSinceBirthdayOnMars(futureBirthdayAge){
    const currentAge = this.marsAgeCalculation();
    return currentAge - Math.trunc(futureBirthdayAge / 1.88) ;
  }

  yearsPassedSinceBirthdayOnJupiter(futureBirthdayAge){
    
  }
}