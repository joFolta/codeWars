function capitalizeLetters(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

capitalizeLetters('a tree is here')