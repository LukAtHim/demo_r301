
//ex1
console.log("\nex1:")
let celsius = 20
let farenheit = celsius * (9/5) + 32
console.log("celsius: " + celsius)
console.log("farenheit: " + farenheit)

//ex2
console.log("\nex2:")
let long = 5
let larg = 9
let aire = long * larg
console.log("rectangle(" + long + "x" + larg + "):"+ aire)

//ex3
console.log("\nex3:")
let prenom = "Luke"
let nom = "BATES"
console.log(prenom + " " + nom)

//ex4
console.log("\nex4:")
let montantHT = 30
const tva = 1.2
montantTTC = montantHT * tva
console.log(montantHT)
console.log(tva)
console.log(montantTTC)


//ex5
console.log("\nex5:")
if(((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)){
    console.log("true")
} else {
    console.log("false")
}

//ex6
console.log("\nex6:")
let poids = 60
let taille = 1.70
let imc = poids / (taille * taille)
console.log(imc.toFixed(2))


//ex7
console.log("\nex7:")
const montantMin = 50
let montantTotal = 100
if(montantTotal > montantMin){
    console.log("Frais de livraison : "+ (montantMin+montantTotal) + "euros")
}

//ex8
console.log("\nex8:")
let nbBinaire = "C"
console.log(parseInt(nbBinaire,2))