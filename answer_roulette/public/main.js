
let button = document.querySelectorAll('button')

// sets intial score to 0
var botScore = 0,
  playerScore = 0;
var bet =500

// event listener 
document.getElementById("green").onclick = playerThrowsRock;
document.getElementById("purple").onclick = playerThrowsPaper;
document.getElementById("red").onclick = playerThrowsScissors;

//commands players options
function playerThrowsRock() {
  console.log("green")
  var botsWeapon = getRandomWeapon(); 
  checkWhoWon(botsWeapon, "green");
}

function playerThrowsScissors() {
  console.log("red")
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "red");
}

function playerThrowsPaper() {
  console.log("purple")
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, "purple");
}

function getRandomWeapon() {
  var playerArray =[green, red, purple]
  // var randomNumber = (Math.random()*3);
  // playerOption = playerArray [choice]
  var botsWeapon = "green";
  if (randomNumber < 0.33) {
    botsWeapon = "red";
  } else if (randomNumber < 0.6666) {
    botsWeapon = "purple";
  }
  return botsWeapon;
}

//checks winner
function checkWhoWon(botsWeapon, playersWeapon) {
  if (botsWeapon == playersWeapon) {
    displayCompleteMessage("There was tie");
  } else if (
    (botsWeapon == "red" && playersWeapon == "purple") ||
    (botsWeapon == "purple" && playersWeapon == "green") ||
    (botsWeapon == "green" && playersWeapon == "red")
  ) {
    increaseBotScore();
  } else {
    
    increasePlayerScore();
  }
}
function increaseBotScore() {
  botScore += 1;
  document.getElementById("computerScore").innerHTML = botScore;
  displayCompleteMessage("Sorry, you're a loser");
}


function increasePlayerScore() {
  playerScore += 1;
  document.getElementById("humanScore").innerHTML = playerScore;
  displayCompleteMessage("You win!");
}

function displayCompleteMessage(msg) {
  document.getElementById("status").innerHTML = msg;
}

document.querySelector('#bet').innerText = bets


// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var trash = document.getElementsByClassName("fa-trash");

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

Array.from(button).forEach(function(element) {
      element.addEventListener('click', function(){
        // const name = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            // 'name': name,
            // 'msg': msg
            {'bet': bet, 'result': result}
          )
        }).then(function (response) {
          window.location.reload()
        })
      });
});
