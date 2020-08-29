const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;


const postQuestions = (questions) => {
  questions.forEach(function(a_question){
      appendQuestion(a_question)
  })
}


const appendQuestion = (aQuestion) => {
  const questionIn = aQuestion.questionText
  document.querySelector('.question-container').innerHTML = questionIn
}

const askQuestionThen = (time) => {
  questions.forEach(function(a_question){
    question = a_question
  })
  return new Promise(() =>{
    })
}

const removeQuestion = () => {
  document.querySelector('.question-container').innerText = ''
}

const askQuestionThenRemoveQuestion = (time) => {
  question = questions[0]
  appendQuestion(question)
  return new Promise(() =>{
    setTimeout(function(){
      removeQuestion()
    }, time)
  })
}

const trueAndFalseButtons = () => {
  return document.querySelectorAll('div.btn')
}

const toggleTrueAndFalseButtons = () => {
  document.querySelector('div.btn.red').classList.toggle("hide")
  document.querySelector('div.btn.green').classList.toggle("hide")
}

const displayQuestionOnClick = () =>{
  document.querySelector('.waves-effect').addEventListener('click', appendQuestion(question))
  toggleTrueAndFalseButtons()
}

