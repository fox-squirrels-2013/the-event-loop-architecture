var rand // get random number from server
var requestFinishedCode = 4
var requestSuccessStatusCode = 200
var request = new XMLHttpRequest()
request.onreadystatechange = function(){
  if ( this.readyState === requestFinishedCode &&
       this.status === requestSuccessStatusCode ) {
    rand = this.responseText
    console.log(rand)
  }
}

request.open('GET', '/rand')
request.send()
