const images = ["test1.png", "test2.png", "test3.png", "test4.png"];
let currentIndex = 0;

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}

const descriptions = [
  "広報班の紹介文...\n\nサークルの活動やイベント情報を活動の写真付きで外部に\n発信する重要な役割を担っています。SNSを通じて、最新情\n報をタイムリーにお届けし、サークルの魅力を広く知っても\nらうことを目指しています。特に、ライブでは事前の告知か\nら当日の会場案内、開始・終了時間の告知までを丁寧に行い\n、スムーズな運営をサポートします。また、サークルの部誌\nも作成しており、各班の紹介やライブの制作過程、イベント\nレポートなど、充実したコンテンツをお届けしています。広\n報班は、サークルの活動を広めることで、多くの人々にサー\nクルの魅力を伝えることに全力を尽くしています。",
  "デザイン班の紹介文...\n\nデザイン班ではVL研のデザイン全般を行っています。各ライ\nブのメインビジュアル作成やパンフレットデザイン、VRワー\nルドのデザインやSNSへの投稿用画像の作成等イラストのみに\nとどまらず様々な活動を行っています。デザイン班だからとい\nって絵ばかり描くのではなく、仕事用途に応じて必要なスキル\nが変わってくるためAdobe illustratorやCLIP STUDIO PAINTな\nど個人によって使用ソフトも異なります。\n他の班とは違い、様々な事にチャレンジ出来る環境があるのも\nデザイン班の魅力の1つです！私達と一緒にデザイン班で部活\nを支えていきませんか？",


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
