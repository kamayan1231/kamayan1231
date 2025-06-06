const images = ["test1.png", "test2.png", "test3.png", "test4.png"];
let currentIndex = 0;

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}

const descriptions = [
  "広報班の紹介文...",
  "デザイン班の紹介文...",
  "音楽班の紹介文...",
  "映像編集班の紹介文...",
  "モーション班の紹介文...",
  "3DCG班の紹介文...",
  "システム実装班の紹介文...",
];


function selectTeam(index) {
  let teams = document.querySelectorAll('.team');
  teams.forEach(team => team.classList.remove('selected'));
  teams[index].classList.add('selected');
  document.getElementById('description').innerText = descriptions[index];
  currentIndex = index;
}

function moveSelection(direction) {
  let teams = document.querySelectorAll('.team');
  let newIndex = (currentIndex + direction + teams.length) % teams.length;
  selectTeam(newIndex);
}

// 初期状態の設定
document.addEventListener("DOMContentLoaded", function () {
  selectTeam(0); // 最初に「広報班」を選択
});
