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
