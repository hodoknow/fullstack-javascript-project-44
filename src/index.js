import readlineSync from "readline-sync";

export const processGame = (game, name) => {
	console.log(game.problemStatement);
	for( let i = 0; i < 3; i++ ){
		game.initRound();
		console.log(`Question: ${game.problem}`);
		const answer = readlineSync.question("Your answer: ");
		if( answer === game.correctAnswer ){
			console.log('Correct!');
		} else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game.correctAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			process.exit();
		}
	}
	console.log(`Congratulations, ${name}!`);
};
