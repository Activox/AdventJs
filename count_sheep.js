// Consider a list / array of sheep. Each sheep has a name and a color. Make a function that returns a list with all the sheep that are colored rojo and that their name also contains both the letters nY a, regardless of the order, capital letters or spaces.

// For example, if we have the sheep:

const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]
// When executing the method it should return the following:

export default function contarSheeps(sheeps) {
    sheeps = sheeps.filter(
      sheep =>(
        sheep.color === "rojo" && (
          sheep.name.toLowerCase().includes("n") && sheep.name.toLowerCase().includes("a")
        )
      )
    )
  return sheeps
}

const filterSheeps = contarSheeps(sheeps)

console.log(filterSheeps)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

