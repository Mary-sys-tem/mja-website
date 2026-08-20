const works = [
    {
        work: "The Philippines a Century Hence",
        description:
            "Rizal discussed the possible future of the Philippines and predicted how Spanish colonial rule could affect the country. He encouraged Filipinos to understand their history and work toward improving their society."
    },

    {
        work: "Letter to the Young Women of Malolos",
        description:
            "Rizal praised the young women of Malolos for their courage in seeking educational opportunities. He emphasized the importance of education, independent thinking, and dignity."
    },

    {
        work: "On the Indolence of the Filipinos",
        description:
            "This essay challenged the stereotype that Filipinos were naturally lazy. Rizal explained that social andeconomic conditions under colonial rule contributed to what was described as Filipino “indolence.”."
    },

    {
        work: "The Philippines Within a Hundred Years",
        description:
            "This work presented Rizal’ s reflections and predictions about the future of the Philippines and its people."
    },

     {
        work: "Poems and Letters",
        description:
            "Rizal also wrote poems and personal letters that reveal his emotions, relationships, intellectual interests, and love for his country."
    },

    {
        work: "Why Rizal’s Works Still Matter",
        description:
            "Rizal’s writings remain relevant because they encourage Filipinos to think critically, value education, recognize injustice, respect human dignity, and take responsibility for their country. His works can also help young people understand how literature can be used to raise awareness and encourage positive change in society.."
    },

];

let page = 0;

const workElement = document.querySelector(".work");
const descriptionElement = document.querySelector(".description");
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", function () {

    if (page < works.length) {

        workElement.textContent = works[page].work;

        descriptionElement.innerHTML =
            "<p>" + works[page].description + "</p>";

        page++;

        if (page === works.length) {
            continueBtn.textContent = "Done";
        }

    } else {
        location.href = "page4.html";
    }

});