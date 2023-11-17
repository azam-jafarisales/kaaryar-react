export default function getRandomNumbers(count) {
    let arr = [];
    while (arr.length < count) {
        arr.push(Math.floor(Math.random() * (100 - (-100)) + (-100)))
    }
    return arr;
}

// getRandomNumbers(4)