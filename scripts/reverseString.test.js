import {reverseString} from './reverseString';

test('Simple word', () => {
    expect(reverseString('apple')).toBe('elppa');
})

test('Word and spaces', () => {
    expect(reverseString('apple ')).toBe(' elppa');
})

test('Empty string', () => {
    expect(reverseString('')).toBe('');
})

test('Empty spaces', () => {
    expect(reverseString('  ')).toBe('  ');
})