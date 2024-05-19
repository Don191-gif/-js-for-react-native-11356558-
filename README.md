# -js-for-react-native-11356558-
// arrayManipulation.js

// Student ID: 11356558

/**
 * Task 1: Process an array of numbers
 * - Takes an array of numbers as an argument.
 * - Returns a new array where each even number is squared and each odd number is tripled.
 */
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

/**
 * Task 2: Format an array of strings based on corresponding numbers
 * - Takes two arrays as arguments:
 *   - An array of strings.
 *   - An array of numbers processed by processArray.
 * - Modifies each string based on its corresponding number:
 *   - Capitalizes the entire string if the number is even.
 *   - Converts the string to lowercase if the number is odd.
 */
function formatArrayStrings(strings, numbers) {
    if (!Array.isArray(strings) || !Array.isArray(numbers) || strings.length !== numbers.length) {
        throw new Error('Both arguments must be arrays of the same length');
    }

    return strings.map((str, index) => {
        const num = numbers[index];
        if (typeof num !== 'number') {
            throw new Error('Second argument must be an array of numbers');
        }

        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

/**
 * Task 3: Create user profiles
 * - Takes an array of names and the array of modified names from Task 2.
 * - Returns an array of objects, each containing originalName, modifiedName, and id (auto-incremented starting from 1).
 */
function createUserProfiles(names, modifiedNames) {
    if (!Array.isArray(names) || !Array.isArray(modifiedNames) || names.length !== modifiedNames.length) {
        throw new Error('Both arguments must be arrays of the same length');
    }

    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
const exampleNames = ["Alice", "Bob", "Charlie"];
const processedNumbers = processArray([1, 2, 3]);
const formattedStrings = formatArrayStrings(exampleNames, processedNumbers);
const userProfiles = createUserProfiles(exampleNames, formattedStrings);
console.log(userProfiles);
// Output: [
//   { originalName: 'Alice', modifiedName: 'alice', id: 1 },
//   { originalName: 'Bob', modifiedName: 'BOB', id: 2 },
//   { originalName: 'Charlie', modifiedName: 'charlie', id: 3 }
// ]

// Export the functions for use in other modules
module.exports = {
    processArray,
    formatArrayStrings,
    createUserProfiles
};
