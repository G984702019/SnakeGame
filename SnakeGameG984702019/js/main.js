window.onload = function onload(){


  setInterval(function(){
    px=px+xd;
    py=py+yd;
    snake.push({x:px,y:py});
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="lime";
    for (var i = 0; i < snake.length-1; i++) {
        ctx.fillRect(snake[i].x*SIZE,snake[i].y*SIZE,SIZE-2,SIZE-2);
        if (px == snake[i].x && py == snake[i].y) {

          tail=5;
          score.innerText="score:"+tail;
          nowscore=tail;

        }
    }
    while (snake.length>tail) {
      snake.shift();
    }
    if(appleX==px && appleY==py){
      tail++;
      nowscore=tail;
      score.innerText="score:"+tail;
      appleX=Math.floor(Math.random()*canvas.width/SIZE);
      appleY=Math.floor(Math.random()*canvas.height/SIZE);
    }
    ctx.fillStyle="red";
    ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2);
    if (px*SIZE<0)  px=20;
    if (py*SIZE<0)  py=20;
    if (px*SIZE>canvas.width) px=-1;
    if (py*SIZE>canvas.height)  py=-1;

    if (maxscore<nowscore) {
      maxscore=nowscore;
      max.innerText="MaxScore:"+maxscore;
    }
  },1000/FPS);

}
