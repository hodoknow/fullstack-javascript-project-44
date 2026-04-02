const random = limit => Math.floor(Math.random() * limit)

const gcd = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)

  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

export const initGame = () => {
  return {
    problemStatement: 'Find the greatest common divisor of given numbers.',
    problem: '',
    correctAnswer: '',
    initRound() {
      const left = random(100)
      const right = random(100)
      this.problem = `${left} ${right}`
      this.correctAnswer = gcd(left, right).toString()
    },
  }
}
