let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;

function addHome1() {
  homeScore += 1;
  homeScoreEl.innerText = homeScore;
}

function addHome2() {
  homeScore += 2;
  homeScoreEl.innerText = homeScore;
}

function addHome3() {
  homeScore += 3;
  homeScoreEl.innerText = homeScore;
}

function addAway1() {
  awayScore += 1;
  awayScoreEl.innerText = awayScore;
}

function addAway2() {
  awayScore += 2;
  awayScoreEl.innerText = awayScore;
}

function addAway3() {
  awayScore += 3;
  awayScoreEl.innerText = awayScore;
}

function resetAll(){
    homeScore = 0
    awayScore = 0
    homeScoreEl.innerText = 0
    awayScoreEl.innerText = 0
}