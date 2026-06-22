// ======================
// HAPPY MONTH WEBSITE
// Pieter ❤️ Wulandari
// ======================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded ❤️");

    const mainContent = document.getElementById("main-content");
    const loading = document.getElementById("loading");

    if (mainContent) {
        mainContent.style.display = "none";
    }

    if (loading) {
        loading.style.display = "none";
    }

});

// ======================
// OPEN WEBSITE
// ======================

function openWebsite() {

    const intro = document.getElementById("intro");
    const loading = document.getElementById("loading");
    const main = document.getElementById("main-content");

    if (!intro || !loading || !main) {
        console.error("Element tidak ditemukan!");
        return;
    }

    // sembunyikan intro
    intro.style.display = "none";

    // tampilkan loading
    loading.style.display = "flex";

    // loading 2.5 detik
    setTimeout(function () {

        loading.style.display = "none";

        main.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2500);

}

// ======================
// SCROLL ANIMATION
// ======================

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.1
});

window.addEventListener("load", function () {

    const sections = document.querySelectorAll(
        ".letter, .counter-section, .gallery, .timeline, .closing"
    );

    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(60px)";
        section.style.transition = "1s";

        observer.observe(section);

    });

});

// ======================
// FLOATING HEARTS
// ======================

setInterval(function () {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.opacity = "1";

    document.body.appendChild(heart);

    let position = -30;

    const animation = setInterval(function () {

        position += 2;

        heart.style.bottom = position + "px";

        heart.style.opacity = 1 - (position / 900);

        if (position > 900) {

            clearInterval(animation);
            heart.remove();

        }

    }, 20);

}, 1200);

// ======================
// HERO PHOTO EFFECT
// ======================

window.addEventListener("scroll", function () {

    const photo = document.querySelector(".hero-photo");

    if (!photo) return;

    const value = window.scrollY * 0.05;

    photo.style.transform =
        "translateY(" + value + "px)";

});

// ======================
// GALLERY EFFECT
// ======================

window.addEventListener("load", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-8px)";
            card.style.transition = "0.4s";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0px)";

        });

    });

});

// ======================
// TYPEWRITER TITLE
// ======================

window.addEventListener("load", function () {

    const title = document.querySelector(".glass h1");

    if (!title) return;

    const originalText = title.innerText;

    title.innerText = "";

    let i = 0;

    const typing = setInterval(function () {

        title.innerText += originalText.charAt(i);

        i++;

        if (i >= originalText.length) {

            clearInterval(typing);

        }

    }, 120);

});

// ======================
// CONSOLE MESSAGE
// ======================

console.log(
    "%cHappy Month ❤️ Pieter & Wulandari",
    "color:pink;font-size:20px;font-weight:bold;"
);