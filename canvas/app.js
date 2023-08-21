var range = document.querySelector(".range");
var stroke = document.querySelector(".stroke")
var canvas = document.getElementById("canvas")
// var strokew = document.querySelector(".strokew")
var strokec = document.querySelector(".color")



range.addEventListener("input", function fun(){
    console.log(range.value);
    stroke.innerText = range.value;
})

var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext('2d');
console.log(ctx)

var x = 0;
var y = 0;

function stopdraw(){
 isdrawing=false;
}
function startdraw(e){
    isdrawing = true;
    x = e.offsetX;
    y = e.offsetY;
}



function draw(e) {
  if(isdrawing==true){
    const newX = e.offsetX;
    const newY = e.offsetY;
    // console.log(newX, newY)
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(newX, newY);
    ctx.stroke();

    x = newX
    y = newY

  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", startdraw);
canvas.addEventListener("mouseup", stopdraw);

range.addEventListener("input",()=>{
  stroke.innerText=range.value ;
  ctx.lineWidth=range.value;
});


strokec.addEventListener('input',function fun(){
  ctx.strokeStyle=strokec.value;
});
