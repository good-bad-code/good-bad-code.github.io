"use strict";

/*
 * good-bad-code
 * Developer Portfolio
 */


/* =========================
   Smooth Navigation
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================
   Scroll Reveal
========================= */

const revealElements = document.querySelectorAll(
  ".panel, .project, .tag, .github-box"
);


revealElements.forEach((element) => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {
  observer.observe(element);
});


/* =========================
   Current Year
========================= */

const yearElement = document.querySelector(
  "footer .green"
);

if (yearElement) {

  const currentYear = new Date().getFullYear();

  yearElement.parentElement.innerHTML =
    `<span class="green">good-bad-code</span> © ${currentYear}`;

}


/* =========================
   Terminal Typing Effect
========================= */

const terminalLabel =
  document.querySelector(".terminal-label");


let labelIndex = 0;

const originalLabel =
  terminalLabel?.textContent.trim();


if (terminalLabel && originalLabel) {

  terminalLabel.textContent = "";

  function typeTerminal() {

    if (labelIndex >= originalLabel.length) {
      return;
    }

    terminalLabel.textContent +=
      originalLabel[labelIndex];

    labelIndex++;

    setTimeout(typeTerminal, 80);
  }

  setTimeout(typeTerminal, 500);
}


/* =========================
   Project Hover
========================= */

document.querySelectorAll(".project").forEach((project) => {

  project.addEventListener("mouseenter", () => {

    project.style.setProperty(
      "--mouse-x",
      "50%"
    );

    project.style.setProperty(
      "--mouse-y",
      "50%"
    );

  });

});


/* =========================
   Console Easter Egg
========================= */

console.log(
  "%c good-bad-code ",
  "background:#39ff88;color:#050805;font-weight:bold;padding:6px 10px;"
);

console.log(
  "%cWelcome, developer.",
  "color:#39ff88;font-size:14px;"
);

console.log(
  "%c// TODO: fix everything",
  "color:#4c6854;font-size:12px;"
);
