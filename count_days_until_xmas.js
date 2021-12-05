// With the excitement, we are already starting to count the days of the calendar until December 25 📆.

// To help this, we are going to create a function that, passing it an instance of Date, tells us the number of days left.

// Let's see some examples:

const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2)) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5
// The result has to be a whole number and, as you can see, even if there is a second until the next day, it is understood that there is still a day left.

// But beware! You also have to indicate if the date is the same day (we would return 0) or if it is a future date (we would return the number of days in negative -):

const date5 = new Date('Dec 25, 2021')
console.log(daysToXmas(date5)) // 0
const date6 = new Date('Dec 26, 2021')
console.log(daysToXmas(date6)) // -1
const date7 = new Date('Dec 31, 2021')
console.log(daysToXmas(date7)) // -6
const date8 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date8)) // -7
const date9 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date9)) // -7
// By the way, the reference date to know if it is December 25 is Dec 25, 2021.

export default function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  return Math.ceil((new Date('Dec 25, 2021') - new Date(date)) / (1000 * 60 * 60 * 24))
}
