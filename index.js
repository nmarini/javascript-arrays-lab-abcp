const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) { 
  kittens.push(name)
<<<<<<< HEAD
}
function destructivelyPrependKitten(name) { 
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
=======
>>>>>>> b45d436f1d59c292e3ee80a48c43034e4df383f3
}