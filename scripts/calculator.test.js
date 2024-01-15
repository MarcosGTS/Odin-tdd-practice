import {calculator} from './calculator';

test('Sum numbers', () => {
    expect(calculator.sum(19, 2)).toBe(21);
})

test('Subtract numbers', () => {
    expect(calculator.subtract(10, 2)).toBe(8);
})

test('Divide numbers', () => {
    expect(calculator.divide(6, 2)).toBeCloseTo(3.0);
})

test('Multiply numbers', () => {
    expect(calculator.multiply(1.5, 4)).toBeCloseTo(6.0);
})