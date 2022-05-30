const currentQuiz = [
    {
        question: "question #1",
        answerChoices: [
            "a. first answer choice",
            "b. second answer choice",
            "c. third answer choice",
            "d. fourth answer choice",
        ],
    },
    {
        question: "question #2",
        answerChoices: [
            "a. first answer choice",
            "b. second answer choice",
            "c. third answer choice",
            "d. fourth answer choice",
        ],
    },
    {
        question: "question #3",
        answerChoices: [
            "a. first answer choice",
            "b. second answer choice",
            "c. third answer choice",
            "d. fourth answer choice",
        ],
    },
    {
        question: "question #4",
        answerChoices: [
            "a. first answer choice",
            "b. second answer choice",
            "c. third answer choice",
            "d. fourth answer choice",
        ],
    },
    {
        question: "question #5",
        answerChoices: [
            "a. first answer choice",
            "b. second answer choice",
            "c. third answer choice",
            "d. fourth answer choice",
        ],
    },
]

const quizScores = [
    {
      a: 2,
      b: 5,
      c: 1,
      d: 0,
    },
    {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    },
    {
      a: 5,
      b: 4,
      c: 3,
      d: 2,
    },
    {
      a: 1,
      b: 3,
      c: 2,
      d: 0,
    },
    {
      a: 4,
      b: 5,
      c: 1,
      d: 0,
    },
]

class GiftGiver {
    static quiz() { 
        return currentQuiz;
    }

    static quizResults(answerChoices) { 
        const total = answerChoices.reduce((prev, answer, i) => {
            const scoreLookup = quizScores[i]
        
            if (!scoreLookup[answer] && scoreLookup[answer] !== 0) {
                throw new BadRequestError("You listed an answer choice that was not available. Please try again.")
            }
        
            return prev + scoreLookup[answer]
        }, 0)
        
        if (total < 4) return "personal care"
        if (total >= 4 && total < 8) return "clothing"
        if (total >= 8 && total < 12) return "accessories"
        if (total >= 12 && total < 16) return "home products"
        if (total >= 16 && total < 20) return "consumables"
        if (total >= 20) return "technology"
    }
}

module.exports = GiftGiver