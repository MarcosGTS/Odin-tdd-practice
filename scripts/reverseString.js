export function reverseString(word) {
    return word.split('')
        .reduce((prev, char) => prev = char + prev, '');
}