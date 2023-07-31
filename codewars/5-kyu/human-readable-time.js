/*
https://www.codewars.com/kata/52685f7382004e774f0001f7

5 kyu
Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// time complexity: O(1) constant time - input size does not significantly affect the time (no loops, etc)
// space complexity: O(1) constant space
function humanReadable(seconds) {
  // 3600 seconds in an hour
  // 60 seconds in a minute
  // 1 second in a second
  let hours = "00";
  let mins = "00";
  let secs = "00";
  hours = Math.floor(seconds / 3600);
  mins = Math.floor((seconds % 3600) / 60); // modulus to get the remainder not put inside the HH; then divide 60 from that remainder to get the minutes
  secs = (seconds % 3600) % 60; // this works too: secs = seconds % 60

  hours = `${hours}`.length < 2 ? "0" + `${hours}` : `${hours}`;
  mins = `${mins}`.length < 2 ? "0" + `${mins}` : `${mins}`;
  secs = `${secs}`.length < 2 ? "0" + `${secs}` : `${secs}`;

  return hours + ":" + mins + ":" + secs;
}
