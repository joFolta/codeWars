/*
https://www.codewars.com/kata/52b5247074ea613a09000164

7 kyu
Boiled Eggs

You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example
cookingTime(0); // must return 0
cookingTime(5); // must return 5
cookingTime(10); // must return 10
*/

const cookingTime = (eggs) => {
  let floored = Math.floor(eggs/8)
  console.log("floored", floored)
  let additionalBatch = eggs%8==0?0:1
  console.log("additionalBatch", additionalBatch)
  let batches = floored + additionalBatch
  return batches*5
}

const cookingTime = (eggs) => (Math.floor(eggs/8) + (eggs%8==0?0:1))*5