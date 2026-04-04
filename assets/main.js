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

const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_value: "Value",
    nav_contact: "Contact",
    nav_all_projects: "All Projects",

    hero_tagline: "Data Engineer • Analytics • BI",
    hero_desc:
      "Data Engineer with 4.9 years of experience building ETL and ELT pipelines, scalable data workflows and decision-ready analytics solutions using Python, SQL, Azure, BigQuery, Spark and Power BI.",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Contact Me",
    hero_btn_resume: "Resume",

    stat_experience: "Years Experience",
    stat_apps: "Applications Supported",
    stat_reporting: "Reporting Effort Reduced",

    about_title: "Who I Am",
    about_text:
      "I am a Data Engineer with experience across healthcare, financial services and applied data science projects. I build ETL and ELT pipelines, automate reporting workflows and develop reliable analytics solutions that help stakeholders make better decisions. My work combines Python, SQL, Azure, BigQuery, Spark, dbt and Power BI to turn complex raw data into structured, scalable and business-ready outputs.",

    experience_title: "Professional Experience",
    exp1_1:
      "Built ETL and ELT workflows and dashboarding solutions for operational application data using Python, SQL, Azure Data Factory, Azure Storage and Power BI.",
    exp1_2:
      "Improved reporting visibility across IT services and supported a 15 percent reduction in manual reporting effort through structured workflows and dashboards.",
    exp1_3:
      "Designed incident analytics dashboards to track open versus resolved cases, recurring service issues and application demand trends.",
    exp1_4:
      "Supported better SLA monitoring and follow up on support requests by turning operational data into decision-ready insights.",

    exp2_1:
      "Led data delivery for 22 financial applications by building automated ETL pipelines using Azure Data Factory, Azure SQL, Azure Storage and Data Lake.",
    exp2_2:
      "Implemented data validation checks and CI/CD-supported workflows to improve data accessibility and reduce manual effort by 10 percent.",
    exp2_3:
      "Designed scalable transformation logic and reporting layers for financial application data across Azure-based storage systems.",
    exp2_4:
      "Improved dashboard delivery and business visibility, supporting a 5 percent uplift in revenue-driven decision outcomes across US operations.",

    featured_title: "Featured Project",
    view_more_projects: "View More Projects",
    stroke_title: "Stroke Risk Analytics Dashboard",
    stroke_featured_desc:
      "Interactive Power BI dashboard built on a healthcare dataset of 5,110 patients to analyze stroke risk indicators through KPI tracking, demographic filtering and risk-focused visual analysis.",
    what_built_title: "What I built",
    stroke_built:
      "I designed a dashboard with KPI cards, age analysis, BMI category views, smoking-status breakdowns and health-risk comparisons to make patient-level insights easier to understand.",
    why_matters_title: "Why it matters",
    stroke_impact:
      "The dashboard helps highlight how stroke prevalence relates to age, hypertension, heart disease, BMI and glucose patterns, turning healthcare data into a more actionable reporting view.",

    skills_title: "Skill Levels",
    level_advanced: "Advanced",
    level_strong: "Strong",
    level_working: "Working",
    level_fluent: "Fluent",
    level_intermediate: "Intermediate",
    level_native: "Native",

    value_title: "What I Bring",
    strength1_title: "Data Engineering Strength",
    strength1_text:
      "I build structured and scalable ETL and ELT workflows that improve data reliability, reduce manual effort and support decision-ready reporting.",
    strength2_title: "Analytics and BI Strength",
    strength2_text:
      "I translate business and operational needs into clear dashboards, KPIs and analytical views that help stakeholders act faster and with more confidence.",

    contact_title: "Get in Touch",
    contact_text:
      "Open to opportunities in Data Engineering, Analytics Engineering, BI and Reporting across Germany and Europe."
  },

  de: {
    nav_about: "Über mich",
    nav_experience: "Erfahrung",
    nav_projects: "Projekte",
    nav_skills: "Fähigkeiten",
    nav_value: "Mehrwert",
    nav_contact: "Kontakt",
    nav_all_projects: "Alle Projekte",

    hero_tagline: "Data Engineer • Analytics • BI",
    hero_desc:
      "Data Engineer mit 4,9 Jahren Erfahrung im Aufbau von ETL- und ELT-Pipelines, skalierbaren Datenworkflows und entscheidungsrelevanten Analytics-Lösungen mit Python, SQL, Azure, BigQuery, Spark und Power BI.",
    hero_btn_projects: "Projekte ansehen",
    hero_btn_contact: "Kontakt",
    hero_btn_resume: "Lebenslauf",

    stat_experience: "Jahre Erfahrung",
    stat_apps: "Anwendungen unterstützt",
    stat_reporting: "Weniger Reporting-Aufwand",

    about_title: "Wer ich bin",
    about_text:
      "Ich bin Data Engineer mit Erfahrung in Healthcare, Financial Services und angewandten Data-Science-Projekten. Ich entwickle ETL- und ELT-Pipelines, automatisiere Reporting-Workflows und baue verlässliche Analytics-Lösungen, die Stakeholdern bessere Entscheidungen ermöglichen. Dabei nutze ich Python, SQL, Azure, BigQuery, Spark, dbt und Power BI, um komplexe Rohdaten in strukturierte, skalierbare und businessrelevante Ergebnisse zu verwandeln.",

    experience_title: "Berufserfahrung",
    exp1_1:
      "Entwicklung von ETL- und ELT-Workflows sowie Dashboard-Lösungen für operative Anwendungsdaten mit Python, SQL, Azure Data Factory, Azure Storage und Power BI.",
    exp1_2:
      "Verbesserung der Reporting-Transparenz über IT-Services hinweg und Unterstützung einer Reduktion des manuellen Reporting-Aufwands um 15 Prozent durch strukturierte Workflows und Dashboards.",
    exp1_3:
      "Konzeption von Incident-Analytics-Dashboards zur Verfolgung offener und gelöster Fälle, wiederkehrender Serviceprobleme und Nutzungstrends.",
    exp1_4:
      "Unterstützung eines besseren SLA-Monitorings und Follow-ups bei Supportanfragen durch die Umwandlung operativer Daten in entscheidungsrelevante Erkenntnisse.",

    exp2_1:
      "Verantwortung für die Datenbereitstellung von 22 Finanzanwendungen durch den Aufbau automatisierter ETL-Pipelines mit Azure Data Factory, Azure SQL, Azure Storage und Data Lake.",
    exp2_2:
      "Implementierung von Datenvalidierungen und CI/CD-gestützten Workflows zur Verbesserung der Datenverfügbarkeit und Reduktion des manuellen Aufwands um 10 Prozent.",
    exp2_3:
      "Entwicklung skalierbarer Transformationslogiken und Reporting-Schichten für Finanzanwendungsdaten auf Azure-basierten Speichersystemen.",
    exp2_4:
      "Verbesserung der Dashboard-Bereitstellung und Business-Transparenz mit Unterstützung eines 5-prozentigen Anstiegs umsatzbezogener Entscheidungsresultate im US-Geschäft.",

    featured_title: "Ausgewähltes Projekt",
    view_more_projects: "Mehr Projekte ansehen",
    stroke_title: "Stroke Risk Analytics Dashboard",
    stroke_featured_desc:
      "Interaktives Power-BI-Dashboard auf Basis eines Gesundheitsdatensatzes mit 5.110 Patienten zur Analyse von Schlaganfallrisiken durch KPI-Tracking, demografische Filterung und risikoorientierte visuelle Auswertung.",
    what_built_title: "Was ich entwickelt habe",
    stroke_built:
      "Ich habe ein Dashboard mit KPI-Karten, Altersanalysen, BMI-Kategorien, Rauchstatus-Auswertungen und Gesundheitsrisiko-Vergleichen entwickelt, um patientenbezogene Erkenntnisse leichter verständlich zu machen.",
    why_matters_title: "Warum es wichtig ist",
    stroke_impact:
      "Das Dashboard zeigt, wie Schlaganfallhäufigkeit mit Alter, Bluthochdruck, Herzerkrankungen, BMI und Glukosemustern zusammenhängt und macht Gesundheitsdaten dadurch besser nutzbar.",

    skills_title: "Kenntnisse",
    level_advanced: "Fortgeschritten",
    level_strong: "Stark",
    level_working: "Praxiskenntnisse",
    level_fluent: "Fließend",
    level_intermediate: "Mittelstufe",
    level_native: "Muttersprache",

    value_title: "Was ich mitbringe",
    strength1_title: "Stärke im Data Engineering",
    strength1_text:
      "Ich entwickle strukturierte und skalierbare ETL- und ELT-Workflows, die Datenqualität verbessern, manuellen Aufwand reduzieren und entscheidungsrelevantes Reporting unterstützen.",
    strength2_title: "Stärke in Analytics und BI",
    strength2_text:
      "Ich übersetze fachliche und operative Anforderungen in klare Dashboards, KPIs und analytische Sichten, die Stakeholdern schnellere und sicherere Entscheidungen ermöglichen.",

    contact_title: "Kontakt",
    contact_text:
      "Offen für Möglichkeiten in Data Engineering, Analytics Engineering, BI und Reporting in Deutschland und Europa."
  }
};

let currentLang = localStorage.getItem("portfolioLang") || "en";

const typingTarget = document.getElementById("typing-text");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingTimeout = null;

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolioLang", lang);
  document.documentElement.lang = lang;

  applyTranslations(lang);

  const enBtn = document.getElementById("lang-en");
  const deBtn = document.getElementById("lang-de");

  if (enBtn) enBtn.classList.toggle("active", lang === "en");
  if (deBtn) deBtn.classList.toggle("active", lang === "de");

  resetTyping();
}

function resetTyping() {
  if (!typingTarget) return;

  if (typingTimeout) clearTimeout(typingTimeout);

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
    enBtn.addEventListener("click", () => updateLanguage("en"));
  }

  if (deBtn) {
    deBtn.addEventListener("click", () => updateLanguage("de"));
  }

  updateLanguage(currentLang);
});
