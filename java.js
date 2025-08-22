    // ✅ Typing Effect
    const phrases = ["Web Developer", "UI Designer", "Creative Coder", "Problem Solver"];
    let phraseIndex = 0;
    let charIndex = 0;
    const el = document.getElementById("typing-text");
  
    function type() {
      if (charIndex < phrases[phraseIndex].length) {
        el.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
      } else {
        setTimeout(erase, 1500);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        el.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      }
    }
  
    // ✅ Dark Mode Toggle
    const toggle = document.getElementById("darkModeToggle");
  
    if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute("data-theme", "dark");
      toggle.textContent = "☀️";
    }
  
    toggle.addEventListener("click", () => {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.body.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
      } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
      }
    });
  
    // ✅ Animasi Saat Scroll (Intersection Observer)
  const fadeUps = document.querySelectorAll(".fade-up");
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

fadeUps.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  fadeInObserver.observe(el);
});
  
// ✅ Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault(); // biar ga reload halaman

  let message = document.getElementById("message").value.trim();
  if (message) {
    showSnackbar("Your message: " + message);
    this.reset(); // reset form setelah submit
  }
});

function showSnackbar(text) {
  let snackbar = document.getElementById("snackbar");
  snackbar.textContent = text;
  snackbar.classList.add("show");

  setTimeout(function () {
    snackbar.classList.remove("show");
  }, 3000);
}

      
