let gameseq = [];
let userseq = [];

let colors = ['green', 'red', 'yellow', 'blue'];

let started = false;
let level = 0;

let h2 = document.querySelector('h4'); // This selects the <h4> element to show the level
let allbtns=document.querySelectorAll('button');
let body=document.querySelector('body')

document.addEventListener('keypress', function() {
    if (started==false) {
        console.log('Game Started');
        started = true;
        levelUp(); // Start the game with level 1
        // userbtn();
    }
});


// Flash button function
function flashbtn(btn) {
   btn.classList.add('flash'); // Add flash effect
    setTimeout(function () {
       btn.classList.remove('flash'); // Remove flash effect after 1 second
    }, 250);
}

// Level up function
function levelUp() {
    userseq=[];
    level++;
    // updatescore();
    h2.innerText = `Level ${level}`;  // Show current level

    let randomidx = Math.floor(Math.random() * colors.length); // Get random color index
    let color = colors[randomidx];
    // console.log(color);
    gameseq.push(color)
    console.log(gameseq);
    let randombtn = document.querySelector(`.${color}`); // Correct the selector to use ID
    flashbtn(randombtn); // Flash the random button
    
    
}


function userflash(btn){
     btn.classList.add('userflash');
     setTimeout(function(){
        btn.classList.remove("userflash")
     },250)
}

function redflash(){
      body.classList.add('body');
        setTimeout(function(){
            body.classList.remove('body');
        },100)  
}

function checkSeq(idx){
   
    if(userseq[idx]===gameseq[idx]){
        
       if(userseq.length==gameseq.length){
        setTimeout(levelUp,500)
       }   
  
    }else{
        h2.innerHTML=`Game Over! Press any key to start game`
        redflash();
        reset();
      
    }
}

function btnpress(){
   let btn=this;
   userflash(btn);
   let userbtncolor= btn.getAttribute("id");
//    console.log(userbtncolor);
    userseq.push(userbtncolor);
    console.log(userseq)
    checkSeq(userseq.length-1);
}
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}

// let score=0;
// let highscore=localStorage.getItem('highscore')||0;

// console.log('current score:',score)
// console.log('High Score:',highscore)

// function updatescore(){
//     score=level;
//     console.log('score:',score)
//     if(score>highscore){
//          highscore=score;
//          localStorage.setItem('highscore',highscore);
//          console.log('New hclearigh score:',highscore);
// //          let printHighscore=document.querySelector('.highscore')
//         printHighscore.innerHTML=`Your Highscore:${highscore}`;

//     }
// }

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
     level=0;
    //  updatescore();
}

 