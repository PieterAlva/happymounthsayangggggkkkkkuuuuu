```javascript
function openWebsite() {

    const intro = document.getElementById("intro");
    const loading = document.getElementById("loading");
    const main = document.getElementById("main-content");

    intro.style.display = "none";

    loading.style.display = "flex";

    setTimeout(function () {

        loading.style.display = "none";

        main.style.display = "block";

    }, 2500);
}

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(
        ".letter, .counter-section, .gallery, .timeline, .closing"
    );

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    });

    sections.forEach(function(section){

        section.classList.add("hidden-section");

        observer.observe(section);

    });

});
```
