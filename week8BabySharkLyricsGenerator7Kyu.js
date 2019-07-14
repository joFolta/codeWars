// Baby Shark Lyrics
// Create a function, as short as possible, that returns this lyrics.
// Your code should be less than 300 characters.
//
// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark!
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark!
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark!
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark!
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark!
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt!
// Run away,…
// Good Luck!
//
// FUNDAMENTALS STRINGS LISTS DATASTRUCTURES

//SOLUTION
const babySharkLyrics = () => {
  const fish = ['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"]
  let lyrics = ''
  fish.forEach(f => {
    lyrics += `${f}, doo doo doo doo doo doo\n`.repeat(3)+`${f}!\n`
  })
  lyrics += 'Run away,…'
  return lyrics
}

// MY TESTS
babySharkLyrics()

// ALMOST
// https://www.codewars.com/kata/baby-shark-lyrics-generator/train/javascript
// charac 300 vs 315...
// 
// let babySharkLyrics=()=>{let b="Baby shark"
// let d=", doo doo doo doo doo doo\n"
// let m="Mommy shark"
// let f="Daddy shark"
// let g="Grandma shark"
// let p="Grandpa shark"
// let h="Let's go hunt"
// let s="!\n"
// return(b+d+b+d+b+d+b+s+m+d+m+d+m+d+m+s+f+d+f+d+f+d+f+s+g+d+g+d+g+d+g+s+p+d+p+d+p+d+p+s+h+d+h+d+h+d+h+s+"Run away,…")}


//Sample Tests:
// Lyrics
// babyshark = "Baby shark, doo doo doo doo doo doo\n\
// Baby shark, doo doo doo doo doo doo\n\
// Baby shark, doo doo doo doo doo doo\n\
// Baby shark!\n\
// Mommy shark, doo doo doo doo doo doo\n\
// Mommy shark, doo doo doo doo doo doo\n\
// Mommy shark, doo doo doo doo doo doo\n\
// Mommy shark!\n\
// Daddy shark, doo doo doo doo doo doo\n\
// Daddy shark, doo doo doo doo doo doo\n\
// Daddy shark, doo doo doo doo doo doo\n\
// Daddy shark!\n\
// Grandma shark, doo doo doo doo doo doo\n\
// Grandma shark, doo doo doo doo doo doo\n\
// Grandma shark, doo doo doo doo doo doo\n\
// Grandma shark!\n\
// Grandpa shark, doo doo doo doo doo doo\n\
// Grandpa shark, doo doo doo doo doo doo\n\
// Grandpa shark, doo doo doo doo doo doo\n\
// Grandpa shark!\n\
// Let's go hunt, doo doo doo doo doo doo\n\
// Let's go hunt, doo doo doo doo doo doo\n\
// Let's go hunt, doo doo doo doo doo doo\n\
// Let's go hunt!\n\
// Run away,…";
//
// babySharkCode = babySharkLyrics.toString();
// func_size = babySharkCode.length;
// const MAX_SIZE=300;
//
// describe("baby_shark_lyrics", function() {
//   it("returns correct result for baby_shark_lyrics function", function() {
//     Test.assertEquals(babySharkLyrics(), babyshark, "Fails, something went wrong");
//     Test.assertEquals(func_size<MAX_SIZE, true, `It should be less than ${MAX_SIZE} characters. You have ${func_size}`);
//   });
// });
