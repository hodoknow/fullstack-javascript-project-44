#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getName } from "../src/cli.js";
import { getRandom, isEven } from "../src/brain-even.js";

console.log("Welcome to the Brain Games!");

const name = getName();
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for( let i = 0; i < 3; i++ ){
	const num = getRandom();
	console.log(`Question: ${num}`);
	const answer = readlineSync.question("Your answer: ");
	const correctAnswer = isEven(num); 
	if( answer === correctAnswer ){
		console.log('Correct!');
	} else {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
		console.log(`Let's try again, ${name}!`);
		process.exit();
	}
}
console.log(`Congratulations, ${name}!`);
