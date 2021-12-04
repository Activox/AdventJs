
// It's time to put the Christmas tree at home! 🎄

// To do this, we are going to create a function that receives the height of the tree, which will be a positive integer from 1 to, at most, 100.

// If we passed the argument to it 5, it would paint this:

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____
// We create a triangle of asterisks *with the given height and, on the sides, we use the underscore _for the spaces. It is very important that our tree always has the same length on each side.
// All trees, no matter how small or large, have a trunk with two lines of #.

// Another example with a tall tree 3:

// __*__
// _***_
// *****
// __#__
// __#__
// Keep in mind that the tree is a string and you need the line breaks \nfor each line for the tree to form well.


export default function createXmasTree(height) {
  const SYMBOLS = {
    leaf: "*",
    gap: "_",
    trunk: "#"
  }

  let tree = [],
      treeTrunk = null,
      width = 1,
      emptySpaces = height - 1
  
  treeTrunk = SYMBOLS.gap.repeat(emptySpaces) + SYMBOLS.trunk.repeat(width) + SYMBOLS.gap.repeat(emptySpaces)
  
  for(let i = 0; i < height; i++){
    emptySpaces = emptySpaces < 0 ? 0 : emptySpaces
    tree[i] = SYMBOLS.gap.repeat(emptySpaces) + SYMBOLS.leaf.repeat(width) + SYMBOLS.gap.repeat(emptySpaces)
    width += 2
    emptySpaces--
  }

  tree.push(treeTrunk)
  tree.push(treeTrunk)
  
  return tree.join("\n")
}
console.log(createXmasTree(5))

