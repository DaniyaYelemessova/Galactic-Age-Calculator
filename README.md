## <div align="center">Super Galactic Age Calculator</div>

#### <div align="center">💻 _Learning project for Test Driven Development 12/22/2023_ </div>

**_<p align="right">By Daniya Yelemessova_**</p>

<p align="center">
  <img src="images/js.png" alt="js" width="30"/>
</p>

<div><img src="" alt="screen of the program" width="50%" display="block" margin-left="auto" margin-right="auto"/></div>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🛠️ _Technologies used:_

- HTML
- CSS
- JavaScript
- Visual Studio Code
- GIT
- Node.js and npm
- npm Packages
- Linter(ESLint)
- Testing Framework(Jest)


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🚥 _Installation and USAGE_

<details>
To set up and use this project locally for development or testing purposes, follow these steps:

To get started, you'll need to clone this repository to your local machine. Open your terminal or command prompt and use the following command to do so:
1. git clone 
2. Navigate to the Project Directory, using **cd**
3. Open the project using **code .**
4. Install all packages with $ npm install.
5. Start a development server with $ npm run start
6. Linting JS files in the src folder with $ npm run lint
7. Run tests with Jest using $ npm run test
</details>

## <div align="center"> ⌨️ _Tests_
<details>
```
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

```
</details>


### <div align="center"> 🤔 _Description:_




![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> <img src="images/github.png" alt="github icon" width="30px"> _Link to site on Github Pages:_

- [GitHub page link](https://github.com/DaniyaYelemessova)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> _Known Issues_

-no known issues at this time.

## <div align="center"> 📬 _Contact Information_

#### For any questions _[LinkedIn](https://www.linkedin.com/in/daniya-collings/)_

## <div align="center"> 📘 _License and copyright:_

> **_© Daniya Yelemessova, 2023_**  
> ⚖️ _[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)_


