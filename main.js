const menuButton = document.querySelector(".small-screen-nav");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuScreen = document.querySelector(".mobile-menu-screen");
const closeBtn = document.querySelector("#close-menu");

menuButton.addEventListener("click", function(){
  mobileMenuScreen.style.width = "20em";
  mobileMenu.style.bottom = "0";
  setTimeout(function(){
    closeBtn.style.display = "block";
  },500);
});

closeBtn.addEventListener("click", function(){
  mobileMenuScreen.style.width = "0";
  mobileMenu.style.bottom = "100%";
  closeBtn.style.display = "none";
});

window.addEventListener("click", function(e){
  if(e.target == mobileMenu){
    mobileMenuScreen.style.width = "0";
    mobileMenu.style.bottom = "100%";
    closeBtn.style.display = "none";
  }
});

// Smooth scrolling using Jquery

$(document).ready(function(){

  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  })

})
