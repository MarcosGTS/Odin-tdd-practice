export function analyzeArray(arr) {
    if (arr.length == 0) return {};
    
    const sum = arr.reduce((prev, acc) => prev + acc, 0);
    const length = arr.length;
    const average = sum / length
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {average, min, max, length};
}