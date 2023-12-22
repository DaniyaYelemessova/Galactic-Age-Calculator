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
    
  }

  yearsPassedSinceBirthdayOnMercury(pastBirthdayAge){
    const currentAge = this.mercuryAgeCalculation();
    return currentAge - Math.trunc(pastBirthdayAge / 0.24);
  }

  yearsPassToFutureBirthdayOnMercury(futureBirthdayAge){
    const currentAge = this.mercuryAgeCalculation();
    return Math.trunc(futureBirthdayAge / 0.24) - currentAge;
  }
}