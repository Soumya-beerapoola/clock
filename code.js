
 function clock(){
 let d = new Date();
 let cSec = d.getSeconds();
 let cMinutes =  d.getMinutes();
 let cHour = d.getHours();
 console.log(d,cSec,cMinutes,cHour);

 
 let x = document.getElementById("seconds");
 let y = document.getElementById("minutes");
 let z=  document.getElementById("hours");

 let newSec  = 6 * cSec;
  let newMin  = 6  * cMinutes;
  let newHour = 30 * cHour;
 
function originalTime(){
  console.log(newSec);
  x.style.transform = `rotate(${newSec}deg)`;
  y.style.transform = `rotate(${newMin}deg)`;
  z.style.transform = `rotate(${newHour}deg)`;
 
}

originalTime()

let i = newSec;
 let j = newMin;
 let k = newHour;


function time(){
    setInterval(() => { 
    i+=6; 
    j = j + 0.1; 
    k = k + 0.00833333333;  
    x.style.transform = `rotate(${i}deg)`;
    y.style.transform = `rotate(${j}deg)`;
    z.style.transform = `rotate(${k}deg)`;
    console.log(x);  
    console.log(y);
    console.log(z);
    },1000)
}
time();
 }
 clock();


  