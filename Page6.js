const backgrounds = [
    "Page 6/a.PNG",
    "Page 6/p1.PNG",
    "Page 6/p2.PNG",
    "Page 6/p3.PNG",
    "Page 6/p4.PNG",
    "Page 6/p5.PNG",
    "Page 6/p6.PNG"
];

const container = document.querySelector(".pages");

backgrounds.forEach((image) => {
    const page = document.createElement("section");

    page.className = "page";
    page.style.backgroundImage = `url("${image}")`;

    container.appendChild(page);
});


// Put NEXT button inside the LAST page
const lastPage = container.lastElementChild;
const nextButton = document.querySelector(".next-button");

lastPage.appendChild(nextButton);


function nextPage() {
    window.location.href = "interactive.html";
}