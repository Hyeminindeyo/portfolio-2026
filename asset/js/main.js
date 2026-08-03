const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

const revealElements = document.querySelectorAll(".reveal");

const showElements = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("on");
    }
  });
};

const observer = new IntersectionObserver(showElements);

revealElements.forEach((element) => {
  observer.observe(element);
});
