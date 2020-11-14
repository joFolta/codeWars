// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//
// FUNDAMENTALS MATHEMATICS ALGORITHMS NUMBERS

// MY SOLUTION
function even_or_odd(number) {
  if (number % 2 === 0){
    return "Even"
  } else {
    return "Odd"
  }
}

// MY TEST
// even_or_odd(21)
// "Odd"
// even_or_odd(10)
// "Even"

// OTHER SOLUTIONS
// even_or_odd = a => (a % 2) ? "Odd" : "Even";

// SAME TESTS
// even_or_odd(21)
// "Odd"
// even_or_odd(10)
// "Even"



// Sample tests
// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")
