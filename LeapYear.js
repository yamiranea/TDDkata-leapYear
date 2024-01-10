class LeapYear {
  validate_leap_year(params) {
    if (params % 4 === 0) {
      return true;
    } else if (params % 6 === 0) {
      return false;
    }
  }
}

module.exports = LeapYear;
