var http = require('http')
var fs = require('fs')

var port = 1337
  , clientFn = 'client.js'

http.createServer(function (req, res) {
  // Three routes:
  // 1. client code
  if (req.url === '/' + clientFn) {
    res.writeHead(200, {'Content-Type': 'text/javascript'})
    fs.createReadStream(clientFn).pipe(res)
  }
  // 2. a random number
  else if (req.url === '/rand') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(Math.random().toString(32).split('.')[1])
  }
  // 3. html that fetches client code
  else {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("<script src='"+clientFn+"'></script>")
  }
}).listen(port, function(){
  console.log('Server running on port', port)
})

