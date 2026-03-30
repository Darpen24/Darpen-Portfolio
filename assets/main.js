const roles = [
  "Data Engineer",
  "BI & Analytics Professional",
  "ETL / ELT Builder",
  "Power BI Dashboard Developer"
];

const typingTarget = document.getElementById("typing-text");

if (typingTarget) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      typingTarget.textContent = currentRole.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      typingTarget.textContent = currentRole.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
  }

  typeEffect();
}
