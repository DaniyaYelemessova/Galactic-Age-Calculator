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

  yearsPassedSinceBirthdayOnMars(futureBirthdayAge){
    const currentAge = this.marsAgeCalculation();
    return currentAge - Math.trunc(futureBirthdayAge / 1.88) ;
  }

  yearsPassedSinceBirthdayOnJupiter(futureBirthdayAge){
    const currentAge = this.jupiterAgeCalculation();
    return currentAge - Math.trunc(futureBirthdayAge / 11.86);
  }

  yearsPassToFutureBirthdayOnEarth(futureBirthdayAge){
    return futureBirthdayAge - this.age;
  }

  yearsPassToFutureBirthdayOnMercury(futureBirthdayAge){
    const currentAge = this.mercuryAgeCalculation();
    return Math.trunc(futureBirthdayAge / 0.24) - currentAge;
  }

  yearsPassToFutureBirthdayOnVenus(futureBirthdayAge){
    const currentAge = this.venusAgeCalculation();
    return Math.trunc(futureBirthdayAge / 0.62) - currentAge;
  }

  yearsPassToFutureBirthdayOnMars(futureBirthdayAge){
    const currentAge = this.marsAgeCalculation();
    return Math.trunc(futureBirthdayAge / 1.88) - currentAge;
  }

  yearsPassToFutureBirthdayOnJupiter(futureBirthdayAge){
    
  }
}