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
});