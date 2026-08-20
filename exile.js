let page = 1;

const contents = [

    // PAGE 1
    "In 1892, Rizal was arrested and exiled to Dapitan, Zamboanga del Norte. " +
    "He stayed there for about four years. During his exile, he continued to " +
    "serve the community. He practiced medicine, taught students, helped improve " +
    "the community, conducted scientific studies, and worked on agricultural projects.",

    // PAGE 2
    "In 1896, Rizal was arrested and brought back to Manila. " +
    "He was tried and convicted of charges related to rebellion and other offenses. " +
    "On December 30, 1896, he was executed at Bagumbayan, now known as Rizal Park.",

    // PAGE 3
    "His death strengthened the growing movement for Philippine independence. " +
    "Today, Rizal is remembered not only for his sacrifice but also for his " +
    "belief in education, critical thinking, national identity, and service " +
    "to the Filipino people."
];


function showContent() {
    document.querySelector(".content").innerHTML = contents[page - 1];
    document.querySelector(".content").scrollTop = 0;
}


// NEXT BUTTON
function nextContent() {

    if (page < contents.length) {

        page++;
        showContent();

    } else {

        // Last page → go to another HTML file
        window.location.href = "work.html";
    }
}


// BACK BUTTON
function backContent() {

    if (page > 1) {

        page--;
        showContent();

    }
}