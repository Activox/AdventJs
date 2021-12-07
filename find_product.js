// My friend Dani is working in a store and with the arrival of Christmas, 
// the warehouse is in a mess and he can't find anything.

// We are going to create a function containsthat receives two parameters: 
// an object that defines the warehouse and the product we are looking for.

// The function must return a boolean that indicates if the string is found as a value at some level of the object. 
// Let's see some examples:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false
// Keep in mind that the store is huge. It has different warehouses and, 
// as you have seen in the examples, each one can have different organizations. 
// The important thing is to find that the product is in the warehouses.

export default function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
  let result = false
  for (let prop in store){
    if (typeof store[prop] === "object"){
      result = contains(store[prop], product)
    }else {
      if (store[prop] === product){
        return  true
      }
    }
  }
  return result
}
