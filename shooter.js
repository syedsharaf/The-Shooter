var hits = 0;
var missed = 0; 

function Shoot()
{
   var bullet = document.getElementById("bullet");
   bullet.offsetTop=330;
   var target = document.getElementById("target");
   bullet.style.display="inherit";
   var bPos = 331;
   var t = setInterval(moveBullet,1);
   
   function moveBullet()
   {
     if(bPos < 30)
     {
      clearInterval(t);
      bullet.style.display="none";
      missed++;
     }
     else
     {
      var sameX = (bullet.offsetTop>=36) && (bullet.offsetTop <= 70);
      var sameY = (target.offsetLeft >=90)&&(target.offsetLeft <=150);
       if(!(sameX && sameY))
       {
        bPos -= 4;
        bullet.style.top = bPos +"px";
        var yb = bPos + "px";         
       }
       else
       {
         clearInterval(t);
         bullet.style.display="none";
         hits++; document.getElementById("explode").style.visibility="inherit";
         setTimeout(function(){ document.getElementById("explode").style.visibility="hidden"; },800)
       }   
      } document.getElementById("hits").innerHTML= "Hits: "+hits;
      document.getElementById("missed").innerHTML="Missed: "+missed;
  if (missed==5){
     if (hits<10){
        alert ("\t\t\t\t\t\t\tYou Loose \n Hits---------------------------------------"+hits+"\n Missed----------------------------------"+missed+"\n\n \t\t\t\t\t\tDo Hardwork!!!") 
        hits=0;
        missed=0;
     }
  } 
  }
};

function ThankYou()
{
   alert("Welcome to The Shooter!! I, Syed Sharaf Hope you will enjoy it.");
}
 from{margin-left:0%;} 
 to{margin-left:80%;} 
}
#score
{
  font-size:13px;
  width:80px;
  border-width:2px;
  border-style:dotted;
  border-color:white;
  padding-left:10px;
  position:absolute;
  top:300px;
}
#explode
{
 top:49px;
   width:60px;
   position:absolute;
   animation-name:movetarget;
   animation-duration:3s;
   animation-iteration-count:infinite;
   animation-direction:alternate;
   -webkit-animation-duration:3s;
   -webkit-animation-name:movetarget;
   -webkit-animation-iteration-count:infinite;
   -webkit-animation-direction:alternate;
   visibility:hidden;
}
#info
{
   font-size:10px;
   position:absolute;
   left:220px;
   top:330px;
}
</style>
    </head>
    <body onload="ThankYou()">
    <script>
    var hits = 0;
var missed = 0; 

function Shoot()
{
   var bullet = document.getElementById("bullet");
   bullet.offsetTop=330;
   var target = document.getElementById("target");
   bullet.style.display="inherit";
   var bPos = 331;
   var t = setInterval(moveBullet,1);
   
   function moveBullet()
   {
     if(bPos < 30)
     {
      clearInterval(t);
      bullet.style.display="none";
      missed++;
     }
     else
     {
      var sameX = (bullet.offsetTop>=36) && (bullet.offsetTop <= 70);
      var sameY = (target.offsetLeft >=90)&&(target.offsetLeft <=150);
       if(!(sameX && sameY))
       {
        bPos -= 4;
        bullet.style.top = bPos +"px";
        var yb = bPos + "px";         
       }
       else
       {
         clearInterval(t);
         bullet.style.display="none";
         hits++; document.getElementById("explode").style.visibility="inherit";
         setTimeout(function(){ document.getElementById("explode").style.visibility="hidden"; },800)
       }   
      } document.getElementById("hits").innerHTML= "Hits: "+hits;
      document.getElementById("missed").innerHTML="Missed: "+missed;
  if (missed==5){
     if (hits<10){
        alert ("\t\t\t\t\t\t\tYou Loose \n Hits---------------------------------------"+hits+"\n Missed----------------------------------"+missed+"\n\n \t\t\t\t\t\tDo Hardwork!!!") 
        hits=0;
        missed=0;
     }
  } 
  }
};

function ThankYou()
{
   alert("Welcome to The Shooter!! I, Syed Sharaf Hope you will enjoy it.");
}
</script>
    <font color=" #CEF6F5 ">
    <h2 align="center">Hit the target</h2>
    <img id="target" src=" http://orig08.deviantart.net/4a5a/f/2012/193/e/f/circulo_png_by_josefabellalovers-d570rfx.png"></img>
    <img id="me" src=" https://i2.wp.com/rocketdock.com/images/screenshots/Another-UFO-icon.png " onClick="Shoot()"></img>
    <img id="bullet" src=" http://2.bp.blogspot.com/-9sEX_jbqoY4/T03OKkvUfpI/AAAAAAAAHiA/y8ZQ1OFdfOU/s1600/4557.png"></img>
    <img id="explode" src=" http://rs651.pbsrc.com/albums/uu236/416o/explosion.gif~c200"></img>
    <div id="score">
    <p id="hits">Hits: 0</p>
    <p id="missed">Missed: 0</p>
    </div>
    <p id="info">Click on the spaceship to shoot</p>
    </font>
    </body>
</html>
