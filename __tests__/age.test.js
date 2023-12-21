import AgeCalculator from "../src/js/age.js";

describe('AgeCalculator', () => {
  test('should correctly create an age calculator object', () => {
    const ageCalculation = new AgeCalculator(27);
    expect(ageCalculation.age).toEqual(27);
  });
});