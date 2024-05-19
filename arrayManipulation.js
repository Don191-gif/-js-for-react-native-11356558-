function processArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array of numbers');
    }

    return arr.map(num => {
        if (typeof num !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return num % 2 === 0 ? num * num : num * 3;
    });
}
const exampleArray = [1, 2, 3, 4, 5];
const processedArray = processArray(exampleArray);
console.log(processedArray);
module.exports = processArray;
