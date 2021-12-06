// Before we can enjoy Christmas ... we have to finish finishing the final exams. And play a little math! 😱

// Two parameters are passed to a function: an Array with numbers and the expected result.

// The function must return the two values ​​of the Array that add up to the expected result. 
// Since there can sometimes be more than two values that add up, the first one from the left that finds another pair will be returned, no matter how far to the right .

// If it is not found, it is returned null.

// Let's see some examples:

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]

// The result has to be an array with two numbers .

// Once you have the result ... how could you make it as optimal as possible so that you do n't have to go through the same situations twice 🤔?

export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  let listOfNumbers = []
  for (let i = 0; i < numbers.length; i++){
    let secondNumber = i + 1
    while (secondNumber < numbers.length){
      if ((Number(numbers[i]) + Number(numbers[secondNumber])) === result && listOfNumbers.length === 0){
        listOfNumbers.push(numbers[i])
        listOfNumbers.push(numbers[secondNumber])
      }
      secondNumber++
    }
  }
  return listOfNumbers.length > 0 ? listOfNumbers : null
}
