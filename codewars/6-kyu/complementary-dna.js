/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038

7 kyu
Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna){
  let complementaryBases = dna.split('').map(base => {
    if (base === "A") {
      return "T"
    } 
    if (base === "T") {
      return "A"
    }
    if (base === "C") {
      return "G"
    }
    if (base === "G") {
      return "C"
    }
  })
  
  return complementaryBases.join('')
}

// DOESN'T WORK B.C. the complementary strand gets changed back again
// function DNAStrand(dna) {
//   let newDna = dna;
//   newDna = newDna.replaceAll("T", "A");
//   newDna = newDna.replaceAll("A", "T");
//   newDna = newDna.replaceAll("G", "C");
//   newDna = newDna.replaceAll("C", "G");
//   return newDna;
// }

function DNAStrand(dna) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  // "." is the regex wildcard (matches all chars)
  // "g" global means do it more than just once (all chars in dna)
  return dna.replace(/./g, (base) => pairs[base]);
}