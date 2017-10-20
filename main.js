var fs = require ("fs");
var Letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer")


console.log("Welcome to Hangman by Node !!! (The Auto-Maker Version)");
console.log("--------------------------------------------------------"+"\n");


var wordArray = ["Tesla", "Mercedes", "Lexus", "Toyota", "Ferrari", "Chrysler", "Maybach", "Volkswagen"]


start();


function start(){ 

var tesla = ["t", "e", "s", "l", "a"];
var displayedWord = ["t", "e", "_", "_", "_"];
var initialWord = ["t", "e"]
console.log(displayedWord);


inquirer.prompt([
	{
		type:"input",
		name:"guessedLetters1",
		message:"Choose a letter",

	},{
		type:"input",
		name:"guessedLetters2",
		message:"Choose another letter",
	},{
		type:"input",
		name:"guessedLetters3",
		message:"Choose Another One"
	}
	]).then(function game (answer){
		
		initialWord.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3);

		// var finalWord = initialWord.concat(guessedLetters);

		if (JSON.stringify(initialWord) == JSON.stringify(tesla)){
			console.log("The Word is " + wordArray[0] + ", Good Job");
		} else {
			console.log("You Guessed Wrong" + "\n");
		}

		secondWord();
	
	})

}


function secondWord (){

console.log("\n")
console.log("**************NEXT WORD******************");
console.log("-----------------------------------------" + "\n")

var toyota = ["t", "o", "y", "o", "t", "a"];
var displayedWord = ["t", "o", "y", "_", "_", "_"];
var initialWord = ["t", "o", "y"];
console.log(displayedWord);


inquirer.prompt([
	{
		type:"input",
		name:"guessedLetters1",
		message:"Choose a letter",

	},{
		type:"input",
		name:"guessedLetters2",
		message:"Choose another letter",
	},{
		type:"input",
		name:"guessedLetters3",
		message:"Choose Another One",
	}
	]).then(function game (answer){
		
		initialWord.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3);

		// var finalWord = initialWord.concat(guessedLetters);

		if (JSON.stringify(initialWord) == JSON.stringify(toyota)){
			console.log("\n" + "The Word is " + wordArray[3] + ", Good Job");
		} else {
			console.log("\n" + "You Guessed Wrong" + "\n");
		}

		thirdWord();
	
	})

}



function thirdWord (){

console.log("\n")
console.log("**************NEXT WORD******************");
console.log("-----------------------------------------" + "\n")

var mercedes = ["m", "e", "r", "c", "e", "d", "e", "s"];
var displayedWord = ["m", "e", "r", "c", "_", "_", "_", "_"];
var initialWord = ["m", "e", "r", "c"];
console.log(displayedWord);


inquirer.prompt([
	{
		type:"input",
		name:"guessedLetters1",
		message:"Choose a letter",

	},{
		type:"input",
		name:"guessedLetters2",
		message:"Choose another letter",
	},{
		type:"input",
		name:"guessedLetters3",
		message:"Choose Another One",
	},{
		type:"input",
		name:"guessedLetters4",
		message:"And The Last Guess"
	}
	]).then(function game (answer){
		
		initialWord.push(answer.guessedLetters1,answer.guessedLetters2,answer.guessedLetters3,answer.guessedLetters4);

		// var finalWord = initialWord.concat(guessedLetters);

		if (JSON.stringify(initialWord) == JSON.stringify(mercedes)){
			console.log("\n" + "The Word is " + wordArray[1] + ", Good Job");
		} else {
			console.log("\n" + "You Guessed Wrong" + "\n");
		}
	
	})

}

