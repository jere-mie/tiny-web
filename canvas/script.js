const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.fillStyle = "black";
// ctx.fillRect(100,100,100,100);
// ctx.fillRect(400,100,100,100);
// ctx.fillRect(250,250,100,100);
// ctx.fillRect(100,400,100,100);
// ctx.fillRect(400,400,100,100);

function draw(){
    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);
    let w = parseInt(document.getElementById('width').value);
    let h = parseInt(document.getElementById('height').value);
    let color = document.getElementById('color').value;
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}