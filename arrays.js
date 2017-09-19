var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray () {
  var cars = [1]
  cars.unshift('foo')
}
function destructivelyAddElementToBeginningOfArray() {
  var cars = ['Toyota', 'Ford']
  var moreCars = ['Audi', ...cars]
}
function addElementToEndOfArray() {
  var games = ['Chess', 'Tic Tac Toe']
  var moreGames = [...games, 'Monopoly']
}
function destructivelyAddElementToEndOfArray() {
  var games = ['Chess', 'Tic Tac Toe']
  games.push('Checkers')
}
function accessElementInArray() {
  var entrepreneurs = ['Elon Musk', 'Steve Jobs', 'Scott Belsky']
  console.log(entrepreneurs[2])
}
function destroctivelyRemoveElementFromBeginningOfArray() {
  var techCompanies = ['Apple', 'Google', 'Facebook']
  techCompanies.shift()
  techCompanies
}
function removeElementFromBeginningOfArray() {
  var cats = ["Milo", "Garfield", "Otis"]
  cats.slice(1)
  return cats
}
function destructivelyRemoveElementFromEndOfArray() {
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  iceCreams.pop()
  return iceCreams
}
function removeElementFromEndOfArray() {
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  iceCreams.slice(0, iceCreams.length - 1)
}
