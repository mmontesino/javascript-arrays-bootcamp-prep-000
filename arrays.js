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
