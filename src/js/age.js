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
}