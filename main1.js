
const questionBtnEl = document.getElementById("questionBtn");
const answerBtnBtnEl = document.getElementById("answerBtn");

const quesBank = [
    ["What is the supreme law of the land in the United States?", "The Constitution"],
    ["How many branches of government are there in the United States?", "Three (Executive, Legislative, Judicial)"],
    ["Who is known as the 'Father of the Constitution'?", "James Madison"],
    ["What is the minimum voting age in the United States?", "18 years old"],
    ["How many amendments are there in the United States Constitution?", "27 amendments"],
];

function showQuestion(){
    const questionTextEl = document.getElementById("questionText");
    const answerTextEl = document.getElementById("answerText");

    const bankLength = quesBank.length;

    let randomQAnum = Math.floor(Math.random() * bankLength);
    
    let randomQandA = quesBank[randomQAnum];

    let currentQues = randomQandA[0];

    globalThis.currentAns = randomQandA[1];

    questionTextEl.innerText = currentQues;

    answerTextEl.innerText = "";

    // questionBtnEl.style.display = none;

    // answerBtnBtnEl.style.display = block;
    // console.log(currentQues);
    // console.log(currentAns);
}

function showAnswer(){
    const answerTextEl = document.getElementById("answerText");
    answerTextEl.innerText = currentAns;
}




