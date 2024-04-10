var timer=60;
var hitval;
var scoreval=0;
var nirdesh=["You are chodu", "Ekdam hi land hi hai kya be ", "Is for you black letter equal to buffalo?? ", "Ja bhai Dream 11 pe team bna", "Bhai ludo khel", "Gandu!" ];

function genrnnum(){rnnum=Math.floor(Math.random()*6)};

function makeBubble(){let num=0;
    let bubbleMaker="" ;
    for(i=0;i<198;i++){
    bubbleMaker += `<div class="bubble">${num}</div>`
    document.querySelector("#pbtm").innerHTML=bubbleMaker;
    num=Math.floor(Math.random()*10)}
}

function runTimer(){
    var tim= setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector("#timerval").textContent=timer
               }
               else{clearInterval(tim);
               document.querySelector("#pbtm").innerHTML= `<h1>GAME OVER<br>Your Score is ${scoreval}</h1>` ;
               }
            },
            1000);
}
        
function changeHit(){
         hitval = Math.floor(Math.random()*10);
            document.querySelector("#hit").innerHTML= hitval;
}

function increaseScore(){
            scoreval+=10;
document.querySelector("#score").innerHTML=scoreval;
}
document.querySelector("#pbtm").addEventListener("click", function (dets){
           var cn =dets.target.innerHTML;
            if(cn==hitval){
                document.querySelector("#dec").innerHTML="You have done a good job " 
                increaseScore();
                changeHit();
                makeBubble();
            }
            else{
                genrnnum();
                document.querySelector("#dec").innerHTML= nirdesh[rnnum]};
         } )
    runTimer();
    makeBubble();
    changeHit();    

