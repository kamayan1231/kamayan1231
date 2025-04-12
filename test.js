const images = ["test1.png", "test2.png", "test3.png", "test4.png"];
let currentIndex = 0;

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}

const descriptions = [
  "広報班の紹介文...\n\nサークルの活動やイベント情報を活動の写真付きで外部に発信する重要な役割を担っています。SNSを通じて、最新情報をタイムリーにお届けし、サークルの魅力を広く知ってもらうことを目指しています。特に、ライブでは事前の告知から当日の会場案内、開始・終了時間の告知までを丁寧に行い、スムーズな運営をサポートします。また、サークルの部誌も作成し\nており、各班の紹介やライブの制作過程、イベントレポートなど、充実したコンテンツをお届けしています。広報班は、サークルの活動を広めることで、多くの人々にサークルの魅力を伝えることに全力を尽くしています。",
  "デザイン班の紹介文...\n\nデザイン班ではVL研のデザイン全般を行っています。各ライブのメインビジュアル作成やパンフレットデザイン、VRワールドのデザインやSNSへの投稿用画像の作成等イラストのみにとどまらず様々な活動を行っています。デザイン班だからといって絵ばかり描くのではなく、仕事用途に応じて必要なスキルが変わってくるためAdobe illustratorやCLIP STUDIO PAINTなど個人によって使用ソフトも異なります\n他の班とは違い、様々な事にチャレンジ出来る環境があるのもデザイン班の魅力の1つです！私達と一緒にデザイン班で部活を支えていきませんか？",

  "音楽班の紹介文...\n\n音楽班の仕事は主にcover制作になります。作曲者も数名在籍していますので作曲も（作曲講座も）行っております。音響系はサッパリわからんので取り扱っていません。将来的に音楽班が扱うようになれば専門性が増して面白いですね。（宣伝：作曲を主としている大阪工業大学枚方キャンパスの部活動はCSL(Creative Sound Lab.)になります。）さて、メイン活動のcover制作について語るとしましょうか。基本的にcover制作はライブに向けての活動になります。もちろん依頼があればそれ以外でも制作します。期間はライブ制作開始から1カ月程度になっています。個人差はあれど、1曲あたり36時間もあれば完成します。他の制作と比べると軽い部類と言えるでしょう。cover制作の流れを以下に記します。【midiデータ作成】cover制作はmidiデータを作成するところから始まります。midiデータというのは、カラオケの音程バーのようにノーツ（音符）が打ち込まれたデータのことです（画像１参照）。これだけ聞くと音感が必須なのではと感じる方もいるでしょう。ご安心を、そんな鬼畜なことは言いません。音楽活動に特別な能力は必要ありません。音感が無い前提でcoverする曲を選定しています。【歌詞打ち込み】midiデータ制作が終われば工程は歌詞の打ち込みに移ります。初音ミクや重音テトにcoverしてもらうことがほとんどです。ここで調教（調声）も行います。まあ使うソフトウェアによってやり方が異なるので特に語ることはございません（画像2,3参照）。【MIX】歌詞打ち込みも済めば次はMIXになります（画像4,5参照）。こいつがまあ厄介で、よくわからんエフェクトたちをインサートして、よくわからんツマミをグリグリと回してやらないかんのです。知らないことは調べるわけですが、どこから手を付ければいいのやらといった感じです。ご安心を、講座を開いてライブで使う分には問題ないラインまで教えます（私自身全然詳しくないですが……）。さて、こんなところでしょうか。拙文をここまで読んで頂きありがとうございます。……この記事を読んでいらっしゃるのは来たる大学生活に胸を躍らせる高校生でしょうか。それともライブをご覧になって興味を持たれた方でしょうか。VL研は内部生外部生、高校生大学生社会人分け隔てなく参加可能です。この記事を読んで「参加したいなあ」なんて思っていただけましたら幸いです。以上、音楽班班長ぬますでした。",
  "映像編集班の紹介文...",
  "モーション班の紹介文...",
  "3DCG班の紹介文...",
  "システム実装班の紹介文..."
];

function selectTeam(index) {
  const teams = document.querySelectorAll(".team");
  const B = document.getElementById("B");

  // すべての班リストから"selected"クラスを削除
  teams.forEach(team => team.classList.remove("selected"));

  // 選択された班に"selected"クラスを追加
  teams[index].classList.add("selected");

  // 班の説明文を更新
  document.getElementById("description").innerText = descriptions[index];

  // 班に応じて画像のサイズを変更
  switch (index) {
    case 0: // 広報班
      B.style.width = "70%";
      B.style.height = "auto";
      break;
    case 1: // デザイン班
      B.style.width = "70%";
      B.style.height = "auto";
      break;
    case 2: // 音楽班
      B.style.width = "70%";
      B.style.height = "90%";
      break;
    case 3: // 映像編集班
      B.style.width = "70%";
      B.style.height = "100rem";

      break;
    case 4: // モーション班
      B.style.width = "70%";
      B.style.height = "auto";
      break;
    case 5: // 3DCG班
      B.style.width = "70%";
      B.style.height = "auto";
      break;
    case 6: // システム実装班
      B.style.width = "70%";
      B.style.height = "auto";
      break;
    default:
      B.style.width = "80%";
      B.style.height = "70%";
  }

  // 現在のインデックスを更新
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
