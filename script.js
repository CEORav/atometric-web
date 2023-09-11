let slideIndex = 0;
const slides = document.querySelectorAll('.logo'); // Use the "logo" class

// Initially hide the second image (logo)
slides[1].style.display = 'none';

function showSlide(n) {
    slides.forEach((slide) => (slide.style.display = 'none'));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}
setInterval(nextSlide, 3000); // Change image every 3 seconds

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

showSlide(slideIndex);

//** 2ND THING BY CONTRACTING **/




//**EMAIL SENDING **/ /


function sendEmail() {
    const email = "info@atometric.com"; 
    window.location.href = "mailto:" + email;
}

//**MACHINE MODALS **//

function sendEmail() {
    alert("Thank you for reaching out, You will hear from us soon!");
  }

  const rotatingImage = document.getElementById('cell');

// Track cursor position
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 5;
    const y = (window.innerHeight / 2 - e.clientY) / 5;
    
    // Apply rotation and translation
    rotatingImage.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateZ(50px)`;
});







