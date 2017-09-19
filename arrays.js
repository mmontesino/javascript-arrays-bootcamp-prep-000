var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray () {
  var cars = ['Toyota', 'Ford']
  cars.unshift('Audi')
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
