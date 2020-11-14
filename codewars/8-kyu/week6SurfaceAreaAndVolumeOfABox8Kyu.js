// Write a function that returns the total surface area and volume of a box as an array: [area, volume].
//
// FUNDAMENTALS GEOMETRY ALGEBRA MATHEMATICS ALGORITHMS

// MY SOLUTION
function getSize(width, height, depth){
  let surfArea = 2*(width*height + width*depth + height*depth)
  let volume = width * height * depth
  return  [surfArea, volume]
}

// MY TESTS
// getSize(10,10,10)
// [600, 1000]
//
// getSize(2,3,4)
// [52, 24]

// OTHER SOLUTION
// function getSize(width, height, depth){
//   var box = { width: width, height:height, depth:depth};
// //MAKING W,H,D  PROPERTIES OF BOX
//   return [getArea(box), getVolume(box)];
// }
//
// function getArea(box){
//   return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
// }
//
// function getVolume(box){
//   return box.width * box.height * box.depth;
// }


// SAMPLE TESTS
// Test.assertEquals(getSize(4, 2, 6)[1], 48);
// Test.assertSimilar(getSize(10, 10, 10), [600, 1000]);
// Test.assertEquals(getSize(4, 2, 6)[0], 88);
// Test.assertEquals(getSize(4, 2, 6)[1], 48);
