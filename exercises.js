/*
Brian Bredahl
Feb 6, 2021
Homework 1

  -- TO GET STARTED --
  Navigate to this folder in your command line
  Run the command 'npm i' to download your dependencies (Jest)
  Run the command 'npm run test' to run your tests
  Note that all of the tests are failing

  Finish the below functions to get the tests to pass
  See the Jest video for more information on automated tests
*/


// Array of objects
const characters = [
  {
    name: 'Rey',
    faction: 'Jedi'
  },
  {
    name: 'Luke Skywalker',
    faction: 'Jedi'
  },
  {
    name: 'Kylo Ren',
    faction: 'First Order'
  },
  {
    name: 'FN2187 (Finn)',
    faction: 'Resistance'
  },
  {
    name: 'Poe Dameron',
    faction: 'Resistance'
  }
]

//freebie function - returns length of array fruit
const freebie = () => {
  // Return the length of the array
  const fruit = [ 'apple', 'orange', 'banana', 'strawberry' ]
  
  return fruit.length
}

// mapExerciseq function - returns an array containing the name property of each object in the characters array using map function
const mapExercise1 = () => {
  /*
    Using the Array.map function, create an array
    of just these characters' names.
  */

  const names = characters.map((character) => character.name)

  return names
  // [ 'Rey', 'Kylo Ren', 'FN2187', 'Poe Dameron' ]
}

//mapExcercise2 function - returns an array containing values twice the value of the numbers array using the map function
const mapExercise2 = () => {
  /*
    Using the Array.map function, create a new array
    where each number in numbers is multiplied by 2
  */

  const numbers = [ 8, 7, 1, 5 ]

  const doubleNumbers = numbers.map((number) => number * 2)

  return doubleNumbers
  // [ 16, 14, 2, 10 ]
}

//filterExcercise1 - returns even numbers from the numbers array using filter function
const filterExercise1 = () => {
  /*
    Using the Array.filter function, create a new array
    with only the even numbers from 'numbers'
    HINT: The modulus (%) operator works the same
      in Javascript as it does in Java
  */

  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

  const evenNumbers = numbers.filter((number) => (number % 2) == 0)

  return evenNumbers
  // [ 2, 4, 6, 8 ]
}

//chainExercise1 - returns the name property of objects in the character array whose faction property is Jedi
//               - uses function chaining of the filter and map function to accomplish
const chainExercise1 = () => {
  /*
    Create a new array of just the Jedi names
    from the characters array
  */

  const jedi = characters.filter((character) => character.faction === 'Jedi')
  .map((character) => character.name)

  return jedi
  //[ 'Rey', 'Luke Skywalker' ]
}



module.exports = {
  freebie,
  mapExercise1,
  mapExercise2,
  filterExercise1,
  chainExercise1,
}