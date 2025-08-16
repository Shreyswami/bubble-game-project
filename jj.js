var timer= 60;
var rrr = 0;
var score=0;
function makehit(){
    rrr = Math.floor(Math.random()*10);
    document.querySelector("#ert").textContent=rrr;
}
function makebubble(){
    var clutter=" "
for(var i=0;i<114;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function ttimer(){
    
    var st = setInterval(function(){
      if(timer>0){
        timer--;
        document.querySelector("#sss").textContent=timer;
      }
      else{
        clearInterval(st);
        document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>
<audio src="go.mp3"></audio>`
      }
},1000)
}
function incscore(){
 score+=10;
 document.getElementById("ddd").textContent=score;
}
function decscore(){
    score-=10;
 document.getElementById("ddd").textContent=score;

}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var g = Number(details.target.textContent);
    if(g === rrr){
     incscore();
     makebubble();
     makehit();
    }
    else{
        decscore();
    }
})
makebubble();
ttimer();
makehit();