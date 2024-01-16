const { expect } = require("@jest/globals");
const LeapYear = require("../LeapYear");

describe("Test to validate whether a year is a leap year or not", () => {
  const testCases = [
    { years: [4, 400], expected_response: true },
    { years: [6, 100], expected_response: false },
  ];

  testCases.forEach(({ years, expected_response }) => {
    test(`Test that returns ${expected_response} if year is ${years.join(
      " and "
    )} divisible`, () => {
      const leapYear = new LeapYear();
      const received_response = years.every((year) =>
        leapYear.validate_leap_year(year)
      );
      expect(received_response).toBe(expected_response);
    });
  });
});
