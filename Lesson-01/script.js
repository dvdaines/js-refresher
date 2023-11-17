let count = 0

function increment() {
  count += 1
  document.getElementById("count-el").textContent = count
}

function reset() {
  count = 0
  document.getElementById("count-el").textContent = count
  document.getElementById("save-el").textContent = 'Previous entries:'
}

function save() {
  let previousEntries = document.getElementById('save-el')
  previousEntries.textContent += count + ' - ';
  count = 0
  document.getElementById("count-el").textContent = count
}

let myPoints = 3

function add3Points() {
  myPoints += 3
}

function remove1Point()  {
  myPoints -= 1
}