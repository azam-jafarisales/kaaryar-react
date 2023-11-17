import randomNums from "./get-random-numbers.js"
import {sumFromTo , getAverage , sortNumbers} from "./list-calculator.js"

let randomList = randomNums(6);
console.log(randomList);
let average = getAverage(randomList)
console.log(average);
let sortedNums =sortNumbers(randomList);
console.log(sortedNums);
 console.log(sumFromTo(sortedNums[sortedNums.length - 1] , sortedNums[0]));
