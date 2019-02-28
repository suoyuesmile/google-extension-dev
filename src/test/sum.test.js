import { sum, truthiness } from '../test.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('turhiness is equal ture', () => {
  expect(truthiness()).toBeTruthy()
})