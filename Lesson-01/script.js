function increment() {
  let count = document.getElementById("count-el").innerHTML
  let newValue = parseInt(count) + 1
  document.getElementById("count-el").innerHTML = newValue
}

function save() {
  console.log("save")
}

function countdown() {
  for(n = 5; n >= 1; n--) {
    console.log(n)
  }
}

function fortyTwo() {
  console.log(42)
}

let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLapTime() {
  let totalTime = lap1 + lap2 + lap3
  console.log(totalTime)
}

logLapTime()