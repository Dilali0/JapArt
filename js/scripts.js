let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const dots = document.getElementsByClassName("dot");
  
  if (n > dots.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = dots.length; }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  // Highlight the active dot
  dots[slideIndex - 1].className += " active-dot";
}
