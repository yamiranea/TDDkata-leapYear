const { expect } = require("@jest/globals");
const LeapYear = require("../LeapYear");

describe("Test to validate whether a year is a leap year or not", () => {
  test("Test that returns true if year is divisible by 4 and 400", () => {
    const years = [4, 400];
    const expected_response = true;
    const leapYear = new LeapYear();

    const received_response = years.every((year) =>
      leapYear.validate_leap_year(year)
    );

    expect(received_response).toBe(expected_response);
  });

  test("Test that returns false if year is NOT divisible by 4", () => {
    const years = [6, 100];
    const expected_response = false;
    const leapYear = new LeapYear();

    const received_response = years.every((year) =>
      leapYear.validate_leap_year(year)
    );

    expect(received_response).toBe(expected_response);
  });
});
