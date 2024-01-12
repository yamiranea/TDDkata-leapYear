class LeapYear {
  validate_leap_year(year) {
    if (year % 4 === 0 && year % 400 === 0) {
      return true;
    } else if (year % 6 === 0 && year % 100 === 0) {
      return false;
    }
  }
}

module.exports = LeapYear;
