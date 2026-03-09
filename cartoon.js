// get canvas
const canvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

//sky bg
ctx.fillStyle="#191d2d";
ctx.fillRect(0,0,canvas.width, canvas.height);

//fence
ctx.fillStyle="#b17348";

for(let i=0; i<17; i++){
    ctx.save();
    ctx.translate(30+i*45, 380);
    ctx.roundRect(0, 0, 20, 150, 15); 
    ctx.fill();
    ctx.restore();
}

ctx.fillStyle="#b17348";
ctx.fillRect(0, 410, 800, 10);
ctx.fillRect(0, 450, 800, 10);

//stars
for(let i=0; i<50;i++){
    let x=Math.random()*800; //random x postion
    let y=Math.random()*350; //random y postion
    let r=Math.random()*4+2; //random circle radius

    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fillStyle="#fef6dc";
    ctx.fill();
}

//ground
ctx.fillStyle="#6e9d93";
ctx.fillRect(0,500,canvas.width,100);

//house body
ctx.fillStyle="#f9edc4";
ctx.fillRect(250,270,300,230);

//house roof
ctx.beginPath();
ctx.moveTo(200, 270);
ctx.lineTo(400, 120);
ctx.lineTo(600, 270);
ctx.closePath();

ctx.fillStyle="#c65c3d";
ctx.fill();

//house door
ctx.fillStyle = "#c65c3d";
ctx.fillRect(355, 365, 85, 120);

ctx.lineWidth = 4;
ctx.strokeStyle = "#191d2d";
ctx.strokeRect(355, 365, 85, 120);

//house window left
ctx.fillStyle = "#edc05a";
ctx.fillRect(270, 300, 65, 100);
ctx.strokeRect(270, 300, 65, 100);

// window cross left
ctx.beginPath();

ctx.moveTo(270, 350);  
ctx.lineTo(335, 350);

ctx.moveTo(302, 300);  
ctx.lineTo(302, 400);

ctx.stroke();

//house window right
ctx.fillStyle = "#edc05a";
ctx.fillRect(460, 300, 65, 100);
ctx.strokeRect(460, 300, 65, 100);

// window cross right
ctx.beginPath();

ctx.moveTo(460, 350);  
ctx.lineTo(525, 350);

ctx.moveTo(492, 300);  
ctx.lineTo(492, 400);

ctx.stroke();

//house floor
ctx.fillStyle="#2e3643";
ctx.fillRect(220,480,360,30);

//moon circle glow
ctx.filter = "blur(5px)";
ctx.beginPath();
ctx.arc(640, 110, 70, 0, Math.PI * 2);
ctx.fillStyle = "rgba(249, 226, 176, 0.36)";
ctx.fill();
ctx.filter = "none";

//moon circle
ctx.beginPath();
ctx.arc(640, 110, 60, 0, Math.PI * 2);
ctx.fillStyle = "#f0c754";
ctx.fill();

//circle overlap to make half moon
ctx.beginPath();
ctx.arc(600, 110, 60, 0, Math.PI * 2);
ctx.fillStyle = "#191d2d";
ctx.fill();

//ghost head
ctx.beginPath();
ctx.arc(130, 200, 50, 0, Math.PI * 2);
ctx.fillStyle = "#f7edc3";
ctx.fill();
//ghost body
ctx.fillStyle="#f7edc3";
ctx.fillRect(80,200,100,120);
//ghost features
//eye1
ctx.beginPath();
ctx.arc(105, 200, 8, 0, Math.PI * 2);
ctx.fillStyle = "#252829";
ctx.fill();
//eye2
ctx.beginPath();
ctx.arc(155, 200, 8, 0, Math.PI * 2);
ctx.fillStyle = "#252829";
ctx.fill();
//mouth
ctx.beginPath();
ctx.roundRect(120, 210, 18, 25, 15); 
ctx.fillStyle = "#252829";
ctx.fill();

//text
ctx.fillStyle="#6e9d93";
ctx.font = "bold 35px Arial";
ctx.fillText("SPOOKY NIGHTS", 260,80);      