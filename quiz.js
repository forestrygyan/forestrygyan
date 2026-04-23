const quiz = [

/* ===== 2025 ===== */
{
q: "With reference to the planet Earth, consider the following statements:",
table: [
"I. Rain forests produce more oxygen than that produced by oceans.",
"II. Marine phytoplankton and photosynthetic bacteria produce about 50% of world’s oxygen.",
"III. Well-oxygenated surface water contains several folds higher oxygen than that in atmospheric air."
],
end: "Which of the statements given above is/are correct?",
options: ["I and II","II only","I and III","None of the above"],
answer: 1
},

{
q: "Regarding Peacock tarantula (Gooty tarantula), consider the following statements:",
table: [
"I. It is an omnivorous crustacean.",
"II. Its natural habitat in India is only limited to some forest areas.",
"III. In its natural habitat, it is an arboreal species."
],
end: "Which of the statements given above is/are correct?",
options: ["I only","I and III","II only","II and III"],
answer: 3
},

{
q: "Consider the following pairs:",
table: [
"I. Cassava : Woody shrub",
"II. Ginger : Herb with pseudostem",
"III. Malabar spinach : Herbaceous climber",
"IV. Mint : Annual shrub",
"V. Papaya : Woody shrub"
],
end: "How many pairs are correctly matched?",
options: ["Only two","Only three","Only four","All five"],
answer: 2
},

{
q: "Consider the following fruits:",
table: [
"I. Papaya",
"II. Pineapple",
"III. Guava"
],
end: "How many were introduced by Portuguese?",
options: ["Only one","Only two","All three","None"],
answer: 1
},

/* ===== 2024 ===== */
{
q: "Consider the following:",
table: [
"1. Carabid beetles",
"2. Centipedes",
"3. Flies",
"4. Termites",
"5. Wasps"
],
end: "Parasitoid species found in how many?",
options: ["Only two","Only three","Only four","All five"],
answer: 3
},

{
q: "Consider the following plants:",
table: [
"1. Groundnut",
"2. Horse-gram",
"3. Soybean"
],
end: "Belong to pea family?",
options: ["Only one","Only two","All three","None"],
answer: 2
},

{
q: "Cicada, Froghopper, Pond skater are:",
table: [],
end: "",
options: ["Birds","Fish","Insects","Reptiles"],
answer: 2
},

{
q: "Consider the following pairs:",
table: [
"1. Brazil – Indri",
"2. Indonesia – Elk",
"3. Madagascar – Bonobo"
],
end: "Correctly matched?",
options: ["Only one","Only two","All three","None"],
answer: 3
},

{
q: "Big cat statements:",
table: [
"1. Lions have no fixed breeding season",
"2. Cheetahs do not roar",
"3. Leopards do not scent mark"
],
end: "Correct statements?",
options: ["1 and 2","2 and 3","1 and 3","All"],
answer: 0
},

{
q: "Unique pollination relationship:",
table: [],
end: "",
options: ["Fig","Mahua","Sandalwood","Silk cotton"],
answer: 0
},

{
q: "Poisonous species found in:",
table: [
"1. Butterflies",
"2. Fish",
"3. Frogs"
],
end: "",
options: ["Only one","Only two","All three","None"],
answer: 2
},

{
q: "Consider the following statements:",
table: [
"Statement I: Indian Flying Fox is vermin",
"Statement II: It feeds on blood"
],
end: "Correct statement?",
options: [
"Both correct & II explains I",
"Both correct but no explanation",
"I correct, II incorrect",
"I incorrect, II correct"
],
answer: 3
},

{
q: "Consider the following:",
table: [
"1. Cashew",
"2. Papaya",
"3. Red sanders"
],
end: "Native to India?",
options: ["Only one","Only two","All three","None"],
answer: 0
}

];

/* ===== SHUFFLE ===== */
function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}
shuffle(quiz);

let current=0, score=0, answered=false;

/* ===== LOAD ===== */
function loadQuestion(){
    answered=false;
    let q=quiz[current];

    let html=`<p>${q.q}</p>`;

    if(q.table.length){
        html+=`<div class="q-table">`;
        q.table.forEach(item=>{
            html+=`<div class="q-row">${item}</div>`;
        });
        html+=`</div>`;
    }

    if(q.end){
        html+=`<p class="q-end">${q.end}</p>`;
    }

    document.getElementById("question").innerHTML=html;

    document.getElementById("progress").style.width=
    ((current/quiz.length)*100)+"%";

    let optionsDiv=document.getElementById("options");
    optionsDiv.innerHTML="";

    let opts=q.options.map((t,i)=>({text:t,index:i}));
    shuffle(opts);

    opts.forEach(opt=>{
        let btn=document.createElement("div");
        btn.innerHTML=opt.text;
        btn.classList.add("option");
        btn.onclick=()=>checkAnswer(btn,opt.index);
        optionsDiv.appendChild(btn);
    });
}

/* ===== CHECK ===== */
function checkAnswer(el,index){
    if(answered) return;
    answered=true;

    let correct=quiz[current].answer;
    let opts=document.querySelectorAll(".option");

    opts.forEach(o=>{
        if(o.textContent===quiz[current].options[correct]){
            o.classList.add("correct");
        }
    });

    if(index!==correct){
        el.classList.add("wrong");
    } else {
        score++;
    }

    document.getElementById("score").textContent=
    `Score: ${score}/${current+1}`;
}

/* ===== NEXT ===== */
function nextQuestion(){
    if(!answered) return alert("Answer first!");

    current++;

    if(current>=quiz.length){
        endQuiz();
        return;
    }

    loadQuestion();
}

/* ===== SKIP ===== */
function skipQuestion(){
    current++;

    if(current>=quiz.length){
        endQuiz();
        return;
    }

    loadQuestion();
}

/* ===== END ===== */
function endQuiz(){
    document.querySelector(".quiz-container").innerHTML=
    `<h2>🎉 Quiz Completed!</h2>
     <p>Your Score: ${score}/${quiz.length}</p>
     <button onclick="location.reload()">Restart</button>`;
}

loadQuestion();