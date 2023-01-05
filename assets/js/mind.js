console.log('✨')

// Créer variables pour chaque couleur de pions

let emptyPionGame = document.querySelectorAll('.game')
let emptyPionDecodeur = document.querySelectorAll('.decodeur')
let pion = document.querySelectorAll('pion')


let bleu = document.querySelectorAll('.bleu')
let rouge = document.querySelectorAll('.rouge')
let vert = document.querySelectorAll('.vert')
let violet = document.querySelectorAll('.violet')
let jaune = document.querySelectorAll('.jaune')
let rose = document.querySelectorAll('.rose')

let trouve = document.querySelectorAll('.trouve')
let almost = document.querySelectorAll('.almost')


// Transformer Nodelist en tableau

let allPionsArray = [...emptyPionGame]
// Diviser les pions par rangées

function splitRange(){
	
	console.log(allPionsArray)
	for (let i = 0; i < 4; i++) {
	  	let row = allPionsArray.slice(0,4)
		console.log(row)
	}
}

splitRange();


// Créer fonctions pour placer les pions aux emplacements en drag and drop



// Créer fonction vérif des couleurs



// Créer un random pour le choix des couleurs de l'IA

function randomColor(){

}