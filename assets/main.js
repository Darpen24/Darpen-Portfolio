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
    nav_home: "Home",
    nav_projects: "Projects",
    projects_title: "All Projects",
    projects_intro:
      "A selected collection of dashboards, analytics workflows and machine learning projects across Power BI, Streamlit, forecasting and end-to-end data solutions.",
    stroke_title: "Stroke Risk Analytics Dashboard",
    stroke_desc:
      "Built an interactive healthcare dashboard on a dataset of 5,110 patients to analyze stroke risk indicators through KPI tracking, demographic filtering and risk-focused visual analysis.",
    cv_title: "CV Optimizer",
    cv_desc:
      "Built a CV optimization tool that compares a resume against a job description, improves summary wording and identifies missing skills using a local LLM workflow with Streamlit.",
    wine_title: "Wine Quality Analysis",
    wine_desc:
      "Performed exploratory data analysis on Portuguese wine datasets using cleaning, wrangling and visualization to study how chemical properties relate to wine quality.",
    electricity_title: "Electricity Insights",
    electricity_desc:
      "Developed an end-to-end electricity and renewable energy analytics solution with forecasting, model comparison and database integration for energy usage analysis.",
    lake_title: "Lake Monitoring and Quality Analysis",
    lake_desc:
      "Designed a predictive monitoring workflow for lake levels, trophic conditions and water quality indicators using environmental and meteorological data.",
    highlights_title: "Project Highlights",
    highlight_1:
      "Stroke Risk Analytics Dashboard: Built an interactive Power BI dashboard with KPI cards, filters and demographic analysis to make healthcare risk patterns easier to interpret and report.",
    highlight_2:
      "CV Optimizer: Developed a Streamlit-based application that aligns CVs with job descriptions using local LLM processing and generates stronger summaries and missing skill suggestions.",
    highlight_3:
      "Wine Quality Analysis: Conducted exploratory analysis and visualization to identify how wine chemistry influences expert-rated quality across red and white wine datasets.",
    highlight_4:
      "Electricity Insights: Built an energy analytics solution with XGBoost and LSTM models, database integration and model comparison to support electricity usage prediction and renewable energy analysis.",
    highlight_5:
      "Lake Monitoring and Quality Analysis: Applied data integration, environmental analysis and predictive reporting concepts to build reusable analytical workflows for lake quality monitoring."
  },
  de: {
    nav_home: "Start",
    nav_projects: "Projekte",
    projects_title: "Alle Projekte",
    projects_intro:
      "Eine ausgewählte Sammlung von Dashboards, Analytics-Workflows und Machine-Learning-Projekten mit Power BI, Streamlit, Forecasting und End-to-End-Datenlösungen.",
    stroke_title: "Stroke Risk Analytics Dashboard",
    stroke_desc:
      "Entwicklung eines interaktiven Healthcare-Dashboards auf Basis eines Datensatzes mit 5.110 Patienten zur Analyse von Schlaganfallrisiken durch KPI-Tracking, demografische Filterung und risikoorientierte visuelle Auswertung.",
    cv_title: "CV Optimizer",
    cv_desc:
      "Entwicklung eines CV-Optimierungstools, das einen Lebenslauf mit einer Stellenbeschreibung vergleicht, die Zusammenfassung verbessert und fehlende Skills mithilfe eines lokalen LLM-Workflows in Streamlit identifiziert.",
    wine_title: "Wine Quality Analysis",
    wine_desc:
      "Durchführung einer explorativen Datenanalyse auf portugiesischen Weindatensätzen mit Bereinigung, Wrangling und Visualisierung zur Untersuchung des Zusammenhangs zwischen chemischen Eigenschaften und Weinqualität.",
    electricity_title: "Electricity Insights",
    electricity_desc:
      "Entwicklung einer End-to-End-Lösung für Strom- und erneuerbare-Energien-Analysen mit Forecasting, Modellvergleich und Datenbankintegration zur Analyse des Energieverbrauchs.",
    lake_title: "Lake Monitoring and Quality Analysis",
    lake_desc:
      "Entwicklung eines prädiktiven Monitoring-Workflows für Seespiegel, trophische Zustände und Wasserqualitätsindikatoren auf Basis von Umwelt- und Wetterdaten.",
    highlights_title: "Projekt-Highlights",
    highlight_1:
      "Stroke Risk Analytics Dashboard: Entwicklung eines interaktiven Power-BI-Dashboards mit KPI-Karten, Filtern und demografischen Analysen, um Gesundheitsrisiken leichter interpretierbar und reportbar zu machen.",
    highlight_2:
      "CV Optimizer: Entwicklung einer Streamlit-basierten Anwendung, die Lebensläufe mithilfe lokaler LLM-Verarbeitung mit Stellenbeschreibungen abgleicht und bessere Zusammenfassungen sowie fehlende Skill-Vorschläge erstellt.",
    highlight_3:
      "Wine Quality Analysis: Durchführung explorativer Analysen und Visualisierungen zur Untersuchung, wie die chemische Zusammensetzung von Wein die bewertete Qualität bei Rot- und Weißwein beeinflusst.",
    highlight_4:
      "Electricity Insights: Entwicklung einer Energiedatenanalyse-Lösung mit XGBoost- und LSTM-Modellen, Datenbankintegration und Modellvergleich zur Unterstützung von Stromverbrauchsprognosen und Analysen erneuerbarer Energien.",
    highlight_5:
      "Lake Monitoring and Quality Analysis: Anwendung von Datenintegration, Umweltanalyse und prädiktivem Reporting zur Entwicklung wiederverwendbarer analytischer Workflows für das Monitoring der Seequalität."
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
