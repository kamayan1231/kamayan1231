const customOverlayImages = ["test1.png", "test2.png", "test3.png"];
let customCurrentIndex = 0;
const customOverlay = document.getElementById("customOverlay");

function customShowImage(index) {
  customOverlay.src = customOverlayImages[index];
}

function customNextImage() {
  customCurrentIndex = (customCurrentIndex + 1) % customOverlayImages.length;
  customShowImage(customCurrentIndex);
}

function customPrevImage() {
  customCurrentIndex = (customCurrentIndex - 1 + customOverlayImages.length) % customOverlayImages.length;
  customShowImage(customCurrentIndex);
}

const descriptions = [
  "運営班の紹介文...\n\n運営班では部活動内の班のスケジュール調整や部内のイベントの\nスケジュール、部活動で使用しているDiscordのサーバー管理や\n会議やライブの情報をまとめているnotionのシステムの管理を行\nなっています。他の班とは違い、何かを作ったり見せたりするよ\nうな班ではないです。ですが、制作ができるような環境を作った\nりライブの進行をスムーズに行くような活動をしてます！また、\n部活動の交流の一環として年に一回キャンプを行っていたり、部\n内LT会を行ったしします！それらの計画を運営班では立てたり当\n日の進行を重なってます！一緒に部活動の運営をしましょう！",
  "運営班の紹介文...\n\n部の活動やイベント情報を写真付きで外部に発信する重要な役割\nを担っています。特に、ライブでは事前の告知から開始・終了時\n間の告知までを丁寧に行い、スムーズな運営をサポートします。\nまた、各班の紹介やライブの制作過程など、充実したコンテンツ\nをお届けするために部誌の制作もしています。SNSでは、普段の\n活動や部員が制作した作品等も一部公開し、VL研に所属していな\nい方にも部の雰囲気がわかるようにしています。広報班は、サー\nクルの活動を広めることで、多くの人々にサークルの魅力を伝え\nることに全力を尽くしています。是非、HP内のリンクからVL研\nのSNSにアクセスしてみてください！",
  "デザイン班の紹介文...\n\nデザイン班ではVL研のデザイン全般を行っています。各ライ\nブのメインビジュアル作成やパンフレットデザイン、VRワー\nルドのデザインやSNSへの投稿用画像の作成等イラストのみに\nとどまらず様々な活動を行っています。デザイン班だからとい\nって絵ばかり描くのではなく、仕事用途に応じて必要なスキル\nが変わってくるためAdobe illustratorやCLIP STUDIO PAINTな\nど個人によって使用ソフトも異なります。\n他の班とは違い、様々な事にチャレンジ出来る環境があるのも\nデザイン班の魅力の1つです！私達と一緒にデザイン班で部活\nを支えていきませんか？",


  "音楽班の紹介文...",
  "映像編集班の紹介文...",
  "モーション班の紹介文...",
  "3DCG班の紹介文...",
  "システム実装班の紹介文...\n\nシステム実装班では、VRライブの制作をメインに行っています。\n内容としては、ワールドの実装、エフェクト等を用いた演出、ラ\nイブシステムの作成を担当していて、クオリティ向上を目的に普\n段から勉強会や小規模ワールド制作に取り組んでいます。また、\nワールドを実装するためには他班とのコミュニケーションが大切\nとなってくるので、集団制作の経験を積むことができます。\nclusterにてVRライブの一般公開も行われているので、是非見に\n来てください！",
];
const teamImages = [
  ["test1.png", "test2.png"], // 運営班
  ["test1.png", "test2.png"], // 広報班
  ["test.png", "images/design2.jpg"], // デザイン班
  ["images/music1.jpg", "images/music2.jpg"],   // 音楽班
  ["images/movie1.jpg", "images/movie2.jpg"],   // 映像編集班
  ["images/motion1.jpg", "images/motion2.jpg"], // モーション班
  ["images/3dcg1.jpg", "images/3dcg2.jpg"],      // 3DCG班
  ["images/system1.jpg", "images/system2.jpg"]   // システム実装班
];

function selectTeam(index) {
  let teams = document.querySelectorAll('.team');
  teams.forEach(team => team.classList.remove('selected'));
  teams[index].classList.add('selected');

  document.getElementById('description').innerText = descriptions[index];

  // 画像を変更
  document.getElementById('team-image1').src = teamImages[index][0];
  document.getElementById('team-image2').src = teamImages[index][1];

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
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// ページ読み込み時に最初のスライドを表示
document.addEventListener('DOMContentLoaded', function () {
  showSlide(currentSlide);
});
