async function getWorkData() {
    const arrayWork = await fetch("./data-work.json")
    const json = await arrayWork.json();

    for (let i=0; i < json.length; i++) {

        genererWorks(json, i)
        
    }
}
getWorkData()

function genererWorks(json, i) {
    const data = json[i];
    const section = document.getElementById("work");
    const liste = document.createElement("li");
    const link = document.createElement("a");
    link.href = data.url;
    link.textContent = data.text;
    section.appendChild(liste);
    liste.appendChild(link);
}




//
async function getAboutData() {
    const arrayAbout = await fetch("./data-about.json")
    const json = await arrayAbout.json();

    for (let i=0; i < json.length; i++) {

        genererAbout(json, i)
        
    }
}
getAboutData()



function genererAbout(json, i) {
    const data = json[i];
    const p = document.getElementById("bio");
    p.textContent = data.text;
}



const modal = document.querySelector(".modal");
const work = document.querySelector(".work-container");
const about = document.querySelector(".about-container");

const boutonOpenWork = document.querySelector(".open-work");
const boutonOpenAbout = document.querySelector(".open-about");

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

boutonOpenWork.addEventListener("click", function () {
    header.style.filter = "blur(2px)";
    main.style.filter = "blur(2px)";
    footer.style.filter = "blur(2px)";
    modal.style.display = "flex";
    work.style.display = "flex";
    about.style.display = "none";

});

boutonOpenAbout.addEventListener("click", function () {
    header.style.filter = "blur(2px)";
    main.style.filter = "blur(2px)";
    footer.style.filter = "blur(2px)";
    modal.style.display = "flex";
    work.style.display = "none";
    about.style.display = "flex";

});

const boutonClose = document.querySelector(".close-diary");
boutonClose.addEventListener("click", function () {
    header.style.filter = "blur(0px)";
    main.style.filter = "blur(0px)";
    footer.style.filter = "blur(0px)";
    modal.style.display = "none";
});

