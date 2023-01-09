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

let allPionsGameArray = [...emptyPionGame]
let allPionsDecodeurArray = [...emptyPionDecodeur]
// Divise les pions par rangées

let rowG =[]
let rowD = []

function splitRangeGame(){

	for (let i = 0; i < 10; i++) {
	  	let startRang = i*4
	  	let endRange = (i+1)*4
	  	rowG.push(allPionsGameArray.slice(startRang,endRange))
	  	rowD.push(allPionsDecodeurArray.slice(startRang,endRange))
	}
}


splitRangeGame();

// Créer fonctions pour placer les pions aux emplacements en drag and drop


// Créer un random pour le choix des couleurs de l'IA

let couleurDispo = ['rouge','vert','bleu','jaune','violet','rose']
let couleurIA = []


function randomColor(){
	for(let i=0;i<4;i++){
		let randomCol = couleurDispo[Math.floor(Math.random()* 6)]
		couleurIA.push(randomCol)
	}
	document.querySelector('.randomcolor').textContent = couleurIA.join(" ")

}

randomColor();

// Ajouter les couleurs de value dans un tableau avec .push => permettra de récupérer la valeur [i] à comparer



// Vérifier les couleurs

let fakeGame = ['can','bleu','violet','rose']

function checkColor(){

	let verifLigne = rowG

	console.log(rowG)
	for(let i=0;i<4;i++){
		const colorTested = fakeGame[i]
		if(!couleurIA.includes(colorTested)){
			console.log(colorTested,'Pas trouvé')
		} else {
			console.log(colorTested,'Oui')
		}
	}
	

}

checkColor()
