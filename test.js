const images = ["test1.png", "test2.png", "test3.png", "test4.png"];
let currentIndex = 0;

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}

const descriptions = [
  "広報班の紹介文...\n\nサークルの活動やイベント情報を活動の写真付きで\n外部に発信する重要な役割を担っています。SNSを通\nじて、最新情報をタイムリーにお届けし、サークルの\n魅力を広く知ってもらうことを目指しています。\n特に、ライブでは事前の告知から当日の会場案内、開\n始・終了時間の告知までを丁寧に行い、スムーズな運\n営をサポートします。また、サークルの部誌も作成し\nており、各班の紹介やライブの制作過程、イベントレ\nポートなど、充実したコンテンツをお届けしています。\n広報班は、サークルの活動を広めることで、多くの人\n々にサークルの魅力を伝えることに全力を尽くしてい\nます。",
  "デザイン班の紹介文...",
  "音楽班の紹介文...",
  "映像編集班の紹介文...",
  "モーション班の紹介文...",
  "3DCG班の紹介文...",
  "システム実装班の紹介文..."
];

function selectTeam(index) {
  const teams = document.querySelectorAll(".team");
  teams.forEach(team => team.classList.remove("selected"));
  teams[index].classList.add("selected");
  document.getElementById("description").innerText = descriptions[index];
  currentIndex = index;
}

function moveSelection(direction) {
  const teams = document.querySelectorAll(".team");
  let newIndex = (currentIndex + direction + teams.length) % teams.length;
  selectTeam(newIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  selectTeam(0);
});
