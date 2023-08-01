/*
https://www.codewars.com/kata/513e08acc600c94f01000001

5 kyu
RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// time complexity: O(1) constant time
// space complexity: O(1) constant space
function rgb(r, g, b) {
  if (Number(r) > 255) r = 255;
  if (Number(g) > 255) g = 255;
  if (Number(b) > 255) b = 255;

  if (Number(r) < 0) r = 0;
  if (Number(g) < 0) g = 0;
  if (Number(b) < 0) b = 0;

  r = r.toString(16).toUpperCase();
  g = g.toString(16).toUpperCase();
  b = b.toString(16).toUpperCase();

  if (r.length < 2) r = 0 + r;
  if (g.length < 2) g = 0 + g;
  if (b.length < 2) b = 0 + b;

  return r + g + b;
}

// rest parameter
function rgb(...args) {
  return args
    .map((arg) => (arg > 255 ? 255 : arg))
    .map((arg) => (arg < 0 ? 0 : arg))
    .map((arg) => arg.toString(16))
    .map((arg) => arg.padStart(2, 0))
    .join("")
    .toUpperCase();
}
