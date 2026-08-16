const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links1");

// =========================================
// ACTIVE NAVIGATION
// =========================================

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => {
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

const openCertificatesModal =
    document.getElementById("openCertificatesModal");

const certificatesModal =
    document.getElementById("certificatesModal");

const closeCertificatesModal =
    document.getElementById("closeCertificatesModal");


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


/* =========================================
   GITHUB USERNAME
========================================= */

const GITHUB_USERNAME = "mtalhaahad-prog";


/* =========================================
   DOM ELEMENTS
========================================= */

const githubLoading =
    document.getElementById("githubLoading");

const githubContent =
    document.getElementById("githubContent");

const githubError =
    document.getElementById("githubError");

const githubErrorText =
    document.getElementById("githubErrorText");

const githubRetry =
    document.getElementById("githubRetry");


/* Profile */

const githubAvatar =
    document.getElementById("githubAvatar");

const githubName =
    document.getElementById("githubName");

const githubUsername =
    document.getElementById("githubUsername");

const githubBio =
    document.getElementById("githubBio");


/* Statistics */

const repoCount =
    document.getElementById("repoCount");

const starCount =
    document.getElementById("starCount");

const followerCount =
    document.getElementById("followerCount");

const followingCount =
    document.getElementById("followingCount");


/* Languages */

const languageBars =
    document.getElementById("languageBars");


/* =========================================
   API TIMEOUT
========================================= */

function fetchWithTimeout(
    url,
    options = {},
    timeout = 10000
) {

    return Promise.race([

        fetch(url, options),

        new Promise((_, reject) => {

            setTimeout(() => {

                reject(
                    new Error(
                        "GitHub API request timed out."
                    )
                );

            }, timeout);

        })

    ]);

}


/* =========================================
   RESET GITHUB UI
========================================= */

function showGitHubLoading() {

    if (githubLoading) {

        githubLoading.style.display = "flex";

    }


    if (githubContent) {

        githubContent.style.display = "none";

    }


    if (githubError) {

        githubError.style.display = "none";

    }

}


/* =========================================
   SHOW CONTENT
========================================= */

function showGitHubContent() {

    if (githubLoading) {

        githubLoading.style.display = "none";

    }


    if (githubError) {

        githubError.style.display = "none";

    }


    if (githubContent) {

        githubContent.style.display = "grid";

    }

}


/* =========================================
   SHOW ERROR
========================================= */

function showGitHubError(message) {

    if (githubLoading) {

        githubLoading.style.display = "none";

    }


    if (githubContent) {

        githubContent.style.display = "none";

    }


    if (githubErrorText) {

        githubErrorText.textContent =
            message ||
            "Unable to load GitHub statistics.";

    }


    if (githubError) {

        githubError.style.display = "flex";

    }

}


/* =========================================
   LOAD GITHUB PROFILE
========================================= */

async function loadGitHubStats() {

    showGitHubLoading();


    try {

        /* =====================================
           GET USER PROFILE
        ===================================== */

        const userResponse =
            await fetchWithTimeout(

                `https://api.github.com/users/${GITHUB_USERNAME}`,

                {
                    headers: {
                        "Accept":
                            "application/vnd.github+json"
                    }
                },

                10000

            );


        if (!userResponse.ok) {

            throw new Error(
                `GitHub returned ${userResponse.status}`
            );

        }


        const user =
            await userResponse.json();


        /* =====================================
           PROFILE INFORMATION
        ===================================== */

        if (githubAvatar) {

            githubAvatar.src =
                user.avatar_url;

        }


        if (githubName) {

            githubName.textContent =
                user.name ||
                "Muhammad Talha Ahad";

        }


        if (githubUsername) {

            githubUsername.textContent =
                `@${user.login}`;

        }


        if (githubBio) {

            githubBio.textContent =
                user.bio ||
                "Full Stack Web Developer";

        }


        /* =====================================
           BASIC STATISTICS
        ===================================== */

        if (repoCount) {

            repoCount.textContent =
                user.public_repos;

        }


        if (followerCount) {

            followerCount.textContent =
                user.followers;

        }


        if (followingCount) {

            followingCount.textContent =
                user.following;

        }


        /* =====================================
           GET REPOSITORIES
        ===================================== */

        const repoResponse =
            await fetchWithTimeout(

                `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,

                {
                    headers: {
                        "Accept":
                            "application/vnd.github+json"
                    }
                },

                10000

            );


        let repositories = [];


        if (repoResponse.ok) {

            repositories =
                await repoResponse.json();

        }


        /* =====================================
           CALCULATE TOTAL STARS
        ===================================== */

        let totalStars = 0;


        repositories.forEach(repo => {

            totalStars +=
                repo.stargazers_count || 0;

        });


        if (starCount) {

            starCount.textContent =
                totalStars;

        }


        /* =====================================
           CALCULATE LANGUAGES
        ===================================== */

        await loadGitHubLanguages(
            repositories
        );


        /* =====================================
           SHOW CONTENT
        ===================================== */

        showGitHubContent();


    } catch (error) {

        console.error(
            "GitHub Statistics Error:",
            error
        );


        showGitHubError(
            "Unable to load GitHub statistics. Please try again."
        );

    }

}


/* =========================================
   LOAD MOST USED LANGUAGES
========================================= */

async function loadGitHubLanguages(
    repositories
) {

    if (!languageBars) {

        return;

    }


    /* Clear old languages */

    languageBars.innerHTML = "";


    if (
        !repositories ||
        repositories.length === 0
    ) {

        languageBars.innerHTML = `
            <p class="language-empty">
                No public repositories found.
            </p>
        `;

        return;

    }


    /* =====================================
       LANGUAGE TOTALS
    ===================================== */

    const languageTotals = {};


    /*
       Get languages from repositories.
       We only process repositories that
       actually contain programming languages.
    */

    const languageRequests =
        repositories
            .filter(repo => !repo.fork)
            .slice(0, 20)
            .map(async repo => {

                try {

                    const response =
                        await fetchWithTimeout(

                            repo.languages_url,

                            {
                                headers: {
                                    "Accept":
                                        "application/vnd.github+json"
                                }
                            },

                            7000

                        );


                    if (!response.ok) {

                        return {};

                    }


                    return await response.json();


                } catch (error) {

                    console.warn(
                        `Could not load languages for ${repo.name}`,
                        error
                    );

                    return {};

                }

            });


    const languageResults =
        await Promise.all(
            languageRequests
        );


    /* =====================================
       ADD LANGUAGE BYTES
    ===================================== */

    languageResults.forEach(
        languages => {

            Object.entries(languages)
                .forEach(
                    ([language, bytes]) => {

                        if (
                            !languageTotals[
                                language
                            ]
                        ) {

                            languageTotals[
                                language
                            ] = 0;

                        }


                        languageTotals[
                            language
                        ] += bytes;

                    }
                );

        }
    );


    /* =====================================
       SORT LANGUAGES
    ===================================== */

    const sortedLanguages =
        Object.entries(languageTotals)
            .sort(
                (a, b) => b[1] - a[1]
            )
            .slice(0, 5);


    if (
        sortedLanguages.length === 0
    ) {

        languageBars.innerHTML = `
            <p class="language-empty">
                No language data available.
            </p>
        `;

        return;

    }


    /* =====================================
       TOTAL BYTES
    ===================================== */

    const totalBytes =
        sortedLanguages.reduce(
            (total, [, bytes]) =>
                total + bytes,
            0
        );


    /* =====================================
       CREATE LANGUAGE BARS
    ===================================== */

    sortedLanguages.forEach(
        ([language, bytes]) => {

            const percentage =
                (
                    bytes /
                    totalBytes *
                    100
                ).toFixed(1);


            const item =
                document.createElement("div");

            item.className =
                "language-item";


            item.innerHTML = `

                <div class="language-info">

                    <span class="language-name">
                        ${language}
                    </span>

                    <span class="language-percent">
                        ${percentage}%
                    </span>

                </div>

                <div class="language-track">

                    <div
                        class="language-fill"
                        style="width: ${percentage}%"
                    ></div>

                </div>

            `;


            languageBars.appendChild(item);

        }
    );

}


/* =========================================
   RETRY
========================================= */

if (githubRetry) {

    githubRetry.addEventListener(
        "click",
        function () {

            loadGitHubStats();

        }
    );

}


/* =========================================
   INITIAL LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadGitHubStats();

    }
);