// When a key is pressed, show the keycode
document.addEventListener('keypress', function(event) {
  // document.write(event.keyCode)
  console.log(event.keyCode)
})
// When the mouse is clicked, show the co-ordinates
document.addEventListener('click', function(event){
  console.log(event)
})
// Add an input field, when the enter key is pressed, show the trimmed capialized value of the field
document.querySelector("form").addEventListener('submit', function(event){
  event.preventDefault()

  console.log(document.querySelector("input").value.toUpperCase())
})
