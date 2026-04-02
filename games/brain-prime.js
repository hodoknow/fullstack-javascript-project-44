const isPrime = (num) => {
  let i = 2
  while (i < num / 2) {
    if (num % i === 0) {
      return false
    }
    i++
  }
  return true
}

const correctAnswer = (num) => {
  return isPrime(num) ? 'yes' : 'no'
}

export const initGame = () => {
  return {
    problemStatement: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    problem: '',
    correctAnswer: '',
    initRound() {
      const num = 1 + Math.floor(Math.random() * 1001)
      this.problem = `${num} (${correctAnswer(num)})`
      this.correctAnswer = correctAnswer(num)
    },
  }
}
