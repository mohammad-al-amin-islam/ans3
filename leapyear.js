const isLeapYear = (year) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
};

const res = isLeapYear(2015);

if (res) {
  console.log("leap year");
} else {
  console.log(" not leap year");
}
