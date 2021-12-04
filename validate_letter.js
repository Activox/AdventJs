// The Grinch is opening the letters that went to Santa Claus and is making a mess of them. 😱

// The letters are a string of text that includes gifts and parentheses ().

// To know if a letter is valid ✅, you must check that the parentheses close correctly and that, in addition, they are not empty.

// But beware! Because the Grinch has left braces {and brackets [inside the parentheses that make them invalid . Luckily he only left them in the middle of the parentheses ...

// Examples:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
      
// Create a function that, passing it the text of the letter, returns trueif it is valid and falseif it is not. And put an end to the Grinch's mischief!

export default function isValid(letter) {
  let isLetterValid = false, 
      regex = letter.match(/\(([^)]+)\)/)
  if (regex){
   isLetterValid = !regex[1].includes("(") && !regex[1].includes("[") && !regex[1].includes("{")
  }
  return isLetterValid
 }

 const letter = "bici coche (balón bici coche"

 console.log({letter, isValid: isValid(letter)})
