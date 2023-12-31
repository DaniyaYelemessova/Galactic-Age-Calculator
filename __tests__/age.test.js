import AgeCalculator from "../src/js/age.js";

describe('AgeCalculator', () => {
  test('should correctly create an age calculator object', () => {
    const ageCalculation = new AgeCalculator(27);
    expect(ageCalculation.age).toEqual(27);
  });

  test('should correctly calculate the age on Earth', () => {
    const ageCalculation = new AgeCalculator(27);
    expect(ageCalculation.earthAgeCalculation()).toEqual(27);
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

  test('yearsPassToFutureBirthdayOnMercury calculates correctly', () => {
    const ageCalculator = new AgeCalculator(30); 
    const futureBirthdayAge = 35;
    const result = ageCalculator.yearsPassToFutureBirthdayOnMercury(futureBirthdayAge);
    expect(result).toEqual(20);
  });

  test('yearsPassedSinceBirthdayOnEarth calculates correctly', () => {
    const ageCalculator = new AgeCalculator(70); 
    const pastBirthdayAge = 25;
    const result = ageCalculator.yearsPassedSinceBirthdayOnEarth(pastBirthdayAge);
    expect(result).toEqual(45);
  });

  test('yearsPassedSinceBirthdayOnVenus calculates correctly', () => {
    const ageCalculator = new AgeCalculator(43); 
    const pastBirthdayAge = 40;
    const result = ageCalculator.yearsPassedSinceBirthdayOnVenus(pastBirthdayAge);
    expect(result).toEqual(5);
  });

  test('yearsPassedSinceBirthdayOnMars calculates correctly', () => {
    const ageCalculator = new AgeCalculator(66); 
    const pastBirthdayAge = 40;
    const result = ageCalculator.yearsPassedSinceBirthdayOnMars(pastBirthdayAge);
    expect(result).toEqual(14);
  });

  test('yearsPassedSinceBirthdayOnJupiter calculates correctly', () => {
    const ageCalculator = new AgeCalculator(66); 
    const pastBirthdayAge = 40;
    const result = ageCalculator.yearsPassedSinceBirthdayOnJupiter(pastBirthdayAge);
    expect(result).toEqual(2);
  });

  test('yearsPassToFutureBirthdayOnEarth calculates correctly', () => {
    const ageCalculator = new AgeCalculator(30); 
    const futureBirthdayAge = 35;
    const result = ageCalculator.yearsPassToFutureBirthdayOnEarth(futureBirthdayAge);
    expect(result).toEqual(5);
  });

  test('yearsPassToFutureBirthdayOnVenus calculates correctly', () => {
    const ageCalculator = new AgeCalculator(30); 
    const futureBirthdayAge = 35;
    const result = ageCalculator.yearsPassToFutureBirthdayOnVenus(futureBirthdayAge);
    expect(result).toEqual(8);
  });

  test('yearsPassToFutureBirthdayOnMars calculates correctly', () => {
    const ageCalculator = new AgeCalculator(30); 
    const futureBirthdayAge = 35;
    const result = ageCalculator.yearsPassToFutureBirthdayOnMars(futureBirthdayAge);
    expect(result).toEqual(3);
  });

  test('yearsPassToFutureBirthdayOnJupiter calculates correctly', () => {
    const ageCalculator = new AgeCalculator(10); 
    const futureBirthdayAge = 58;
    const result = ageCalculator.yearsPassToFutureBirthdayOnJupiter(futureBirthdayAge);
    expect(result).toEqual(4);
  });
});