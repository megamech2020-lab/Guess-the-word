var player1_name = localStorage.getItem("player_1_name");
var player2_name = localStorage.getItem("player_2_name");
var player1_score = 0;
var player2_score = 0;
var lowercase_word;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =
  "question turn - " + player1_name;
document.getElementById("player_answer").innerHTML =
  "answer turn - " + player2_name;

function send() {
  var word = document.getElementById("word").value;
  lowercase_word = word.toLowerCase();
  console.log(lowercase_word);

  var charAt1 = lowercase_word.charAt(1);
  var length = lowercase_word.length;
  console.log(length);

  var charAt2 = lowercase_word.charAt(Math.floor(length / 2));
  console.log(charAt2);

  var charAt3 = lowercase_word.charAt(length - 1);
  console.log(charAt2);

  var replace1 = lowercase_word.replace(charAt1, "_");
  var replace2 = replace1.replace(charAt2, "_");
  var replace3 = replace2.replace(charAt3, "_");
  console.log(replace3);
  var question_word = "<h4 id='word_display'>" + replace3 + "</h4><br>";
  var inputbox = "answer : <input id='answer' type='text'>";
  var button =
    "<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
  document.getElementById("output").innerHTML =
    question_word + inputbox + button;
  document.getElementById("word").value = "";
}

var questionTurn = "player-1";
var answerTurn = "player-2";
function check() {
  var answer = document.getElementById("answer").value;
  var lowercase_answer = answer.toLowerCase();
  console.log("answer is " + lowercase_answer);
  if (lowercase_answer == lowercase_word) {
    if (answerTurn == "player-1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
    }
  }

  if (questionTurn == "player-1") {
    questionTurn = "player-2";
    answerTurn = "player-1";
    document.getElementById("player_question").innerHTML =
      "question turn " + player2_name;
    document.getElementById("player_answer").innerHTML =
      "answer turn " + player1_name;
  } else {
    questionTurn = "player-1";
    answerTurn = "player-2";
    document.getElementById("player_question").innerHTML =
      "question turn " + player1_name;
    document.getElementById("player_answer").innerHTML =
      "answer turn " + player2_name;
  }
  document.getElementById("output").innerHTML = "";
}
