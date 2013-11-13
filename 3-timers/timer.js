// Make a clock!
document.querySelector('.clock').innerText = new Date().toString()

setInterval(function(){
  document.querySelector('.clock').innerText = new Date().toString()
  var n = 0
  while(n < 1000000000){n++}
  },100)
// Every so often update the clock element with the current time

// If the user has been looking at this page for more than 10 seconds, let  them know
