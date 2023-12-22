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

  
}