let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
  let min = 2
  let max = 11
  let range = max - min
  let result = Math.floor((range + 1) * Math.random() + min)
  return(result)
}

function startGame() {
  cards.push(getRandomCard(2, 11))
  cards.push(getRandomCard(2, 11))
  renderGame()
}

function renderGame() {
  let newSum = 0
  let cardsString = "Cards: "
  cards.forEach(function(card) {
    newSum += card
    cardsString += card + " "
  })
  sum = newSum
  cardsEl.textContent = "Cards: " + cardsString
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackjack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}


function newCard() {
  cards.push(getRandomCard(2, 11))
  renderGame()
}

