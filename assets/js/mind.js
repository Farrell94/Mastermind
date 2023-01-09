console.log('✨')

// Selecteurs de slots

let emptyPionGame = document.querySelectorAll('.game')
let emptyPionDecodeur = document.querySelectorAll('.decodeur')
let selectRang = document.querySelectorAll('.rang')


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

			if (positionIA == positionUser){
				addTotalOk()
			}

			console.log('IA couleur :', positionIA,'IA User :',positionUser)
		}

	}
	
}

//Créer pions décodeur



function addCouleurOk(){
	
	createPion.classList.add('almost')
	createPion.setAttribute('data-value', 'almost')
	
	for(let i=0;i<4;i++){
		document.querySelector('.decodeur').appendChild(createPion)
	}
	
}

function addTotalOk(){

	let createPion = document.createElement('pion')	
	
	createPion.classList.add('trouve')
	createPion.setAttribute('data-value', 'trouve')

	document.querySelector('.decodeur').appendChild(createPion)
	
}