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

function splitRangeGame(){

	for (let i = 0; i < 10; i++) {
	  	let startRang = i*4
	  	let endRange = (i+1)*4
	  	let rowG = allPionsGameArray.slice(startRang,endRange)
	  	let rowD = allPionsDecodeurArray.slice(startRang,endRange)

			console.log(rowG,rowD)
		}
}

splitRangeGame();

// Créer fonctions pour placer les pions aux emplacements en drag and drop


  // function dragstart_handler(ev) {
  //   // Add the target element's id to the data transfer object
  //   ev.dataTransfer.setData("text/plain", ev.target.id);
  // }

  // window.addEventListener("DOMContentLoaded", () => {
  //   // Get the element by id
  //   // Add the ondragstart event listener
  //   pion.addEventListener("dragstart", dragstart_handler);
  // });


// Créer un random pour le choix des couleurs de l'IA

let couleurDispo = ['rouge','vert','bleu','jaune','violet','rose']
let couleurIA = []

function randomColor(){
	for(let i=0;i<4;i++){
		let randomCol = couleurDispo[Math.floor(Math.random()* 6)]
		couleurIA.push(randomCol)
	}
	console.log(couleurIA)
}
randomColor();

document.querySelector('.randomcolor').textContent = couleurIA

// Créer fonction vérif des couleurs

function checkColor(){
	let colorIA = []
	
}

