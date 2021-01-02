/*
https://www.codewars.com/kata/599da159a30addffd00000af

7 kyu
Collision Detection

Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}
If a collision is detected, return true. If not, return false.

Here's a geometric diagram of what the circles passed in represent:

[diagram]
*/

function collision(x1, y1, radius1, x2, y2, radius2) {
  const cirOneXRange = [x1-radius1, x1+radius1]
  const cirOneYRange = [y1-radius1, y1+radius1]
  const cirTwoXRange = [x2 - radius2, x2 + radius2]
  const cirTwoYRange = [y2 - radius2, y2 + radius2]
  
  const overlapX = (cirOneXRange[0] >= cirTwoXRange[0] && cirOneXRange[0] <= cirTwoXRange[1]) || (cirOneXRange[1] >= cirTwoXRange[0] && cirOneXRange[1] <= cirTwoXRange[1])
  
  const overlapY = (cirOneYRange[0] >= cirTwoYRange[0] && cirOneYRange[0] <= cirTwoYRange[1]) || (cirOneYRange[1] >= cirTwoYRange[0] && cirOneYRange[1] <= cirTwoYRange[1])
  
  console.log(overlapX, overlapY)
  
  return overlapX && overlapY
}

// UNSOLVED