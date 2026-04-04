const roles = {
  en: [
    "Data Engineer",
    "Analytics Engineer",
    "ETL / ELT Pipeline Builder",
    "Power BI & Reporting Developer"
  ],
  de: [
    "Data Engineer",
    "Analytics Engineer",
    "ETL / ELT Pipeline Builder",
    "Power BI & Reporting Entwickler"
  ]
};

let currentLang = localStorage.getItem("portfolioLang") || "en";

const typingTarget = document.getElementById("typing-text");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimeout = null;

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolioLang", lang);
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-en][data-de]");
  elements.forEach((el) => {
    const newText = el.getAttribute(`data-${lang}`);
    if (newText !== null) {
      el.textContent = newText;
    }
  });

  const enBtn = document.getElementById("lang-en");
  const deBtn = document.getElementById("lang-de");

  if (enBtn) {
    enBtn.classList.toggle("active", lang === "en");
  }

  if (deBtn) {
    deBtn.classList.toggle("active", lang === "de");
  }

  resetTyping();
}

function resetTyping() {
  if (!typingTarget) return;

  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }

  roleIndex = 0;
  charIndex = 0;
  deleting = false;
  typingTarget.textContent = "";
  typeEffect();
}

function typeEffect() {
  if (!typingTarget) return;

  const currentRoles = roles[currentLang];
  const currentRole = currentRoles[roleIndex];

  if (!deleting) {
    typingTarget.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      typingTimeout = setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingTarget.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % currentRoles.length;
    }
  }

  typingTimeout = setTimeout(typeEffect, deleting ? 45 : 90);
}

document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("lang-en");
  const deBtn = document.getElementById("lang-de");

  if (enBtn) {
    enBtn.addEventListener("click", (e) => {
      e.preventDefault();
      updateLanguage("en");
    });
  }

  if (deBtn) {
    deBtn.addEventListener("click", (e) => {
      e.preventDefault();
      updateLanguage("de");
    });
  }

  updateLanguage(currentLang);
});
