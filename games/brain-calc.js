
const operands = ['+', '-', '*'];

const random = (limit) => Math.floor(Math.random() * limit);

export const initGame = () => {
	return {
		problemStatement: 'What is the result of the expression?',
		problem: '',
		correctAnswer: '',
		initRound() {
			const left = random(20);
			const right = random(10);
			const opIndex = random(3);
			this.problem = `${left} ${operands[opIndex]} ${right}`;
			let result = 0;
			switch (opIndex) {
				case 0:
					result = left + right;
					break;
				case 1:
					result = left - right;
					break;
				case 2:
					result = left * right;
					break;
			}
			this.correctAnswer = result.toString();
		},
	};
};
