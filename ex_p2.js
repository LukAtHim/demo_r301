
//ex1
console.log("\nex1:")
const personne = {
    prenom: "Luke",
    nom: "BATES",
    age: 19,
    ville: "Bricquebec"

}
console.log(personne.prenom)
console.log(personne.nom)
console.log(personne.age)
console.log(personne.ville)

//ex2
console.log("\nex2:")
const tabPersonne = [
    {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
    {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
    {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
]
console.log(tabPersonne)
console.table(tabPersonne)

//ex3
console.log("\nex3:")
tabPersonne.push({prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"})
console.log(tabPersonne)
console.table(tabPersonne)


//ex4
console.log("\nex4:")
tabPersonne[0].prenom = "Jean"
tabPersonne.splice(1,1)
console.log(tabPersonne)
console.table(tabPersonne)

//ex5
console.log("\nex5:")
const tabNb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tabNb[0])
console.log(tabNb[tabNb.length - 1])
console.log(tabNb.length)


//ex6
console.log("\nex6:")
const tabNbDix = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(tabNbDix)
console.log(tabNbDix.reverse())

//ex7
console.log("\nex7:")
const numbersToSort = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]
console.table(numbersToSort)
numbersToSort.sort()
console.table(numbersToSort)


//ex8
console.log("\nex8:")
numbersToSort.push(11)
console.table(numbersToSort)
numbersToSort.unshift(0)
console.table(numbersToSort)
numbersToSort.pop()
console.table(numbersToSort)
