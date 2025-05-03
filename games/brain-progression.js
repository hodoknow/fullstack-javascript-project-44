const random = (limit) => Math.floor(Math.random() * limit);

const makeProgression = () => {
	const start = 1 + random(10);
	const step = 1 + random(5);
	const amount = 5 + random(10);

	const result = [];
	let i = 0;
	while( i < amount ){
		result.push( start + step * i );
		i++;
	}
	return result;
};

export const initGame = () => {
	return {
		problemStatement: 'What number is missing in the progression?',
		problem: '',
		correctAnswer: '',
		initRound() {
			const progression = makeProgression();
			const gapIndex = random(progression.length);
			this.correctAnswer = progression[gapIndex].toString();
			progression[gapIndex] = '..';
			this.problem = progression.join(' ');
		},
	};
};
