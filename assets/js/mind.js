console.log('✨')

// Créer variables pour chaque couleur de pions

let emptyPionGame = document.querySelectorAll('.game')
let emptyPionDecodeur = document.querySelectorAll('.decodeur')




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

// Bouton validation des couleurs pour créer le tableau

let validationBtn = document.querySelector('.validation')

validationBtn.addEventListener('click', addColorArray)

// Ajouter les couleurs de value dans un tableau avec .push => permettra de récupérer la valeur [i] à comparer

let pion = document.querySelectorAll('pion')
let colorDataValues = []

let count = 0

function addColorArray(){

	rowG[count].forEach(item => {

		const dataValue = item.children[0].getAttribute('data-value')
		colorDataValues.push(dataValue)
	})

	checkColor()
}


// Vérifier les couleurs

function checkColor(){

	let verifLigne = rowG

	//Boucle pour tester CHAQUE pion
	for(let i=0;i<4;i++){
		const colorTested = colorDataValues[i]

		if(!couleurIA.includes(colorTested)){

			console.log(colorTested,' : Pas trouvé')

		} else {
			//Verifier si couleur est OK dans le tableau

			let positionIA = couleurIA.indexOf(colorTested)
			let positionUser = colorDataValues.indexOf(colorTested)

			console.log('IA couleur :', positionIA,'IA User :',positionUser)
		}

	}
	
}

//Créer pions décodeur
let createPion = document.createElement('pion')

function addCouleurOk(){
	
	rowD[count].forEach(item => {
		createPion.appendChild(rowD)
		console.log(rowD)
		// createPion.setAttribute('data-value', 'almost')
		// createPion.classList.add('almost')
	}

}

addCouleurOk()

// function addTotalOk(){
	
// 	createPion.classList.add('trouve')

// 	createPion.appendChild(emptyPionDecodeur)
// }

// console.log(addTotalOk())