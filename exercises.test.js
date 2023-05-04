const exercises = require('./exercises')


describe('HW 1 Exercises', () => {
  it('Freebie', () => {
    expect(exercises.freebie()).toEqual(4)
  })

  it('Map Exercise 1', () => {
    expect(exercises.mapExercise1())
      .toEqual([ 'Rey', 'Luke Skywalker', 'Kylo Ren', 'FN2187 (Finn)', 'Poe Dameron' ])
  })

  it('Map Exercise 2', () => {
    expect(exercises.mapExercise2())
      .toEqual([ 16, 14, 2, 10 ])
  })

  it('Filter Exercise 1', () => {
    expect(exercises.filterExercise1())
      .toEqual([ 2, 4, 6, 8 ])
  })

  it('Chain Exercise 1', () => {
    expect(exercises.chainExercise1())
      .toEqual([ 'Rey', 'Luke Skywalker' ])
  })
})