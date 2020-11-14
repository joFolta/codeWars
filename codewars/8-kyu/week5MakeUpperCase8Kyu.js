// Write function makeUpperCase.
//
// FUNDAMENTALS

function makeUpperCase(str) {
  return str.toUpperCase()
}
makeUpperCase("kangaroo")
"KANGAROO"

// OTHER SOLUTION
let u = {
  'a':'A','b':'B','c':'C','d':'D','e':'E','f':'F','g':'G','h':'H','e':'E','f':'F','g':'G','h':'H','i':'I','j':'J','k':'K',
  'l':'L','m':'M','n':'N','o':'O','p':'P','q':'Q','r':'R','s':'S','t':'T','u':'U','v':'V','w':'W','x':'X','y':'Y','z':'Z'
};

function makeUpperCase(str) {
  return str.split('').map( (x) => { return u[x] ? u[x] : x } ).join('');
}
makeUpperCase("kangaroo")
"KANGAROO"


// Sample Tests:
// describe("Basic Tests", function(){
//   it("should pass the basic tests", function(){
//     Test.assertEquals(makeUpperCase("hello"), "HELLO");
//   });
// });

// github test change
// 
