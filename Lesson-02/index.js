function randomInteger(min, max) {
  let range = max - min
  let result = Math.floor((range + 1) * Math.random() + min)
  return(result)
}

let firstCard = randomInteger(2, 11)
let secondCard = randomInteger(2, 11)
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

console.log(sum)
if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
  message = "Blackjack! 🥳"
  hasBlackjack = true
} else {
  message = "BTFO! 😂"
  isAlive = false
}

console.log(message)

// false
// true
// false
// false
// true
// true
// false