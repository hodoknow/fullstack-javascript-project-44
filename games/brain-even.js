export const initGame = () => {
  return {
    problemStatement: 'Answer "yes" if the number is even, otherwise answer "no".',
    problem: '',
    correctAnswer: '',
    initRound() {
      this.problem = Math.floor(Math.random() * 1001)
      this.correctAnswer = this.problem % 2 === 0 ? 'yes' : 'no'
    },
  }
}
