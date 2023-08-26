// Java script code to add questions and options,verify the option choosen by user.
//thus calculating the score.
//option d will be undefined,because <input> for b is specified in html but in java script we didn't specified the option.

const quizData=[
    {
        question:"what is full form of http ?",
        a:"Hyper Text Transfer Protocol",
        b:"Hyper Textual Transfer Protocol",
        c:"Hyper Text Transformer Pin",
        correct:'a',
    },
    {
        question:"what is the best sorting algorithm ?",
        a:"insertion sort",
        b:"Merge sort",
        c:"bubble sort",
        correct:'b',
    },
    {
        question:"which of the following is true about java",
        a:"compiled",
        b:"interpreted",
        c:"both",
        correct:'c',
    },
    {
        question:"What is the full form of css ?",
        a:"Cascading Simple Sheets",
        b:"Cascading Style Sheets",
        c:"Casual Styling Sheets",
        correct:'b',
    },

];
const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');
const questionEls=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let curQuiz=0;
let score=0;

loadQuiz()
function loadQuiz(){
    deSelectAnswers()
    const curQuizData=quizData[curQuiz]

    questionEls.innerText=curQuizData.question
    a_text.innerText=curQuizData.a
    b_text.innerText=curQuizData.b
    c_text.innerText=curQuizData.c
    d_text.innerText=curQuizData.d
}

function deSelectAnswers(){

    answerEls.forEach(answerEl=>answerEl.checked=false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click',()=>{
    const answer=getSelected();
    if(answer){
        if(answer===quizData[curQuiz].correct){
            score++;
        }
        curQuiz++;
    
    if(curQuiz<quizData.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML=`
        <h2>You answerd ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `
    }
}
})
