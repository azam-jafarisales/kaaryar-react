export function sumFromTo(start, end) {
    var n = (end - start + 1);
    var sum = n * (start + end) / 2;
    return sum;
}



export function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arr.length
    return average;
}



export function sortNumbers(arr) {
    return arr.sort(function (a, b) { return b - a });
}

export default sumFromTo;