var rockPath = 'rock.png';
var paperPath = 'paper.png';
var scissorsPath = 'scissor.png';
var snd = new Audio("ducky.mp3")
var score=[ 0 , 0 , 0];
var images = [rockPath,paperPath,scissorsPath];
function east(){
    snd.play();     
    var ind=Math.floor(Math.random() * 4);
    document.getElementById('easter').src="easter"+ind+".png";
    snd.currentTime=0;
}
function cl(move){
    var ind=Math.floor(Math.random() * images.length);
    document.getElementById('playerMove').src = images[move];
    document.getElementById('robotMove').src  = images[ind];

    var h=document.getElementById('score');//WON = 0 | LOST = 0 | DRAW = 0

    //DR4W
    if(ind==move) score[2]+=1;

    //W0N
    else if((ind==2 && move==0) || (ind==0 && move==1) || (ind==1 && move==2))   score[0]+=1;

    //L057
    else score[1]+=1;

    var disp="WON = "+score[0]+" | LOST = "+score[1]+" | DRAW = "+score[2];
    h.innerText=disp;
};
