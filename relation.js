let page = 1;

const contents = [

    // PAGE 1
    "Rizal was influenced by many people throughout his life. " +
    "His mother, Teodora Alonso, strongly influenced his love for " +
    "education and literature. His siblings and family also supported " +
    "him throughout his studies and struggles.",

    // PAGE 2
    "Rizal also had important friendships and relationships with " +
    "Filipino reformists and intellectuals, including Marcelo H. del Pilar " +
    "and Graciano López Jaena. His experiences with fellow Filipinos, " +
    "Spanish authorities, teachers, scholars, and people he met during " +
    "his travels influenced his understanding of Philippine society.",

    // PAGE 3
    "Among the women who became important in his life were " +
    "Segunda Katigbak, Leonor Rivera, and Josephine Bracken. " +
    "His relationships and personal experiences also influenced " +
    "some of his thoughts and writings."
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
        window.location.href = "exile.html";
    }
}


// BACK BUTTON
function backContent() {

    if (page > 1) {

        page--;
        showContent();

    }
}