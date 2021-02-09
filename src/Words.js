const AnswerSet = [
    'Workforce',
    'Management',
    'LaborChart',
    'Javascript',
    'Typescript',
    'Programming',
    'Software',
    'Engineering',
]

function getRandomAnswer() {
    return AnswerSet[Math.floor(Math.random() * AnswerSet.length)];
}

export default getRandomAnswer;