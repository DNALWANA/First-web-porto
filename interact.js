document.addEventListener("DOMContentLoaded", () => {

// efek writing text
var typedHi = new Typed("#typed-hi", {
  strings: ["Hi!"],
  typeSpeed: 120,
  showCursor: false, // <-- cursor dimatikan
  onComplete: function () {
    setTimeout(() => {
      var typedIntro = new Typed("#typed-intro", {
        strings: ["Let me introduce myself!"],
        typeSpeed: 100,
        showCursor: false, // <-- cursor dimatikan
      });
    }, 500);
  },
});

// efek 3d photo
const img = document.querySelector(".intro-img img");

if (img) {
  img.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = e.clientX - left; // posisi X kursor relatif
    const y = e.clientY - top;  // posisi Y kursor relatif

    const rotateX = ((y / height) - 0.5) * 20; // rotasi vertikal
    const rotateY = ((x / width) - 0.5) * 20;  // rotasi horizontal

    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
}
});

const projectContainer = document.querySelector(".projectimg");
const projectImages = document.querySelectorAll(".projectimg img");
const descElement = document.getElementById("project-desc");


const projectDescriptions = [
  "Masakyo Homepage - The homepage of the website project that will be launched in the future, Masakyo is a website to help users find food menus and cook them.",
  "Masakyo Asset - Masakyo website development process.",
  "C Calendar - C language based interactive calendar.",
  "3D Project - IoT based 3D object visualization model of recycling bin.",
  "Arduino Project - Sensor monitoring with Arduino Uno for automatic trash can lid.."
];

let currentIndex = 0;

// Fungsi update slide
function updateSlide() {
  const width = projectImages[0].clientWidth;
  projectContainer.style.transform = `translateX(-${currentIndex * width}px)`;
  descElement.textContent = projectDescriptions[currentIndex];
}

// Tombol prev / next
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
  updateSlide();
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projectImages.length;
  updateSlide();
});

// Inisialisasi deskripsi pertama
updateSlide();