const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const upperAlphabet = lowerAlphabet.toUpperCase();
const alphabetLen = lowerAlphabet.length;


export function ceaserCipher(str, shift) {
    return str.split('').reduce((prev, char) => 
        prev + findEquivalent(char, shift)
    , '')
}

export function findEquivalent(char, shift) {
    let index = null;
    let alphabet = null;

    if (shift < 0) {
        shift = alphabetLen - Math.abs(shift) % alphabetLen;
    }

    if (lowerAlphabet.includes(char)) {
        index = lowerAlphabet.indexOf(char);
        alphabet = lowerAlphabet;
    } else if (upperAlphabet.includes(char)) {
        index = upperAlphabet.indexOf(char);
        alphabet = upperAlphabet;
    } else {
        return char;
    }
    
    const newIndex = (index + shift) % alphabetLen;

    return alphabet[newIndex];
}
