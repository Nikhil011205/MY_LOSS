const questions = [
    {
        question: "What Is Your Use Case?",
        options:["Daily Driver","Server","Enterprise","For Someone"]
    },
    {
        question: " What is Your Current System?",
        options:["PC/Destop","Laptop","SBC","Home Server"]
    },
    {
        question: "Rate Your Computer Knowledge Level",
        options:["Experienced","Amateur","Novice","Noob"]
    },
    {
        question: "Rate Your Knowledge Level Of Linux",
        options:["Experienced","Amateur","Novice","Noob"]
    },
    {
        question: "Tell Us More About Yourself",
        options:["Student","Professional","Tinkerer","Someone else"]
    },
    {
        question: "What was Your Previous Operating System?",
        options:["Linux","Windows","MacOS","Temple OS"]
    },
    {
        question: "Do You Want A Live Boot Option?",
        options:["Yes","Fine Either Ways","Not Sure","No"]
    },
    {
        question: "Do You Want Preinstalled Requisites?",
        options:["Out of Box","Full Control","Partial Downloads","Dont Care"]
    },
    {
        question: "What Is The Age Of Your System",
        options:["New (1-3)","7>","7<=","Potato"]
    },
    {
        question: "What CPU is Your System Using",
        options:["AMD","Intel","SBC","Not Sure"]
    },
    {
        question: " What CPU Architecture?",
        options: ["x86_64 / AMD64", "x32 / AMD32", "ARM64", "Not Sure"]
    },
    {
        question: "What GPU/iGPU is Your System Using?",
        options:["AMD","NVIDIA","Intel","Not Sure"]
    },
    {
        question: "What is Your Systems RAM?",
        options:["1-4 GB","8GB","16<=","Not Sure"]
    },
    {
        question: "How Much Storage Does Your System Have?",
        options:["Flash Memory","250 GB >=","512 GB","1TB<="]
    },
    {
        question: "Is Privacy and Security Important To You",
        options:["Yes","No","Not Sure","Sell My Data"]
    },
    {
        question: "Is Community Support Something You Need?",
        options:["Appreciated","Wiki Pages","Not Sure","Not Needed"]
    },
    {
        question: "Any Graphics Intensive Processes?",
        options:["Yes","No","Not Sure","Excel and Mail"]
    },
    {
        question: "Gaming?",
        options:["AAA Gaming","Moderate","Light","No"]
    },
    {
        question: "Do You Want An App Store?",
        options:["Yes","Terminal Install","Not Sure","No"]
    },
    {
        question: "What is Your Update Preference?",
        options:["Rolling","Static","Stable","Not Sure"]
    }
]


let currentQuestionIndex = 0;
let userAnswers = [];
let chosen = 0;

// let col = "#00ADB5";
// let selcol = "#56DECA";

// let col = "#F2613F";
// let selcol = "#9B3922";

// let col = "#FF204E";
// let selcol = "#A0153E";

// let col = "#59A8B3";
// let selcol = "#317B91";

let col = "#911104";
let selcol = "#560602";

let lose = ["cry-emo","melt-emo","sad-emo","angry-emo"];
let win = ["party-emo","yawn-emo","smirk-emo","flex-emo"];

const distributionNames = ['ubuntu', 'debian', 'arch', 'mint', 'fedora', 'opensuse', 'kde_plasma', 'kali', 'manjaro', 'pop', 'chimera', 'tuxedo', 'parrot', 'elementary', 'endeavour','garuda', 'gentoo', 'qubes', 'cent', 'tails']

winning = document.getElementById("arch_win");
second = document.getElementById("fedora_lose");
winning.classList.add("top-pod");
second.classList.add("top-pod");

const loaderdiv = document.getElementById("loader");

function showLoader(){
    loaderdiv.classList.add("show");
}
function hideLoader(){
    loaderdiv.classList.remove("show");
}

const inter1 = setInterval(openWin,12000)
const inter2 = setInterval(openSec,8000)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function openWin(){
    let popup = document.getElementById("cloud_win");
    let emo = document.getElementById(win[0]);
    popup.classList.add('open_cloud');
    await sleep(200);
    emo.classList.add('appear');
    await sleep(5000);
    emo.classList.remove('appear');
    await sleep(200);
    popup.classList.remove('open_cloud');
    const elementToMove = win.splice(0, 1)[0]; 
    win.splice(3, 0, elementToMove); 

}

async function openSec(){
    let popup = document.getElementById("cloud_sec");
    let emo = document.getElementById(lose[0]);
    popup.classList.add('open_cloud_sec');
    await sleep(200);
    emo.classList.add('appear');
    await sleep(5000);
    emo.classList.remove('appear');
    await sleep(200);
    popup.classList.remove('open_cloud_sec');
    const elementToMove = lose.splice(0, 1)[0]; 
    lose.splice(3, 0, elementToMove); 
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitString(str) {
    const colonIndex = str.indexOf(':');
    const firstPart = str.substring(0, colonIndex);
    const secondPart = str.substring(colonIndex + 1);
    return [firstPart, secondPart];
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function getRandomElementEx(arr, valueToExclude) {
    const filteredArr = arr.filter(element => element !== valueToExclude);
    
    if (filteredArr.length === 0) {
        return undefined; 
    }
    const randomIndex = Math.floor(Math.random() * filteredArr.length);
    
    return filteredArr[randomIndex];
}

function displayQuestion() {
    const ques_cont = document.getElementById("question");
    ques_cont.innerHTML = questions[currentQuestionIndex].question;

    const op_cont1 = document.getElementById("op1");
    op_cont1.innerHTML = (questions[currentQuestionIndex].options)[0];

    const op_cont2 = document.getElementById("op2")
    op_cont2.innerHTML = (questions[currentQuestionIndex].options)[1]

    const op_cont3 = document.getElementById("op3")
    op_cont3.innerHTML = (questions[currentQuestionIndex].options)[2]

    const op_cont4 = document.getElementById("op4")
    op_cont4.innerHTML = (questions[currentQuestionIndex].options)[3]
}

option_1 = document.getElementById("op1");
option_1.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_1.style.backgroundColor = selcol;
    option_1.classList.add("selected");
    chosen+=1
});

option_2 = document.getElementById("op2");
option_2.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_2.style.backgroundColor = selcol;
    option_2.classList.add("selected");
    chosen+=1;
});

option_3 = document.getElementById("op3");
option_3.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_3.style.backgroundColor = selcol;
    option_3.classList.add("selected");
    chosen+=1;
});

option_4 = document.getElementById("op4");
option_4.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_4.style.backgroundColor = selcol;
    option_4.classList.add("selected");
    chosen+=1;
});

function nextQuestion() {
    sel = document.getElementsByClassName("selected")[0];
    
    if (sel) {
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
        userAnswers.push(sel.value);
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            // Handle end of questions
           console.log("ok")
        } else {
            displayQuestion();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
    
    winning_distro = getRandomElement(distributionNames)
    second_distro = getRandomElementEx(distributionNames,winning_distro)
    winning.classList.remove("top-pod");
    second.classList.remove("top-pod");

    console.log(winning_distro)
    winning = document.getElementById(`${winning_distro}_win`);
    second = document.getElementById(`${second_distro}_lose`);
    console.log(winning);
    winning.classList.add("top-pod");
    second.classList.add("top-pod");

    if (currentQuestionIndex >= questions.length) {
        winning.classList.remove("top-pod");
        second.classList.remove("top-pod");
        clearInterval(inter1);
        clearInterval(inter2);
        // resultPage(winning_distro,second_distro,third_distro);
        
        predictTop(userAnswers);
        // window.location.href = "result.html?first="  + winning_distro + "&second=" + second_distro + "&third=" + third_distro;
    }
}



function prevQuestion() {
    sel = document.getElementsByClassName("selected")[0]
    if(sel){
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        userAnswers.pop()
        chosen-=1;
    }
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}



async function predictTop(userAnswers) {
    let userInput = userAnswers;
    document.getElementById("prev-question").classList.add("hide");
    document.getElementById("next-question").classList.add("hide");
    showLoader();
    const response = await fetch('https://my-loss-neural.onrender.com/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: userInput }),
    });

    const result = await response.json();
    hideLoader()
    const top3 = result.top_3; 
    winning_distro = distributionNames[top3[0]];
    second_distro = distributionNames[top3[1]];
    third_distro = distributionNames[top3[2]];
    
    console.log('Top 3 Predictions:', top3);
    window.location.href = "result.html?first="  + winning_distro + "&second=" + second_distro + "&third=" + third_distro;
}

displayQuestion();

const prevQuestionButton = document.getElementById("prev-question");
const nextQuestionButton = document.getElementById("next-question");
prevQuestionButton.addEventListener("click", prevQuestion);
nextQuestionButton.addEventListener("click", nextQuestion);



  
