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


const exampleNames = ["Alice", "Bob", "Charlie"];
const processedNumbers = processArray([1, 2, 3]);
const formattedStrings = formatArrayStrings(exampleNames, processedNumbers);
const userProfiles = createUserProfiles(exampleNames, formattedStrings);
console.log(userProfiles);


module.exports = {
    processArray,
    formatArrayStrings,
    createUserProfiles
};
