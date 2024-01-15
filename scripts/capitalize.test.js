import { capitalize } from "./capitalize";

test('Lowercase', () => {
    expect(capitalize('apple')).toBe('Apple');
})

test('Uppercase', () => {
    expect(capitalize('ORANGE')).toBe('Orange');
})

test('Capitalize', () => {
    expect(capitalize('Banana')).toBe('Banana');
})

test('Empty string', () => {
    expect(capitalize('')).toBe('');
})

test('Empty spaces', () => {
    expect(capitalize('  ')).toBe('  ');
})