/*
 * Date class extention
 * v1.1.2, 2021-03-01
 * Paul Philippov, paul@themactep.com
 * Homepage: https://themactep.com/beats/js
 * License: WTFPL
 */

// Date.toInternetTime(n)
// Converts time to Swatch Internet Time format.
// n - the number of digits after decimal point.
Date.prototype.toInternetTime = function (n) {
  const BeatInSeconds = 86.4;
  const seconds = this.getUTCSeconds();
  const minutes = this.getUTCMinutes();
  let hours = this.getUTCHours();
  hours = (23 === hours) ? 0 : hours + 1;
  const BielMeanTime = (hours * 60 + minutes) * 60 + seconds;
  const beats = Math.abs(BielMeanTime / BeatInSeconds).toFixed(parseInt(n));
  const length = (n > 0) ? 1 + n : 0;
  return '@'.concat('000'.concat(beats).slice(beats.length - length));
};

// Date.getDayOfYear()
// Returns the number of days from the beginning of year to the date.
Date.prototype.getDayOfYear = function () {
  const DayInSeconds = 86400000;
  const BeginningOfYear = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((this - BeginningOfYear) / DayInSeconds);
};

function startTime() {
  var d = new Date(),
      time = d.toInternetTime(2);
      
 document.getElementById('time').innerHTML = "<a href='https://en.wikipedia.org/wiki/Swatch_Internet_Time'>" + time + "</a>" ;
}
setInterval(startTime, 500)
