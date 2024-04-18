// 初期表示


var diceArray = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

// 左右にランダムなサイコロの画像を与える
var player1Num = Math.floor(Math.random() * 6);
var player2Num = Math.floor(Math.random() * 6);
var player1Dice = diceArray[player1Num];
var player2Dice = diceArray[player2Num];

// 左右に画像をセット
document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);

// 表示メッセージの判定
if (player1Num > player2Num) {
  document.querySelector("h1").textContent = "🚩Player1 Wins!";
} else if (player1Num < player2Num) {
  document.querySelector("h1").textContent = "Player2 Wins!🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
