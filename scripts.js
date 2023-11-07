function getCurrentDate() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDate = new Date();

  var day = days[currentDate.getDay()];
  var month = months[currentDate.getMonth()];
  var numericDate = currentDate.getDate();
  var year = currentDate.getFullYear();

  var formattedDate =
    day +
    " " +
    month +
    " " +
    (numericDate < 10 ? "0" : "") +
    numericDate +
    ", " +
    year;

  document.getElementById("currentDate").innerHTML = formattedDate;
}
