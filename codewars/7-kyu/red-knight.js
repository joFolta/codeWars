/*
https://www.codewars.com/kata/5fc4349ddb878a0017838d0f

7 kyu
Red Knight

Red Knight is chasing two pawns. Which pawn will be caught, and where?

Input / Output
Input will be two integers:

N vertical position of Red Knight (0 or 1).
P horizontal position of two pawns (between 2 and 1000000).
Output has to be a tuple (python, haskell, Rust, prolog, C#), an array (javascript), an object (java), or a structure (C) with:

"Black" or "White" - which pawn was caught
Where it was caught (horizontal position)
Example
Input = 0, 4
Output = ["White", 8]

[Diagram]

Notes
Red Knight will always start at horizontal position 0.
The black pawn will always be at the bottom (vertical position 1).
The white pawn will always be at the top (vertical position 0).
The pawns move first, and they move simultaneously.
Red Knight moves 2 squares forward and 1 up or down.
Pawns always move 1 square forward.
Both pawns will start at the same horizontal position.
*/

function redKnight(N, P) {
  let knight = [N==0?'White':'Black',0]
  let white = ['White',P]
  let black = ['Black',P]
  while(true){
    white[1]++
    black[1]++
    if(knight[0]=='White') {
      knight[0] = 'Black'
    } else {
      knight[0] = 'White'
    }
    knight[1]+=2
    if(knight[0] == white[0] && knight[1] == white[1] || knight[0] == black[0] && knight[1] == black[1]) {
      return knight
    }
  }
}

function redKnight(N, P) {
  let knight = [N, 0]
  let white = P
  let black = P
  while (true) {
    white++
    black++
    knight[0]++
    knight[1] += 2
    if (knight[1] == white) {
      let pawn = knight[0]%2==0 ? 'White' : 'Black'
      return [pawn,white]
    }
  }
}

let redKnight = (N, P) => {
  let red = 0
  while (red != P) {
    P++
    N++
    red += 2
  }
  return [N % 2 == 0 ? 'White' : 'Black', P]
}

let redKnight=(N,P)=>{let red=0;while(red!=P){P++;N++;red+=2}return[N%2==0?'White':'Black',P]}