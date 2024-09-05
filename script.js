function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let ball1=document.querySelector(".debian");
let ball2=document.querySelector(".ubuntu");
let ball3=document.querySelector(".arch");
let ball4=document.querySelector(".mint");
let ball5=document.querySelector(".pop");
let ball6=document.querySelector(".fedora");
let ball7=document.querySelector(".manjaro");
let ball8=document.querySelector(".kde_plasma");
let ball9=document.querySelector(".opensuse");
let ball10=document.querySelector(".kali");
let ball11=document.querySelector(".chimera");
let ball12=document.querySelector(".elementary");
let ball13=document.querySelector(".endeavour");
let ball14=document.querySelector(".garuda");
let ball15=document.querySelector(".gentoo");
let ball16=document.querySelector(".qubes");
let ball17=document.querySelector(".cent");
let ball18=document.querySelector(".tuxedo");
let ball19=document.querySelector(".parrot");
let ball20=document.querySelector(".tails");


let main=document.getElementById("main");

setInterval(move_ball,100)

let w1 = Math.floor(Math.random()*(main.offsetWidth));
let h1 = Math.floor(Math.random()*(main.offsetHeight));
let s1 = getRndInteger(10,30);
let a1 = parseFloat(Math.random()*(2*Math.PI));

let w2 = Math.floor(Math.random()*(main.offsetWidth));
let h2 = Math.floor(Math.random()*(main.offsetHeight));
let s2 = getRndInteger(10,30);
let a2 = parseFloat(Math.random()*(2*Math.PI));

let w3 = Math.floor(Math.random()*(main.offsetWidth));
let h3 = Math.floor(Math.random()*(main.offsetHeight));
let s3 = getRndInteger(10,30);
let a3 = parseFloat(Math.random()*(2*Math.PI));

let w4 = Math.floor(Math.random()*(main.offsetWidth));
let h4 = Math.floor(Math.random()*(main.offsetHeight));
let s4 = getRndInteger(10,30);
let a4 = parseFloat(Math.random()*(2*Math.PI));

let w5 = Math.floor(Math.random()*(main.offsetWidth));
let h5 = Math.floor(Math.random()*(main.offsetHeight));
let s5 = getRndInteger(10,30);
let a5 = parseFloat(Math.random()*(2*Math.PI));

let w6 = Math.floor(Math.random()*(main.offsetWidth));
let h6 = Math.floor(Math.random()*(main.offsetHeight));
let s6 = getRndInteger(10,30);
let a6 = parseFloat(Math.random()*(2*Math.PI));

let w7 = Math.floor(Math.random()*(main.offsetWidth));
let h7 = Math.floor(Math.random()*(main.offsetHeight));
let s7 = getRndInteger(10,30);
let a7 = parseFloat(Math.random()*(2*Math.PI));

let w8 = Math.floor(Math.random()*(main.offsetWidth));
let h8 = Math.floor(Math.random()*(main.offsetHeight));
let s8 = getRndInteger(10,30);
let a8 = parseFloat(Math.random()*(2*Math.PI));

let w9 = Math.floor(Math.random()*(main.offsetWidth));
let h9 = Math.floor(Math.random()*(main.offsetHeight));
let s9 = getRndInteger(10,30);
let a9 = parseFloat(Math.random()*(2*Math.PI));

let w10 = Math.floor(Math.random()*(main.offsetWidth));
let h10 = Math.floor(Math.random()*(main.offsetHeight));
let s10 = getRndInteger(10,30);
let a10 = parseFloat(Math.random()*(2*Math.PI));

let w11 = Math.floor(Math.random()*(main.offsetWidth));
let h11 = Math.floor(Math.random()*(main.offsetHeight));
let s11 = getRndInteger(10,30);
let a11 = parseFloat(Math.random()*(2*Math.PI));

let w12 = Math.floor(Math.random()*(main.offsetWidth));
let h12 = Math.floor(Math.random()*(main.offsetHeight));
let s12 = getRndInteger(10,30);
let a12 = parseFloat(Math.random()*(2*Math.PI));

let w13 = Math.floor(Math.random()*(main.offsetWidth));
let h13 = Math.floor(Math.random()*(main.offsetHeight));
let s13 = getRndInteger(10,30);
let a13 = parseFloat(Math.random()*(2*Math.PI));

let w14 = Math.floor(Math.random()*(main.offsetWidth));
let h14 = Math.floor(Math.random()*(main.offsetHeight));
let s14 = getRndInteger(10,30);
let a14 = parseFloat(Math.random()*(2*Math.PI));

let w15 = Math.floor(Math.random()*(main.offsetWidth));
let h15 = Math.floor(Math.random()*(main.offsetHeight));
let s15 = getRndInteger(10,30);
let a15 = parseFloat(Math.random()*(2*Math.PI));

let w16 = Math.floor(Math.random()*(main.offsetWidth));
let h16 = Math.floor(Math.random()*(main.offsetHeight));
let s16 = getRndInteger(10,30);
let a16 = parseFloat(Math.random()*(2*Math.PI));

let w17 = Math.floor(Math.random()*(main.offsetWidth));
let h17 = Math.floor(Math.random()*(main.offsetHeight));
let s17 = getRndInteger(10,30);
let a17 = parseFloat(Math.random()*(2*Math.PI));

let w18 = Math.floor(Math.random()*(main.offsetWidth));
let h18 = Math.floor(Math.random()*(main.offsetHeight));
let s18 = getRndInteger(10,30);
let a18 = parseFloat(Math.random()*(2*Math.PI));

let w19 = Math.floor(Math.random()*(main.offsetWidth));
let h19 = Math.floor(Math.random()*(main.offsetHeight));
let s19 = getRndInteger(10,30);
let a19 = parseFloat(Math.random()*(2*Math.PI));

let w20 = Math.floor(Math.random()*(main.offsetWidth));
let h20 = Math.floor(Math.random()*(main.offsetHeight));
let s20 = getRndInteger(10,30);
let a20 = parseFloat(Math.random()*(2*Math.PI));

let radius = 25;


let width = main.offsetWidth-50;
let height = main.offsetHeight-50;

function mover(randwidth,randHeight,speed,angle){
    speed = speed + getRndInteger(-2,2)
    if (speed > 40){
        speed-=15
    }
    if(speed < 10){
        speed+=10
    }

    randwidth = parseInt(randwidth) + (Math.cos(angle) * speed);
    randHeight = parseInt(randHeight) + (Math.sin(angle) * speed);

    if(parseInt(randwidth) -radius< 0){
        randwidth = radius;
        angle = Math.PI - angle;
    }
    else if(parseInt(randwidth) +radius> parseInt(width)){
        randwidth = parseInt(width) - radius;
        angle = Math.PI - angle;
    }

    if(parseInt(randHeight)< radius){
        randHeight = radius;
        angle = (Math.PI * 2) - angle;
    }
    else if(parseInt(randHeight)+radius> parseInt(height)){
        randHeight = parseInt(height) - radius;
        angle = (Math.PI * 2) - angle;
    }
    if (true){
        angle = angle - (Math.random()*0.3)
    }
    return [randwidth,randHeight,speed,angle]
};

function move_ball(){
    let func_call1 = mover(w1,h1,s1,a1);
    w1 = func_call1[0];
    h1 = func_call1[1];
    s1 = func_call1[2];
    a1 = func_call1[3];
    ball1.style.left=`${w1}px`;
    ball1.style.top=`${h1}px`; 

    let func_call2 = mover(w2,h2,s2,a2);
    w2 = func_call2[0];
    h2 = func_call2[1];
    s2 = func_call2[2];
    a2 = func_call2[3];
    ball2.style.left=`${w2}px`;
    ball2.style.top=`${h2}px`;

    let func_call3 = mover(w3,h3,s3,a3);
    w3 = func_call3[0];
    h3 = func_call3[1];
    s3 = func_call3[2];
    a3 = func_call3[3];
    ball3.style.left=`${w3}px`;
    ball3.style.top=`${h3}px`;

    let func_call4 = mover(w4,h4,s4,a4);
    w4 = func_call4[0];
    h4 = func_call4[1];
    s4 = func_call4[2];
    a4 = func_call4[3];
    ball4.style.left=`${w4}px`;
    ball4.style.top=`${h4}px`;

    let func_call5 = mover(w5,h5,s5,a5);
    w5 = func_call5[0];
    h5 = func_call5[1];
    s5 = func_call5[2];
    a5 = func_call5[3];
    ball5.style.left=`${w5}px`;
    ball5.style.top=`${h5}px`;

    let func_call6 = mover(w6,h6,s6,a6);
    w6 = func_call6[0];
    h6 = func_call6[1];
    s6 = func_call6[2];
    a6 = func_call6[3];
    ball6.style.left=`${w6}px`;
    ball6.style.top=`${h6}px`;

    let func_call7 = mover(w7,h7,s7,a7);
    w7 = func_call7[0];
    h7 = func_call7[1];
    s7 = func_call7[2];
    a7 = func_call7[3];
    ball7.style.left=`${w7}px`;
    ball7.style.top=`${h7}px`;

    let func_call8 = mover(w8,h8,s8,a8);
    w8 = func_call8[0];
    h8 = func_call8[1];
    s8 = func_call8[2];
    a8 = func_call8[3];
    ball8.style.left=`${w8}px`;
    ball8.style.top=`${h8}px`;

    let func_call9 = mover(w9,h9,s9,a9);
    w9 = func_call9[0];
    h9 = func_call9[1];
    s9 = func_call9[2];
    a9 = func_call9[3];
    ball9.style.left=`${w9}px`;
    ball9.style.top=`${h9}px`;

    let func_call10 = mover(w10,h10,s10,a10);
    w10 = func_call10[0];
    h10 = func_call10[1];
    s10 = func_call10[2];
    a10 = func_call10[3];
    ball10.style.left=`${w10}px`;
    ball10.style.top=`${h10}px`;

    let func_call11 = mover(w11,h11,s11,a11);
    w11 = func_call11[0];
    h11 = func_call11[1];
    s11 = func_call11[2];
    a11 = func_call11[3];
    ball11.style.left=`${w11}px`;
    ball11.style.top=`${h11}px`;
    
    let func_call12 = mover(w12,h12,s12,a12);
    w12 = func_call12[0];
    h12 = func_call12[1];
    s12 = func_call12[2];
    a12 = func_call12[3];
    ball12.style.left=`${w12}px`;
    ball12.style.top=`${h12}px`;

    let func_call13 = mover(w13,h13,s13,a13);
    w13 = func_call13[0];
    h13 = func_call13[1];
    s13 = func_call13[2];
    a13 = func_call13[3];
    ball13.style.left=`${w13}px`;
    ball13.style.top=`${h13}px`;

    let func_call14 = mover(w14,h14,s14,a14);
    w14 = func_call14[0];
    h14 = func_call14[1];
    s14 = func_call14[2];
    a14 = func_call14[3];
    ball14.style.left=`${w14}px`;
    ball14.style.top=`${h14}px`;
    
    let func_call15 = mover(w15,h15,s15,a15);
    w15 = func_call15[0];
    h15 = func_call15[1];
    s15 = func_call15[2];
    a15 = func_call15[3];
    ball15.style.left=`${w15}px`;
    ball15.style.top=`${h15}px`;

    let func_call16 = mover(w16,h16,s16,a16);
    w16 = func_call16[0];
    h16 = func_call16[1];
    s16 = func_call16[2];
    a16 = func_call16[3];
    ball16.style.left=`${w16}px`;
    ball16.style.top=`${h16}px`;

    let func_call17 = mover(w17,h17,s17,a17);
    w17 = func_call17[0];
    h17 = func_call17[1];
    s17 = func_call17[2];
    a17 = func_call17[3];
    ball17.style.left=`${w17}px`;
    ball17.style.top=`${h17}px`;

    let func_call18 = mover(w18,h18,s18,a18);
    w18 = func_call18[0];
    h18 = func_call18[1];
    s18 = func_call18[2];
    a18 = func_call18[3];
    ball18.style.left=`${w18}px`;
    ball18.style.top=`${h18}px`;

    let func_call19 = mover(w19,h19,s19,a19);
    w19 = func_call19[0];
    h19 = func_call19[1];
    s19 = func_call19[2];
    a19 = func_call19[3];
    ball19.style.left=`${w19}px`;
    ball19.style.top=`${h19}px`;

    let func_call20 = mover(w20,h20,s20,a20);
    w20 = func_call20[0];
    h20 = func_call20[1];
    s20 = func_call20[2];
    a20 = func_call20[3];
    ball20.style.left=`${w20}px`;
    ball20.style.top=`${h20}px`;
}
