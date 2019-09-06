function startGame() {
  var startBet = document.forms["frm"].elements[0].value;
  //console.log(startBet);
  if(startBet>0) {
    playGame(startBet);
  }
  else {
    console.log("You must bet a positive nonzero amount.");
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame(startBet) {
  var bet = startBet;
  var topBet = startBet;
  var totalRolls = 0;
  var topRoll = totalRolls;
  var roll1
  var roll2
  while(bet>0) {
    roll1 = rollDice();
    roll2 = rollDice();
    totalRolls++;
    if(roll1+roll2==7) {
      bet = bet+4;
      if(bet>topBet) {
        topBet = bet;
        topRoll = totalRolls;
      }
    }
    else {
      bet = bet-1;
    }
  }
  endGame(startBet, totalRolls, topBet, topRoll);
}

function endGame(startBet, totalRolls, topBet, topRoll) {
  document.getElementById("startBet").innerHTML = startBet;
  document.getElementById("totalRolls").innerHTML = totalRolls;
  document.getElementById("topBet").innerHTML = topBet;
  document.getElementById("topRoll").innerHTML = topRoll;
  //console.log(startBet, totalRolls, topBet, topRoll);
}
