import { ceaserCipher, findEquivalent } from './ceasarCipher.js';
test('Basic equivalence', () => {
    expect(findEquivalent('a', 1)).toBe('b');
})

test('Negative shift', () => {
    expect(findEquivalent('a', -1)).toBe('z');
})

test('Basic cipher (1)', () => {
    expect(ceaserCipher('apple', 1)).toBe('bqqmf')
})

test('Basic cipher (2)', () => {
    expect(ceaserCipher('banana', 3)).toBe('edqdqd')
})

test('Basic cipher (3)', () => {
    expect(ceaserCipher('zebra', 3)).toBe('cheud')
})

test('Keep casing', () => {
    expect(ceaserCipher('ApPLe', 1)).toBe('BqQMf')
})

test('Keep spaces and punctuation', () => {
    expect(ceaserCipher("i've peeked an apple from that tree!", 3)).toBe("l'yh shhnhg dq dssoh iurp wkdw wuhh!")
})
