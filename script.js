// setup default values
let day = 0
let age = 0
// event listener
document.getElementById('button').addEventListener('click', calculate)
// main function
function calculate () {
  day = document.getElementById('day').value
  day = parseInt(day)
  age = document.getElementById('age').value
  age = parseInt(age)
  if (age < 18 && day > 2) {
    alert('Time for school!')
  } else if (age >= 18 && day > 2) {
    alert('Time to go to work!')
  } else {
    alert('Time to relax for the weekend!')
  }
}
