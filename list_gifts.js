// You have received a letter ✉️ with all the gifts you must prepare. The point is that it is a text string and it is very difficult to read 😱. Luckily they have put each gift separated by space! (Although be careful , because being children, they have still strained more spaces than the account)

// Above we have noticed that some words come with a _before the word, for example _playstation, which means that it is crossed out and does not have to be counted.

// Transform the text to an object that contains the name of each gift and the number of times it appears. For example, if we have the text:

const carta = 'bici coche balón _playstation bici coche peluche'
// When executing the method it should return the following:

export default function listGifts(letter) {
   let gifts = letter.split(" "), listOfGifts = {}
   
   gifts.forEach((gift) => {
     if (!gift.includes("_") && gift){
       if (!listOfGifts[gift]){
         listOfGifts[gift] = 0
       }
       listOfGifts[gift] += 1
     }
   })
   
   return listOfGifts
 }

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
// Keep in mind that the tests can be more exhaustive ... 😝 Be careful with counting empty spaces!
