var nextTick = setTimeout
var hrTime = window.performance.now.bind(window.performance)
var tickCount = 0
var lastTickAt = hrTime()

function ticker() {
  if (tickCount > 1000) return
  tickCount += 1
  var now = hrTime()
  console.log("tick: ", tickCount, ", delta: ", now - lastTickAt, "ms")
  lastTickAt = now
  nextTick(ticker)
}

ticker()
