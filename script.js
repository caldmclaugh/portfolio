let toggleNavStatus = false;

let toggleNav = function() {
  let getMenu = document.querySelector(".nav-menu");
  let getMenuUl = document.querySelector(".nav-menu ul");
  let getMenuLinks = document.querySelectorAll(".nav-menu a");

  if(toggleNavStatus === false) {
    getMenuUl.style.visibility ="visible";
    getMenu.style.width="100%";

    let arrayLength = getMenuLinks.length;
    for (let i=0; i < arrayLength; i++) {

      getMenuLinks[i].style.opacity = "1";
}
    toggleNavStatus = true;
    }

    else if(toggleNavStatus === true) {

      getMenu.style.width="0";


      let arrayLength = getMenuLinks.length;
      for (let i=0; i < arrayLength; i++) {
        getMenuLinks[i].style.opacity = "0";
}
        getMenuUl.style.visibility ="hidden";

      toggleNavStatus = false;
      }
}

// var modal = document.getElementById("myModal-sign-in");
// var img = document.getElementById("myImg-sign-in");
// var modalImg = document.getElementById("img01-sign-in");
// var captionText = document.getElementById("caption-sign-in");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
//
// var span = document.getElementsByClassName("close-sign-in")[0];
//
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
//
// var modal = document.getElementById("myModal-upload");
//
//
// var img = document.getElementById("myImg-upload");
// var modalImg = document.getElementById("img01-upload");
// var captionText = document.getElementById("caption-upload");
// img.onclick = function(){
// modal.style.display = "block";
// modalImg.src = this.src;
// captionText.innerHTML = this.alt;
// }
//
//
// var span = document.getElementsByClassName("close-upload")[0];
//
//
// span.onclick = function() {
// modal.style.display = "none";
// }
//
//
//
// var modal = document.getElementById("myModal-organize");
//
//
// var img = document.getElementById("myImg-organize");
// var modalImg = document.getElementById("img01-organize");
// var captionText = document.getElementById("caption-organize");
// img.onclick = function(){
// modal.style.display = "block";
// modalImg.src = this.src;
// captionText.innerHTML = this.alt;
// }
//
//
// var span = document.getElementsByClassName("close-organize")[0];
//
//
// span.onclick = function() {
// modal.style.display = "none";
// }
//
// <script>
// // Open the Modal
// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }
//
// // Close the Modal
// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }
// </script>

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
