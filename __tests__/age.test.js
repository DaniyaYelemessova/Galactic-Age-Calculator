import AgeCalculator from "../src/js/age.js";

describe('AgeCalculator', () => {
  test('should correctly create an age calculator object', () => {
    const ageCalculation = new AgeCalculator(27);
    expect(ageCalculation.age).toEqual(27);
  });

  test('should correctly calculate the age on the Mercury', () => {
    const ageCalculation = new AgeCalculator(27);
    expect(ageCalculation.mercuryAgeCalculation()).toEqual(112);
  });

  test('should correctly calculate Venus age', () => {
    const ageCalculation = new AgeCalculator(56);
    expect(ageCalculation.venusAgeCalculation()).toEqual(90);
  });

  test('should correctly calculate Mars age', () => {
    const ageCalculation = new AgeCalculator(65);
    expect(ageCalculation.marsAgeCalculation()).toEqual(34);
  });

  test('should correctly calculate Jupiter age', () => {
    const ageCalculation = new AgeCalculator(29);
    expect(ageCalculation.jupiterAgeCalculation()).toEqual(2);
  });

  test('yearsPassedSinceBirthdayOnMercury calculates correctly', () => {
    const ageCalculator = new AgeCalculator(30); 
    const pastBirthdayAge = 25;
    const result = ageCalculator.yearsPassedSinceBirthdayOnMercury(pastBirthdayAge);
    expect(result).toEqual(21);
  });
});