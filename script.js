function imRight() {
    document.getElementById("answer").innerHTML = "Im Right";
    }
function noImRight() {
    document.getElementById("answer").innerHTML = "No Im Right";
}

function dontHover(){
  alert("Hey, I told you not to hover over me!")
}

function keyAlert(){
  var x = event
  document.getElementById("Part_3").innerHTML = x;
}

function checkUser() {
const psw = document.getElementById('password').value
const user = document.getElementById('username').value

if (psw !== 1234567) {
      return true

    } else {
        alert('incorect')
    }
  }
