var fs = require ("fs");
var Letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer")


console.log("Welcome to Hangman by Node !!! (The Auto-Maker Version)");
console.log("--------------------------------------------------------");



inquirer.prompt([
	{
		type:"input",
		name:"guessedLetters",
		message:"Choose a letter",
	},{
		type:"input",
		name:"guessedLetters",
		message:"Choose another letter",
	},{
		type:"input",
		name:"guessedLetters",
		message:"Choose Another One"
	}
	]).then(function(){
		console.log("good")
	})



if (guessed === 0){
	console.log("That letter isnt in this word");
	this.attempts --;
} else {
	console.log("Nice, Guess another letter")
}