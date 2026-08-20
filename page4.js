let page = 0;

const backgrounds = [
    "Page 4/p1.PNG",
    "Page 4/p2.PNG",
    "Page 4/p3.PNG",
    "Page 4/p4.PNG",
    "Page 4/p5.PNG",
    "Page 4/p6.PNG",
    "Page 4/p7.PNG",
    "Page 4/p8.PNG"
];

function nextBackground() {

    const background = document.querySelector(".background");

    // If already on the last image
    if (page === backgrounds.length - 1) {

        // Small fade-out before going to the next HTML
        background.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "Page5.html";
        }, 500);

        return;
    }

    // Move to next image
    page++;

    // Fade out
    background.style.opacity = "0";
    background.style.transform = "scale(1.05)";

    setTimeout(() => {

        background.style.backgroundImage =
            `url("${backgrounds[page]}")`;

        // Fade in
        background.style.opacity = "1";
        background.style.transform = "scale(1)";

    }, 400);
}