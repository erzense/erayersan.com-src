const profileImage = document.getElementById("profileImage");
const constText = document.getElementById("second-text");
const text = "ERAY ERSAN";
const emptyText = " ";
const dosyaIcon = document.getElementById("file");
const gameIcon = document.getElementById("games");
const pages = document.getElementsByClassName("folder-field-windows");
const folder_navbar = document.getElementById("folder-navbar-text");
const folder_field_left_arrow = document.getElementById("folder-left-arrow");
const games_field_left_arrow = document.getElementById("back-left-arrow");

console.log(dosyaIcon);
console.log(pages);
console.log(folder_navbar.textContent);

function closePages(){
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.visibility = "hidden";
    
  }
  pages[0].style.visibility = "visible";
}

closePages();

var liste = ["ERAY ERSAN", "A LAW STUDENT", "A FREELANCER", "A WEB DEVELOPER","A VIDEO GAME DESIGNER"];
var wordIndex = 0; // Hangi kelimenin yazdırıldığını takip etmek için bir indeks değişkeni

function printLetters() {
  var word = liste[wordIndex]; // Şu anki kelimeyi al
  var harfIndex = 0; // Hangi harfin yazdırıldığını takip etmek için bir indeks değişkeni
  var intervalId = setInterval(function() {
    // Belirli bir süre (0.5 saniye) içinde her bir harfi ekrana yazdır
    constText.textContent+=word[harfIndex];
    harfIndex++;

    // Kelimenin son harfi yazdırıldıysa
    if (harfIndex === word.length) {
      clearInterval(intervalId); // Interval'i durdur
      wordIndex++; // Sonraki kelimeye geçmek için kelime indeksini artır
      constText.textContent == "";
      // Tüm kelimeler yazdırıldıysa, tekrar başa dön
      if (wordIndex === liste.length) {
        wordIndex = 0;
      }
      
      // Bir sonraki kelimeye geçmeden önce 1 saniye bekle
      setTimeout(function() {
        constText.textContent = emptyText;
        printLetters();
        
      }, 500);
    }
  }, 100); // Her bir harf için 0.5 saniyede bir interval
}

// Yazdırma işlemini başlat
printLetters();

dosyaIcon.addEventListener("dblclick",GoToPageWeb);
gameIcon.addEventListener("dblclick",GoToPageGames);
folder_field_left_arrow.addEventListener("click",GoBackPage);
games_field_left_arrow.addEventListener("click",GoHome);

function GoToPageWeb(){
  
    closePages()
    pages[0].style.visibility = "hidden";
    pages[1].style.visibility = "visible";
    
    folder_navbar.textContent ="Home/ErayErsan/Desktop/Websites";

}
function GoToPageGames(){
  
  closePages()
  pages[0].style.visibility = "hidden";
  pages[2].style.visibility = "visible";
  
  folder_navbar.textContent ="Home/ErayErsan/Desktop/Games";

}

function GoBackPage(){
  closePages()
  pages[1].style.visibility = "hidden";
  folder_navbar.textContent = "Home/ErayErsan/Desktop/";
}
function GoHome(){
  closePages()
  pages[2].style.visibility = "hidden";
  folder_navbar.textContent = "Home/ErayErsan/Desktop/";
}


