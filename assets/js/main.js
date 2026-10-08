const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links1");

// =========================================
// ACTIVE NAVIGATION
// =========================================

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});

// =========================================
// MOBILE MENU
// =========================================

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  const icon = menuToggle.querySelector("i");

  if (navMenu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// =========================================
// DARK / LIGHT MODE
// =========================================

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

sun.addEventListener("click", () => {
  document.body.classList.add("light-mode");

  sun.style.display = "none";
  moon.style.display = "block";
});

moon.addEventListener("click", () => {
  document.body.classList.remove("light-mode");

  moon.style.display = "none";
  sun.style.display = "block";
});

// =========================================
// ABOUT MODAL
// =========================================

const aboutModal = document.getElementById("aboutModal");
const openAboutModal = document.getElementById("openAboutModal");
const closeAboutModal = document.getElementById("closeAboutModal");

openAboutModal.addEventListener("click", function () {
  aboutModal.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeAboutModal.addEventListener("click", function () {
  aboutModal.classList.remove("show");
  document.body.style.overflow = "";
});

aboutModal.addEventListener("click", function (event) {
  if (event.target === aboutModal) {
    aboutModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

// =========================================
// SKILLS MODAL
// =========================================

const skillsModal = document.getElementById("skillsModal");
const openSkillsModal = document.getElementById("openSkillsModal");
const closeSkillsModal = document.getElementById("closeSkillsModal");
const skillsContactBtn = document.getElementById("skillsContactBtn");

openSkillsModal.addEventListener("click", function (event) {
  event.preventDefault();

  skillsModal.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeSkillsModal.addEventListener("click", function () {
  skillsModal.classList.remove("show");
  document.body.style.overflow = "";
});

skillsModal.addEventListener("click", function (event) {
  if (event.target === skillsModal) {
    skillsModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

if (skillsContactBtn) {
  skillsContactBtn.addEventListener("click", function () {
    skillsModal.classList.remove("show");
    document.body.style.overflow = "";
  });
}

// =========================================
// ESC KEY - CLOSE MODALS
// =========================================

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (aboutModal) {
      aboutModal.classList.remove("show");
    }

    if (skillsModal) {
      skillsModal.classList.remove("show");
    }

    document.body.style.overflow = "";
  }
});

// =========================================
// ALL PROJECTS MODAL
// =========================================

const projectsModal = document.getElementById("projectsModal");
const openProjectsModal = document.getElementById("openProjectsModal");
const closeProjectsModal = document.getElementById("closeProjectsModal");

openProjectsModal.addEventListener("click", function (event) {
  event.preventDefault();

  projectsModal.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeProjectsModal.addEventListener("click", function () {
  projectsModal.classList.remove("show");
  document.body.style.overflow = "";
});

projectsModal.addEventListener("click", function (event) {
  if (event.target === projectsModal) {
    projectsModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    projectsModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

/* =========================================
   CERTIFICATES MODAL
========================================= */

const openCertificatesModal = document.getElementById("openCertificatesModal");

const certificatesModal = document.getElementById("certificatesModal");

const closeCertificatesModal = document.getElementById(
  "closeCertificatesModal",
);

/* Open Modal */

openCertificatesModal.addEventListener("click", function (e) {
  e.preventDefault();

  certificatesModal.classList.add("active");

  document.body.style.overflow = "hidden";
});

/* Close Modal */

closeCertificatesModal.addEventListener("click", function () {
  certificatesModal.classList.remove("active");

  document.body.style.overflow = "";
});

/* Close when clicking outside */

certificatesModal.addEventListener("click", function (e) {
  if (e.target === certificatesModal) {
    certificatesModal.classList.remove("active");

    document.body.style.overflow = "";
  }
});

/* Close with ESC */

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    certificatesModal.classList.remove("active");

    document.body.style.overflow = "";
  }
});

/* =========================================
   GITHUB STATISTICS
========================================= */

const GITHUB_USERNAME = "mtalhaahad-prog";
const githubLoading = document.getElementById("githubLoading");
const githubContent = document.getElementById("githubContent");
const githubError = document.getElementById("githubError");
const githubErrorText = document.getElementById("githubErrorText");
const githubRetry = document.getElementById("githubRetry");
const githubAvatar = document.getElementById("githubAvatar");
const githubName = document.getElementById("githubName");
const githubUsername = document.getElementById("githubUsername");
const githubBio = document.getElementById("githubBio");
const repoCount = document.getElementById("repoCount");
const starCount = document.getElementById("starCount");
const followerCount = document.getElementById("followerCount");
const followingCount = document.getElementById("followingCount");
const languageBars = document.getElementById("languageBars");
const githubContributions = document.getElementById("githubContributions");
const githubChartFallback = document.getElementById("githubChartFallback");

// The contribution chart is provided by a third-party service; if it fails,
// link to the actual activity page rather than displaying a broken image.
if (githubContributions) {
  githubContributions.addEventListener("error", () => {
    githubContributions.hidden = true;
    githubContributions.style.display = "none";
    if (githubChartFallback) githubChartFallback.hidden = false;
  });
  githubContributions.addEventListener("load", () => {
    githubContributions.hidden = false;
    githubContributions.style.display = "block";
    if (githubChartFallback) githubChartFallback.hidden = true;
  });
}

// Abort the network request on timeout rather than leaving timers running.
async function fetchGitHubJSON(url, timeout = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    });
    if (!response.ok) {
      if (response.status === 403 || response.status === 429) {
        throw new Error("GitHub's public API is temporarily rate-limited.");
      }
      throw new Error(`GitHub API returned ${response.status}.`);
    }
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

function showGitHubLoading() {
  if (githubLoading) githubLoading.style.display = "flex";
  if (githubContent) githubContent.style.display = "none";
  if (githubError) githubError.style.display = "none";
  for (const item of [repoCount, starCount, followerCount, followingCount]) {
    if (item) item.textContent = "—";
  }
  if (languageBars) languageBars.textContent = "";
}

function showGitHubContent() {
  if (githubLoading) githubLoading.style.display = "none";
  if (githubError) githubError.style.display = "none";
  if (githubContent) githubContent.style.display = "grid";
}

function showGitHubError(message) {
  if (githubLoading) githubLoading.style.display = "none";
  if (githubContent) githubContent.style.display = "none";
  if (githubErrorText) githubErrorText.textContent = message;
  if (githubError) githubError.style.display = "flex";
}

function showLanguageMessage(message) {
  if (!languageBars) return;
  languageBars.replaceChildren();
  const p = document.createElement("p");
  p.className = "language-empty";
  p.textContent = message;
  languageBars.appendChild(p);
}

// Each public, non-fork repository counts once toward its primary language.
// This avoids 20+ extra API calls per page visit and is labeled accordingly.
function loadGitHubLanguages(repositories) {
  if (!languageBars) return;
  languageBars.replaceChildren();
  const counts = new Map();
  for (const repo of repositories) {
    if (repo.fork || !repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) || 0) + 1);
  }
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
  if (!sorted.length || !total) {
    showLanguageMessage("No language data is available for public repositories.");
    return;
  }
  for (const [language, count] of sorted) {
    const percentage = ((count / total) * 100).toFixed(1);
    const item = document.createElement("div");
    item.className = "language-item";
    const info = document.createElement("div");
    info.className = "language-info";
    const name = document.createElement("span");
    name.className = "language-name";
    name.textContent = language;
    const percent = document.createElement("span");
    percent.className = "language-percent";
    percent.textContent = `${percentage}%`;
    info.append(name, percent);
    const track = document.createElement("div");
    track.className = "language-track";
    const fill = document.createElement("div");
    fill.className = "language-fill";
    fill.style.width = `${percentage}%`;
    track.appendChild(fill);
    item.append(info, track);
    languageBars.appendChild(item);
  }
}

// GitHub paginates repositories; get all publicly visible pages when possible
// so the stars and language counts aren't silently truncated at 100 repos.
async function loadPublicRepositories(expectedCount) {
  const repositories = [];
  for (let page = 1; page <= 10; page++) {
    const items = await fetchGitHubJSON(
      `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?per_page=100&page=${page}&type=public`,
    );
    if (!Array.isArray(items)) throw new Error("Unexpected GitHub repository response.");
    repositories.push(...items);
    if (items.length < 100 || repositories.length >= expectedCount) return repositories;
  }
  throw new Error("Repository list is larger than the supported display limit.");
}

async function loadGitHubStats() {
  showGitHubLoading();
  try {
    const user = await fetchGitHubJSON(
      `https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}`,
    );
    if (githubAvatar && user.avatar_url) githubAvatar.src = user.avatar_url;
    if (githubName) githubName.textContent = user.name || "Muhammad Talha Ahad";
    if (githubUsername) githubUsername.textContent = `@${user.login || GITHUB_USERNAME}`;
    if (githubBio) githubBio.textContent = user.bio || "Entry-Level Backend Developer";
    if (repoCount) repoCount.textContent = Number.isFinite(user.public_repos) ? user.public_repos : "—";
    if (followerCount) followerCount.textContent = Number.isFinite(user.followers) ? user.followers : "—";
    if (followingCount) followingCount.textContent = Number.isFinite(user.following) ? user.following : "—";

    try {
      const repos = await loadPublicRepositories(user.public_repos || 0);
      const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
      if (starCount) starCount.textContent = stars;
      loadGitHubLanguages(repos);
    } catch (repoError) {
      // Basic profile numbers are still reliable even when repository details fail.
      console.warn("GitHub repository details unavailable:", repoError);
      if (starCount) starCount.textContent = "—";
      showLanguageMessage("Repository details temporarily unavailable.");
    }
    showGitHubContent();
  } catch (error) {
    console.warn("GitHub profile unavailable:", error);
    showGitHubError("Live GitHub statistics are temporarily unavailable. Please try again or view my GitHub profile.");
  }
}

if (githubRetry) githubRetry.addEventListener("click", loadGitHubStats);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadGitHubStats);
} else {
  loadGitHubStats();
}

emailjs.init({
  publicKey: "MWbuGWAsO4FpS5NDg",
});

const contactForm = document.getElementById("contact-form");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const sendText = document.getElementById("sendText");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  sendMessageBtn.classList.add("loading");
  sendText.textContent = "Sending...";

  formStatus.textContent = "";
  formStatus.className = "form-status";

  emailjs
    .sendForm("service_uuxgk6n", "template_ig4sax1", contactForm)

    .then(function () {
      formStatus.textContent =
        "Message sent successfully! I'll get back to you soon.";

      formStatus.classList.add("success");

      contactForm.reset();

      sendText.textContent = "Message Sent";

      setTimeout(function () {
        sendText.textContent = "Send Message";
      }, 3000);
    })

    .catch(function (error) {
      console.error("EmailJS Error:", error);

      formStatus.textContent =
        "Error: " + (error.text || "Something went wrong.");

      formStatus.classList.add("error");

      sendText.textContent = "Try Again";
    })

    .finally(function () {
      sendMessageBtn.classList.remove("loading");
    });
});
