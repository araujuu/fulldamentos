const arr = ["Frodo", "Sam", "Merry", "Arias", "Ganso", "Julia"];
console.log(arr)

/// adicionar elemento
/// push - adiciona um elemento no FINAL do array

arr.push("Martinelli")
console.log(arr)

/// adicionar elemento
/// unshift - adicionar um elemento no COMEÇO do array

arr.unshift("martinelli")
console.log(arr)

/// remover elementos
/// pop - remover um elemento no FINAL do array

const ultimoElemento = arr.pop() /// nao precisa passar valor
console.log(arr)
console.log(ultimoElemento)

/// remover elementos
/// shift - remover um elemento no COMEÇO do array

const primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)

/// pesquisar por um elemento
/// includes - verifica se um certo elemento existe no array

const inclui = arr.includes("Julia")
console.log(arr)
console.log(inclui)

/// pesquisar por um elemento
/// indexof - pesquisar o indice do elemento

const indice = arr.indexOf("Julia")
console.log(arr)
console.log(indice)

/// cortar e concatenar arrays
/// slice - cortar um array e transformar essa parte em um novo array

const fluminense = arr.slice(0, 3)
const outros = arr.slice(-3)
console.log(arr)
console.log(fluminense)
console.log(outros)