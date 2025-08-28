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