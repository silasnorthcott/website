const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".top-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.style.color = "#111";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#3b6fb6";
    }
  });
});
