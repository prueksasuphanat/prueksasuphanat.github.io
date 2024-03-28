// Toggle menu
function ToggleMenu() {
    const ToggleMenu = document.querySelector(".nav__menu");
    const CloseMenu = document.querySelector(".nav__close");
    const ToggleHide = document.querySelector(".nav__toggle");

    ToggleMenu.style.display = "block";
    CloseMenu.style.display = "block";
    ToggleHide.style.display = "none";
}

function CloseMenu() {
    const CloseMenu = document.querySelector(".nav__menu");
    const ToggleHide = document.querySelector(".nav__toggle");
    const Closebtn = document.querySelector(".nav__close")
    
    
    ToggleHide.style.display = "block";
    Closebtn.style.display ="none";
    CloseMenu.style.display = "none";

}

//Dark Mode
function Darkmode() {
    const navbar = document.querySelector(".header");
    const banner = document.querySelector(".banner");
    const waves = document.querySelector(".waves")
    const body = document.body
    const Button = document.querySelector(".login__btn")
    const BlogHeader = document.querySelector(".blog__data")
    const Searchbar  = document.querySelector(".search__bar")


    body.classList.toggle("dark-mode")
    navbar.classList.toggle("dark-mode");
    banner.classList.toggle("dark-mode");
    waves.classList.toggle("dark")
    Button.classList.toggle("dark-mode")
    BlogHeader.classList.toggle("dark-mode")
    Searchbar.classList.toggle("dark-mode")

 }
 function boldText() {
    var textarea = document.getElementById("myTextarea");
    var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var newText = '<b>' + selectedText + '</b>';
    var textBefore = textarea.value.substring(0, textarea.selectionStart);
    var textAfter = textarea.value.substring(textarea.selectionEnd, textarea.value.length);
    textarea.value = textBefore + newText + textAfter;
  }
  
  function italicText() {
    var textarea = document.getElementById("myTextarea");
    var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var newText = '<i>' + selectedText + '</i>';
    var textBefore = textarea.value.substring(0, textarea.selectionStart);
    var textAfter = textarea.value.substring(textarea.selectionEnd, textarea.value.length);
    textarea.value = textBefore + newText + textAfter;
  }
  
  function underlineText() {
    var textarea = document.getElementById("myTextarea");
    var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var newText = '<u>' + selectedText + '</u>';
    var textBefore = textarea.value.substring(0, textarea.selectionStart);
    var textAfter = textarea.value.substring(textarea.selectionEnd, textarea.value.length);
    textarea.value = textBefore + newText + textAfter;
  }
  