console.log('✨')

// Créer variables pour chaque couleur de pions

let emptyPionGame = document.querySelectorAll('.game')
let emptyPionDecodeur = document.querySelectorAll('.decodeur')
let pion = document.querySelectorAll('pion')


let couleur = ['rouge','vert','bleu','jaune','violet','rose']
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


  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    // Add the ondragstart event listener
    pion.addEventListener("dragstart", dragstart_handler);
  });


// Créer fonction vérif des couleurs

// function checkColor(){

// }


// Créer un random pour le choix des couleurs de l'IA

function randomColor(){
	for(let i=0;i<=5;i++){
		console.log(couleur[Math.floor(Math.random()* 6)])
	}
}
randomColor();