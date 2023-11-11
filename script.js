let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumbers();
});

function animateNumbers() {
  const numElements = document.querySelectorAll(".num");

  numElements.forEach((numElement) => {
    const targetValue = parseInt(numElement.dataset.val);
    const duration = 2000; 
    const interval = 10; 

    let currentValue = 0;
    const increment = targetValue / (duration / interval);

    const updateNumber = () => {
      currentValue += increment;
      numElement.textContent = Math.floor(currentValue);

      if (currentValue < targetValue) {
        requestAnimationFrame(updateNumber);
      } else {
        numElement.textContent = targetValue;
      }
    };

    updateNumber();
  });
}


function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function showImageSlider() {
  const slides = document.getElementsByClassName("mySlides");
  const imageSlider = document.querySelector(".image-slider");
  for (let i = 0; i < slides.length; i++) {
    const slideClone = slides[i].cloneNode(true);
    slideClone.classList.remove("mySlides");
    slideClone.classList.add("slide");
    imageSlider.appendChild(slideClone);
  }
}

showImageSlider();



