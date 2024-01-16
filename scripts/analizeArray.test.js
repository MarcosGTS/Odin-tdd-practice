import { analyzeArray } from "./analizeArray";

test('Basic list', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('Negative number', () => {
    expect(analyzeArray([1,-8,3,-4,2,6])).toEqual({
        average: 0,
        min: -8,
        max: 6,
        length: 6
    })
})

test('Empyt list', () => {
    expect(analyzeArray([])).toEqual({})
})