 let hours=document.getElementById("hours");
 let sec=document.getElementById("sec");
 let min=document.getElementById("min");
 let ampmEL=document.getElementById("ampm");
 function updateclock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm="AM"
  if (h>12) {
    h=h-12
    ampm="PM"
  }
  h=h<10? "0"+h:h
  s=s<10? "0"+s:s  
  m=m<10? "0"+m:m
hours.innerText=h
 min.innerHTML=m
sec.innerText=s
ampmEL, (innertext=ampm)
setTimeout(updateclock,1000)}
updateclock()
