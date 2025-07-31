// Scroll reveal for sections
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach((sec) => {
    const secTop = sec.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (secTop < trigger) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
};

// Scroll nav highlight (optional)
const navLinks = document.querySelectorAll(".nav-links a");

const highlightNav = () => {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index].classList.add("active");
};

// Add basic transitions
sections.forEach((sec) => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.6s ease-out";
});

// Event listeners
window.addEventListener("scroll", () => {
  revealOnScroll();
  highlightNav();
});

window.addEventListener("load", () => {
  revealOnScroll(); // in case top sections are already visible
});
