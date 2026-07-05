/* ===================================
   FORESTRY GYAN QUIZ ENGINE v2.0
=================================== */

// Shuffle Questions
shuffle(quiz);

/* ==========================
   GLOBAL VARIABLES
========================== */

let current = 0;
let score = 0;

let correct = 0;
let wrong = 0;
let skipped = 0;

let answered = false;

let seconds = 0;
let timer = null;

let currentOptions = [];

let answeredQuestions = new Array(quiz.length).fill(false);

let paletteStatus = new Array(quiz.length).fill("pending");

/* ==========================
   START QUIZ
========================== */

window.onload = function(){

    createPalette();

    startTimer();

    loadQuestion();

};

/* ==========================
   TIMER
========================== */

function startTimer(){

    timer = setInterval(function(){

        seconds++;

        let min = Math.floor(seconds/60);

        let sec = seconds%60;

        document.getElementById("timer").textContent =
        String(min).padStart(2,"0") + ":" +
        String(sec).padStart(2,"0");

    },1000);

}

/* ==========================
   SHUFFLE
========================== */

function shuffle(arr){

    for(let i=arr.length-1;i>0;i--){

        let j=Math.floor(Math.random()*(i+1));

        [arr[i],arr[j]]=[arr[j],arr[i]];

    }

}

/* ==========================
   CREATE QUESTION PALETTE
========================== */

function createPalette(){

    let grid=document.getElementById("paletteGrid");

    if(!grid) return;

    grid.innerHTML="";

    for(let i=0;i<quiz.length;i++){

        let btn=document.createElement("div");

        btn.className="palette-btn palette-pending";

        btn.innerHTML=i+1;

        btn.onclick=function(){

            current=i;

            loadQuestion();

        };

        grid.appendChild(btn);

    }

}

/* ==========================
   UPDATE PALETTE
========================== */

function updatePalette(){

    let btns=document.querySelectorAll(".palette-btn");

    btns.forEach((btn,index)=>{

        btn.className="palette-btn";

        btn.classList.add("palette-"+paletteStatus[index]);

        if(index===current){

            btn.classList.add("palette-current");

        }

    });

}

/* ==========================
   UPDATE PROGRESS
========================== */

function updateProgress(){

    let percent=((current+1)/quiz.length)*100;

    document.getElementById("progress").style.width=
    percent+"%";

    let q=document.getElementById("questionNo");

    if(q){

        q.innerHTML=(current+1)+" / "+quiz.length;

    }

    document.getElementById("correctCount").innerHTML=correct;

    document.getElementById("wrongCount").innerHTML=wrong;

    document.getElementById("skipCount").innerHTML=skipped;

    document.getElementById("score").innerHTML=
    "Score : "+score;

    updatePalette();

}
/* ==========================
   LOAD QUESTION
========================== */

function loadQuestion(){

    answered = answeredQuestions[current];

    let q = quiz[current];

    let html = `<p>${q.q}</p>`;

    if(q.table && q.table.length){

        html += `<div class="q-table">`;

        q.table.forEach(item=>{

            html += `<div class="q-row">${item}</div>`;

        });

        html += `</div>`;

    }

    if(q.end){

        html += `<p class="q-end">${q.end}</p>`;

    }

    document.getElementById("question").innerHTML = html;

    updateProgress();

    let optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    currentOptions = q.options.map((text,index)=>({

        text,

        index

    }));

    shuffle(currentOptions);

    currentOptions.forEach(opt=>{

        let btn=document.createElement("div");

        btn.className="option";

        btn.dataset.index=opt.index;

        btn.innerHTML=opt.text;

        if(answeredQuestions[current]){

            btn.style.pointerEvents="none";

        }

        btn.onclick=function(){

            checkAnswer(btn,opt.index);

        };

        optionsDiv.appendChild(btn);

    });

}

/* ==========================
   CHECK ANSWER
========================== */

function checkAnswer(element,index){

    if(answeredQuestions[current]) return;

    answeredQuestions[current]=true;

    let correctAnswer=quiz[current].answer;

    let options=document.querySelectorAll(".option");

    options.forEach(opt=>{

        opt.style.pointerEvents="none";

        if(Number(opt.dataset.index)===correctAnswer){

            opt.classList.add("correct");

        }

    });

    if(index===correctAnswer){

        score++;

        correct++;

        paletteStatus[current]="correct";

    }

    else{

        wrong++;

        paletteStatus[current]="wrong";

        element.classList.add("wrong");

    }

    updateProgress();

}

/* ==========================
   NEXT
========================== */

function nextQuestion(){

    if(current<quiz.length-1){

        current++;

        loadQuestion();

    }

    else{

        endQuiz();

    }

}

/* ==========================
   PREVIOUS
========================== */

function prevQuestion(){

    if(current>0){

        current--;

        loadQuestion();

    }

}

/* ==========================
   SKIP
========================== */

function skipQuestion(){

    if(!answeredQuestions[current]){

        skipped++;

        paletteStatus[current]="skipped";

    }

    if(current<quiz.length-1){

        current++;

        loadQuestion();

    }

    else{

        endQuiz();

    }

}
/* ===================================
   PART 3B
   RESULT SCREEN + RESTART
===================================*/

function endQuiz(){

    clearInterval(timer);

    let attempted = correct + wrong;

    let accuracy = attempted === 0
        ? 0
        : ((correct / attempted) * 100).toFixed(1);

    let minutes = Math.floor(seconds/60);
    let sec = seconds % 60;

    let remark = "";
    let emoji = "🌱";

    if(accuracy >= 90){
        emoji = "🏆";
        remark = "Outstanding!";
    }
    else if(accuracy >= 75){
        emoji = "🥇";
        remark = "Excellent!";
    }
    else if(accuracy >= 60){
        emoji = "🥈";
        remark = "Good Job!";
    }
    else if(accuracy >= 40){
        emoji = "🥉";
        remark = "Keep Practicing!";
    }
    else{
        emoji = "📚";
        remark = "Needs Improvement";
    }

    document.querySelector(".quiz-card").innerHTML = `

<div class="result-screen">

<div class="trophy">${emoji}</div>

<h1>${remark}</h1>

<p>Forestry Gyan Mock Test Completed</p>

<div class="result-grid">

<div class="result-card">
<h2>${score}</h2>
<span>Score</span>
</div>

<div class="result-card">
<h2>${correct}</h2>
<span>Correct</span>
</div>

<div class="result-card">
<h2>${wrong}</h2>
<span>Wrong</span>
</div>

<div class="result-card">
<h2>${skipped}</h2>
<span>Skipped</span>
</div>

<div class="result-card">
<h2>${accuracy}%</h2>
<span>Accuracy</span>
</div>

<div class="result-card">
<h2>${minutes}:${String(sec).padStart(2,'0')}</h2>
<span>Time Taken</span>
</div>

</div>

<button class="restart-btn" onclick="restartQuiz()">
🔄 Restart Quiz
</button>

</div>

`;

}

/*============================
RESTART
============================*/

function restartQuiz(){

    location.reload();

}
/* ===================================
   PART 3C
   REVIEW • KEYBOARD • SAVE
===================================*/

/* ==========================
   AUTO SAVE
========================== */

function saveProgress(){

    const data={

        current,

        score,

        correct,

        wrong,

        skipped,

        seconds,

        answeredQuestions,

        paletteStatus

    };

    localStorage.setItem("fg_quiz",JSON.stringify(data));

}

/* ==========================
   LOAD SAVE
========================== */

function loadProgress(){

    let data=localStorage.getItem("fg_quiz");

    if(!data) return;

    data=JSON.parse(data);

    current=data.current||0;

    score=data.score||0;

    correct=data.correct||0;

    wrong=data.wrong||0;

    skipped=data.skipped||0;

    seconds=data.seconds||0;

    answeredQuestions=data.answeredQuestions||answeredQuestions;

    paletteStatus=data.paletteStatus||paletteStatus;

}

/* ==========================
   SAVE AFTER EVERY ACTION
========================== */

const oldUpdate=updateProgress;

updateProgress=function(){

    oldUpdate();

    saveProgress();

}

/* ==========================
   KEYBOARD SHORTCUTS
========================== */

document.addEventListener("keydown",function(e){

    if(e.key==="ArrowRight"){

        nextQuestion();

    }

    if(e.key==="ArrowLeft"){

        prevQuestion();

    }

    if(e.key==="s"||e.key==="S"){

        skipQuestion();

    }

});

/* ==========================
   REVIEW MODE
========================== */

function reviewWrong(){

    let wrongQuestions=[];

    paletteStatus.forEach((x,index)=>{

        if(x==="wrong"){

            wrongQuestions.push(index+1);

        }

    });

    if(wrongQuestions.length===0){

        alert("🎉 No wrong questions!");

        return;

    }

    alert(

"Wrong Questions:\n\n"+

wrongQuestions.join(", ")

);

}

/* ==========================
   RESULT BUTTON
========================== */

const oldEnd=endQuiz;

endQuiz=function(){

    localStorage.removeItem("fg_quiz");

    oldEnd();

    setTimeout(function(){

        let btn=document.createElement("button");

        btn.className="restart-btn";

        btn.style.marginTop="20px";

        btn.innerHTML="📋 Review Wrong Questions";

        btn.onclick=reviewWrong;

        document.querySelector(".result-screen")

        .appendChild(btn);

    },200);

}

/* ==========================
   CONFETTI
========================== */

function celebrate(){

    for(let i=0;i<100;i++){

        let c=document.createElement("div");

        c.style.position="fixed";

        c.style.width="8px";

        c.style.height="8px";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-10px";

        c.style.background=

        ["#22c55e","#4ade80","#84cc16","#facc15","#ffffff"]

        [Math.floor(Math.random()*5)];

        c.style.borderRadius="50%";

        c.style.zIndex=9999;

        c.style.transition="4s linear";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.transform=

            "translateY(120vh) rotate(720deg)";

            c.style.opacity=0;

        },50);

        setTimeout(()=>{

            c.remove();

        },4000);

    }

}

/* ==========================
   IMPROVED RESULT
========================== */

const resultOld=endQuiz;

endQuiz=function(){

    resultOld();

    celebrate();

}

/* ==========================
   RESUME QUIZ
========================== */

loadProgress();

updateProgress();
